import os
from PIL import Image

def process_logo():
    src_file = r"c:\Users\hp\Desktop\New folder\src\assets\images\images (1).jfif"
    target_src = r"c:\Users\hp\Desktop\New folder\src\assets\images\logo.png"
    target_pub = r"c:\Users\hp\Desktop\New folder\public\assets\images\logo.png"

    if not os.path.exists(src_file):
        print(f"File not found: {src_file}")
        return

    img = Image.open(src_file).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Floodfill background removal if outer edge is near-white or light
    visited = [[False for _ in range(height)] for _ in range(width)]

    def is_bg(r, g, b):
        return r > 220 and g > 220 and b > 220

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

    while queue:
        cx, cy = queue.pop(0)
        pixels[cx, cy] = (255, 255, 255, 0)

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                nr, ng, nb, na = pixels[nx, ny]
                if is_bg(nr, ng, nb):
                    visited[nx][ny] = True
                    queue.append((nx, ny))

    img.save(target_src, "PNG")
    img.save(target_pub, "PNG")
    print("Logo updated successfully!")

if __name__ == "__main__":
    process_logo()
