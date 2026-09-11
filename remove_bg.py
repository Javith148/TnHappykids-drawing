import os
from PIL import Image, ImageFilter

def remove_background(image_path, output_path, tolerance=30):
    """
    Floodfill from image borders to remove white/near-white outer background.
    """
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Create a visited matrix
    visited = [[False for _ in range(height)] for _ in range(width)]
    
    # We define background threshold: high brightness near white
    def is_bg(r, g, b):
        return r > 215 and g > 215 and b > 215

    # Collect seed points along all 4 edges
    seeds = []
    for x in range(width):
        seeds.append((x, 0))
        seeds.append((x, height - 1))
    for y in range(height):
        seeds.append((0, y))
        seeds.append((width - 1, y))

    queue = []
    for x, y in seeds:
        r, g, b, a = pixels[x, y]
        if is_bg(r, g, b) and not visited[x][y]:
            visited[x][y] = True
            queue.append((x, y))

    # BFS Floodfill to make connected outer background transparent
    while queue:
        cx, cy = queue.pop(0)
        pixels[cx, cy] = (255, 255, 255, 0) # Make transparent

        # Check 4 adjacent neighbors
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                nr, ng, nb, na = pixels[nx, ny]
                if is_bg(nr, ng, nb):
                    visited[nx][ny] = True
                    queue.append((nx, ny))

    # Soft edge feathering/smoothing: for pixels bordering transparency with high brightness, fade alpha
    for x in range(width):
        for y in range(height):
            r, g, b, a = pixels[x, y]
            if a > 0:
                # Check if any neighbor is transparent
                has_trans_neighbor = False
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, 1), (-1, 1), (1, -1)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if pixels[nx, ny][3] == 0:
                            has_trans_neighbor = True
                            break
                if has_trans_neighbor and (r > 200 and g > 200 and b > 200):
                    # Blend alpha smoothly on edge
                    avg = (r + g + b) / 3.0
                    alpha = int(max(0, 255 - (avg - 180) * 3))
                    pixels[x, y] = (r, g, b, min(a, alpha))

    img.save(output_path, "PNG")
    print(f"Processed: {image_path} -> {output_path}")

def main():
    dirs = [
        r"c:\Users\hp\Desktop\New folder\public\assets\images",
        r"c:\Users\hp\Desktop\New folder\src\assets\images"
    ]
    for d in dirs:
        if not os.path.exists(d):
            continue
        for fname in os.listdir(d):
            if fname.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(d, fname)
                remove_background(filepath, filepath)

if __name__ == "__main__":
    main()
