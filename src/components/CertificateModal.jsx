import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, X, Award, Send, ShieldCheck, Loader2, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export const CertificateModal = ({ isOpen, onClose, data = {} }) => {
  const [emailInput, setEmailInput] = useState(data.parentEmail || '');
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const formattedDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const childName = data.childName || 'Little Artist';
  const childAge = data.childAge ? `${data.childAge} Years` : 'Up to 5 Years';
  const parentName = data.parentName || 'Parent / Guardian';

  // Guaranteed pure HTML5 2D Canvas HD Image Generator (100% reliable)
  const generateCertificateImagePNG = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1130;
    const ctx = canvas.getContext('2d');

    // 1. Fill Background
    ctx.fillStyle = '#FFFDF5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Outer Heavy Gold Border
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 26;
    ctx.strokeRect(13, 13, canvas.width - 26, canvas.height - 26);

    // 3. Inner Fine Double Gold Borders
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 5;
    ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

    ctx.strokeStyle = '#FDE68A';
    ctx.lineWidth = 3;
    ctx.strokeRect(46, 46, canvas.width - 92, canvas.height - 92);

    // 4. Load Logo Image onto Canvas
    try {
      const img = new Image();
      img.src = logoImg;
      await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // fallback if image fails
      });
      if (img.complete && img.naturalWidth !== 0) {
        const logoWidth = 140;
        const logoHeight = (img.naturalHeight * logoWidth) / img.naturalWidth;
        ctx.drawImage(img, (canvas.width - logoWidth) / 2, 70, logoWidth, logoHeight);
      }
    } catch (e) {
      console.log('Logo render fallback:', e);
    }

    // 5. Header Text
    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TN HAPPY KIDS • STATE LEVEL COMPETITION 2026', canvas.width / 2, 195);

    // Title
    ctx.fillStyle = '#EA580C';
    ctx.font = 'bold 64px Georgia, serif';
    ctx.fillText('Certificate of Completion', canvas.width / 2, 275);

    // Subtitle
    ctx.fillStyle = '#78350F';
    ctx.font = 'italic bold 24px sans-serif';
    ctx.fillText('Vinayagar Chaturthi Kids State Level Drawing & Activity Contest', canvas.width / 2, 325);

    // Divider Line
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 355);
    ctx.lineTo(canvas.width - 350, 355);
    ctx.stroke();

    // 6. Recipient Section
    ctx.fillStyle = '#64748B';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('THIS IS PROUDLY PRESENTED TO', canvas.width / 2, 430);

    // Child Name
    ctx.fillStyle = '#451A03';
    ctx.font = 'bold 68px Georgia, serif';
    ctx.fillText(childName, canvas.width / 2, 520);

    // Name Underline
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(400, 550);
    ctx.lineTo(canvas.width - 400, 550);
    ctx.stroke();

    // Age & Parent Name
    ctx.fillStyle = '#78350F';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(`Age: ${childAge}   •   Parent / Guardian: ${parentName}`, canvas.width / 2, 610);

    // Appreciation Paragraph
    ctx.fillStyle = '#334155';
    ctx.font = '22px sans-serif';
    ctx.fillText('For successfully participating & demonstrating remarkable artistic creativity in the', canvas.width / 2, 685);

    ctx.fillStyle = '#78350F';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('TN Happy Kids State Level Vinayagar Chaturthi Drawing Competition 2026.', canvas.width / 2, 725);

    // 7. Footer Divider Line
    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, 870);
    ctx.lineTo(canvas.width - 120, 870);
    ctx.stroke();

    // Date (Left)
    ctx.textAlign = 'left';
    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('DATE OF ISSUE', 140, 930);

    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 25px sans-serif';
    ctx.fillText(formattedDate, 140, 970);

    // Official Seal (Center)
    ctx.textAlign = 'center';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 945, 65, 0, Math.PI * 2);
    ctx.fillStyle = '#F59E0B';
    ctx.fill();
    ctx.strokeStyle = '#B45309';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = '#451A03';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('OFFICIAL SEAL', canvas.width / 2, 940);
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('TN HAPPY KIDS 2026', canvas.width / 2, 965);

    // Authorized Signature (Right)
    ctx.textAlign = 'right';
    ctx.fillStyle = '#78350F';
    ctx.font = 'italic bold 28px Georgia, serif';
    ctx.fillText('TN Happy Kids Mgmt', canvas.width - 140, 935);

    ctx.strokeStyle = '#78350F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width - 360, 952);
    ctx.lineTo(canvas.width - 140, 952);
    ctx.stroke();

    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('AUTHORIZED SIGNATURE', canvas.width - 140, 985);

    return canvas.toDataURL('image/png');
  };

  // Clear localStorage helper
  const clearCompetitionLocalStorage = () => {
    localStorage.removeItem('registrationData');
    localStorage.removeItem('userRegistration');
    localStorage.removeItem('drawingUpload');
    localStorage.removeItem('dotActivity');
    localStorage.clear();
  };

  // Function to download Certificate as Image (PNG)
  const handleDownloadImage = async () => {
    try {
      setStatusMsg(null);
      const imagePNG = await generateCertificateImagePNG();

      const link = document.createElement('a');
      link.href = imagePNG;
      link.download = `${childName.replace(/\s+/g, '_')}_Vinayagar_Drawing_Certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clear local storage after download
      clearCompetitionLocalStorage();

      setStatusMsg({
        type: 'success',
        text: 'Certificate image downloaded successfully & saved local data cleared!',
      });
    } catch (err) {
      console.error('Error generating certificate image:', err);
      setStatusMsg({ type: 'error', text: 'Failed to download certificate image: ' + err.message });
    }
  };

  // Function to send Certificate Image to Gmail
  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.trim()) {
      setStatusMsg({ type: 'error', text: 'Please enter a valid Gmail address.' });
      return;
    }

    setIsSending(true);
    setStatusMsg(null);

    try {
      const certificateBase64 = await generateCertificateImagePNG();
      const payload = {
        recipientEmail: emailInput.trim(),
        childName,
        childAge,
        parentName,
        completionDate: formattedDate,
        certificateBase64,
      };

      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned invalid response.');
      }

      const result = await response.json();

      if (response.ok && result.success) {
        // Clear local storage after successfully sending email
        clearCompetitionLocalStorage();

        setStatusMsg({
          type: 'success',
          text: result.message || `E-Certificate image sent to ${emailInput} & local storage cleared! 📧`,
        });
      } else {
        setStatusMsg({
          type: 'error',
          text: result.message || 'Error sending email to Gmail.',
        });
      }
    } catch (err) {
      console.error('API call error:', err);
      setStatusMsg({
        type: 'error',
        text: 'Failed to send certificate email: ' + err.message,
      });
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 12 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-stone-900 rounded-3xl p-3 sm:p-4 shadow-2xl border-2 border-amber-400/60 max-h-[92vh] flex flex-col justify-between overflow-hidden mt-6 sm:mt-8"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 z-20 p-1.5 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title Header */}
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <h3 className="text-sm sm:text-lg font-extrabold text-amber-100 font-heading">
              Official E-Certificate of Completion
            </h3>
          </div>

          {/* Status Message Banner */}
          {statusMsg && (
            <div
              className={`mb-2 px-3 py-1 rounded-xl text-xs font-bold flex items-center justify-between border ${statusMsg.type === 'success'
                ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                : 'bg-rose-950/80 border-rose-500/80 text-rose-200'
                }`}
            >
              <span>{statusMsg.text}</span>
              <button onClick={() => setStatusMsg(null)} className="ml-2 text-stone-400 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* E-CERTIFICATE DISPLAY CONTAINER */}
          <div className="w-full overflow-x-auto p-1 bg-stone-950/80 rounded-2xl mb-2.5 shadow-inner flex justify-center">
            <div className="w-[520px] h-[355px] mx-auto bg-[#FFFDF5] text-stone-900 p-4 relative flex flex-col justify-between border-[6px] border-amber-600 shadow-2xl select-none shrink-0">
              {/* Inner Double Gold Border */}
              <div className="absolute inset-1 border-2 border-amber-400/80 pointer-events-none" />
              <div className="absolute inset-2.5 border border-amber-300/50 pointer-events-none" />

              {/* CERTIFICATE HEADER */}
              <div className="text-center pt-0.5 relative z-10">
                <div className="flex justify-center items-center gap-1.5 mb-0.5">
                  <img
                    src={logoImg}
                    alt="TN Happy Kids Logo"
                    className="h-7 w-auto object-contain bg-white px-1 py-0.5 rounded border border-amber-200 shadow-sm"
                  />
                </div>
                <h4 className="text-[8px] font-black tracking-[0.18em] text-amber-800 uppercase">
                  TN HAPPY KIDS • STATE LEVEL COMPETITION 2026
                </h4>
                <h1
                  className="text-lg sm:text-xl font-extrabold text-orange-600 tracking-wide mt-0.5 uppercase drop-shadow-sm"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Certificate of Completion
                </h1>
                <p className="text-[9px] text-amber-900/80 font-bold italic mt-0.5">
                  Vinayagar Chaturthi Kids State Level Drawing & Activity Contest
                </p>
              </div>

              {/* RECIPIENT BODY */}
              <div className="text-center px-3 relative z-10">
                <p className="text-[8px] uppercase font-extrabold text-stone-600 tracking-widest mb-0.5">
                  This is proudly presented to
                </p>
                <div className="inline-block border-b-2 border-amber-500 px-5 py-0.5 my-0.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-amber-950 font-heading">
                    {childName}
                  </h2>
                </div>
                <p className="text-[9px] font-bold text-amber-900 mt-0.5">
                  Age: <span className="font-extrabold text-orange-600">{childAge}</span> &bull; Parent: <span className="font-extrabold text-stone-950">{parentName}</span>
                </p>

                <p className="text-[8px] sm:text-[9px] text-stone-700 max-w-sm mx-auto leading-tight mt-1 font-medium">
                  For successfully participating & demonstrating remarkable artistic creativity in the <strong className="text-amber-900">TN Happy Kids State Level Vinayagar Chaturthi Drawing Competition 2026</strong>.
                </p>
              </div>

              {/* CERTIFICATE FOOTER */}
              <div className="flex items-end justify-between px-3 pb-0.5 relative z-10 border-t border-amber-200/80 pt-1.5">
                {/* Date Left */}
                <div className="text-left">
                  <p className="text-[7px] uppercase tracking-wider font-extrabold text-amber-800">
                    Date of Issue
                  </p>
                  <p className="text-[9px] font-bold text-stone-900 mt-0.5">{formattedDate}</p>
                </div>

                {/* Official Gold Seal Center */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 border border-amber-200 shadow-md flex items-center justify-center text-center p-0.5">
                    <div className="w-full h-full rounded-full border border-amber-900/40 flex flex-col items-center justify-center text-amber-950">
                      <ShieldCheck className="w-3 h-3 text-amber-950" />
                      <span className="text-[4px] font-black uppercase tracking-tighter">SEAL</span>
                    </div>
                  </div>
                  <span className="text-[6px] font-bold text-amber-900 mt-0.5 uppercase tracking-wider">
                    APPROVED
                  </span>
                </div>

                {/* Director Signature Right */}
                <div className="text-right">
                  <div className="h-4 flex items-center justify-end">
                    <span className="font-serif italic font-extrabold text-amber-900 text-[11px] tracking-wide">
                      TN Happy Kids Mgmt
                    </span>
                  </div>
                  <div className="w-20 border-b border-amber-800 ml-auto my-0.5" />
                  <p className="text-[7px] uppercase tracking-wider font-extrabold text-amber-800">
                    Authorized Signature
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS & GMAIL SEND FORM */}
          <div className="bg-stone-950 p-2.5 sm:p-3 rounded-2xl border border-stone-800 flex flex-col md:flex-row gap-2.5 items-center justify-between">
            {/* Download Image Button */}
            <div className="w-full md:w-auto">
              <button
                onClick={handleDownloadImage}
                className="w-full md:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Certificate (PNG)</span>
              </button>
            </div>

            {/* Email Send Form */}
            <form onSubmit={handleSendEmail} className="flex items-center gap-1.5 w-full md:w-auto flex-1 max-w-md">
              <div className="relative flex-1">
                <Mail className="w-3.5 h-3.5 text-amber-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter Gmail address"
                  className="w-full pl-8 pr-2 py-1.5 bg-stone-900 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send to Gmail</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
