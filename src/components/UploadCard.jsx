import React, { useRef } from 'react';
import { Upload, FileImage, Video, Trash2, RefreshCw, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const UploadCard = ({
  type = 'image', // 'image' or 'video'
  title,
  subtitle,
  acceptFormats,
  accept,
  selectedFile,
  fileInfo,
  onFileSelect,
  onFileRemove,
}) => {
  const inputRef = useRef(null);

  const fileAccept = accept || (type === 'video' 
    ? '.mp4,.webm,.mov,.avi,video/mp4,video/webm,video/quicktime,video/x-msvideo' 
    : '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp');

  const processFile = (file) => {
    if (!file) return;

    const fileName = file.name.toLowerCase();
    const fileExt = fileName.substring(fileName.lastIndexOf('.'));

    if (type === 'image') {
      const validImageExts = ['.jpg', '.jpeg', '.png', '.webp'];
      const isValidExt = validImageExts.includes(fileExt);
      const isValidMime = file.type ? file.type.startsWith('image/') : true;

      if (!isValidExt || !isValidMime) {
        alert('Invalid Image Format! 🎨\n\nOnly JPG, JPEG, PNG, and WEBP image files are allowed.');
        return;
      }
    } else if (type === 'video') {
      const validVideoExts = ['.mp4', '.webm', '.mov', '.avi'];
      const isValidExt = validVideoExts.includes(fileExt);
      const isValidMime = file.type ? file.type.startsWith('video/') : true;

      if (!isValidExt || !isValidMime) {
        alert('Invalid Video Format! 🎥\n\nOnly MP4, WEBM, MOV, and AVI video files are allowed.');
        return;
      }
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const previewUrl = event.target.result;
      const sizeFormatted = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
      onFileSelect({
        file,
        previewUrl,
        name: file.name,
        size: sizeFormatted,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const Icon = type === 'image' ? FileImage : Video;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-xl relative overflow-hidden flex flex-col justify-between transition-all hover:border-amber-400">
      {/* Top Marigold Accent */}
      <div className="absolute top-0 right-0 p-3 opacity-60 pointer-events-none">
        <img src="/assets/images/modak.png" alt="Modak" className="w-10 h-10 object-contain" />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shadow-sm"
          >
            <Icon className="w-6 h-6" />
          </motion.div>
          <div>
            <h3 className="font-heading text-xl font-bold text-amber-950">{title}</h3>
            <p className="text-xs text-amber-800/70">{subtitle}</p>
          </div>
        </div>

        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          accept={fileAccept}
          className="hidden"
        />

        {!selectedFile ? (
          /* Dropzone State */
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className="mt-4 border-2 border-dashed border-amber-400/80 rounded-2xl p-8 text-center bg-amber-50/50 hover:bg-amber-100/60 transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[220px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotate: 6 }}
              className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white shadow-lg border-2 border-yellow-300 flex items-center justify-center mb-3 group-hover:shadow-orange-500/50 transition-all"
            >
              <div className="absolute inset-0 rounded-full bg-amber-400 blur-md opacity-40 group-hover:opacity-80 animate-pulse" />
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Upload className="w-8 h-8 relative z-10 drop-shadow-md" />
              </motion.div>
            </motion.div>
            <p className="font-heading font-bold text-amber-900 text-base mb-1">
              Click or drag & drop file to upload
            </p>
            <p className="text-xs text-amber-700/80">
              Supported formats: {acceptFormats}
            </p>
          </div>
        ) : (
          /* Preview State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 bg-amber-100/40 rounded-2xl p-4 border border-amber-300 shadow-inner flex flex-col items-center"
          >
            {/* Success Banner */}
            <div className="w-full flex items-center justify-between bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1.5 rounded-xl mb-3 text-xs font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Uploaded Successfully
              </span>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>

            {/* Media Preview */}
            <div className="w-full max-h-56 rounded-xl overflow-hidden mb-3 bg-slate-900 flex items-center justify-center shadow-md relative group">
              {type === 'image' ? (
                <img
                  src={selectedFile}
                  alt="Drawing Upload Preview"
                  className="w-full h-48 object-contain"
                />
              ) : (
                <video
                  src={selectedFile}
                  controls
                  className="w-full h-48 object-contain"
                />
              )}
            </div>

            {/* File Info */}
            <div className="w-full flex items-center justify-between text-xs text-amber-900 font-semibold mb-4 px-1">
              <span className="truncate max-w-[200px]" title={fileInfo?.name}>
                📄 {fileInfo?.name || 'Uploaded File'}
              </span>
              <span className="bg-amber-200/80 px-2 py-0.5 rounded text-amber-800">
                {fileInfo?.size || 'MB'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex items-center gap-2">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="flex-1 py-2 px-3 bg-amber-200/70 hover:bg-amber-300/80 text-amber-900 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Replace File</span>
              </button>
              <button
                type="button"
                onClick={onFileRemove}
                className="py-2 px-3 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
