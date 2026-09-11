import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Mail, CheckCircle2, X, Sparkles, Award, Calendar, User, Send, ShieldCheck, Loader2 } from 'lucide-react';

export const CertificateModal = ({ isOpen, onClose, data = {} }) => {
  const certificateRef = useRef(null);
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

  // Helper to capture certificate element as canvas
  const getCertificateCanvas = async () => {
    if (!certificateRef.current) return null;
    return await html2canvas(certificateRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#FFFDF5',
      windowWidth: 1024,
      onclone: (clonedDoc) => {
        const allNodes = clonedDoc.querySelectorAll('*');
        allNodes.forEach((node) => {
          const style = window.getComputedStyle(node);
          ['color', 'backgroundColor', 'borderColor', 'outlineColor'].forEach((attr) => {
            const val = style.getPropertyValue(attr);
            if (val && val.includes('oklch')) {
              node.style.setProperty(attr, attr.includes('background') ? '#FFFDF5' : '#1E293B', 'important');
            }
          });
        });
      },
    });
  };

  // Function to generate base64 image or download image
  const handleDownloadImage = async () => {
    try {
      setStatusMsg(null);
      const canvas = await getCertificateCanvas();
      if (!canvas) throw new Error('Canvas rendering failed');

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${childName.replace(/\s+/g, '_')}_Vinayagar_Drawing_Certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatusMsg({ type: 'success', text: 'Certificate image downloaded successfully! 🎨' });
    } catch (err) {
      console.error('Error generating image:', err);
      setStatusMsg({ type: 'error', text: 'Failed to download certificate image: ' + err.message });
    }
  };

  // Function to download PDF
  const handleDownloadPDF = async () => {
    try {
      setStatusMsg(null);
      const canvas = await getCertificateCanvas();
      if (!canvas) throw new Error('Canvas rendering failed');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${childName.replace(/\s+/g, '_')}_Vinayagar_Drawing_Certificate.pdf`);

      setStatusMsg({ type: 'success', text: 'Certificate PDF downloaded successfully! 📄' });
    } catch (err) {
      console.error('Error generating PDF:', err);
      setStatusMsg({ type: 'error', text: 'Failed to download PDF: ' + err.message });
    }
  };

  // Send email function calling Express backend API
  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.trim()) {
      setStatusMsg({ type: 'error', text: 'Please enter a valid Gmail / Email address.' });
      return;
    }

    setIsSending(true);
    setStatusMsg(null);

    try {
      const canvas = await getCertificateCanvas();
      const certificateBase64 = canvas ? canvas.toDataURL('image/png') : null;

      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientEmail: emailInput.trim(),
          childName,
          childAge,
          parentName,
          completionDate: formattedDate,
          certificateBase64,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMsg({ type: 'success', text: result.message || `E-Certificate sent to ${emailInput}! 📧` });
      } else {
        setStatusMsg({
          type: 'error',
          text: result.message || 'Error sending email. Please verify credentials.',
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-stone-900 rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-amber-400/60 my-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Header */}
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-amber-100 font-heading">
              Official E-Certificate of Completion 🏆
            </h3>
          </div>

          {/* Status Message Banner */}
          {statusMsg && (
            <div
              className={`mb-4 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between border ${
                statusMsg.type === 'success'
                  ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-500/80 text-rose-200'
              }`}
            >
              <span>{statusMsg.text}</span>
              <button onClick={() => setStatusMsg(null)} className="ml-2 text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* SCROLLABLE CERTIFICATE DISPLAY CONTAINER */}
          <div className="w-full overflow-x-auto p-1 bg-stone-950/80 rounded-2xl mb-5 shadow-inner">
            
            {/* THE E-CERTIFICATE TEMPLATE TARGET FOR HTML2CANVAS */}
            <div
              ref={certificateRef}
              className="w-[800px] h-[565px] mx-auto bg-[#FFFDF5] text-stone-900 p-8 relative flex flex-col justify-between border-[12px] border-amber-600 shadow-2xl select-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {/* Inner Double Gold Border */}
              <div className="absolute inset-2 border-2 border-amber-400/80 pointer-events-none" />
              <div className="absolute inset-4 border border-amber-300/50 pointer-events-none" opacity="0.6" />

              {/* CERTIFICATE HEADER */}
              <div className="text-center pt-2 relative z-10">
                <div className="flex justify-center items-center gap-3 mb-2">
                  <img
                    src="/assets/images/logo.png"
                    alt="TN Happy Kids Logo"
                    className="h-14 w-auto object-contain bg-white px-2 py-1 rounded-lg border border-amber-200 shadow-sm"
                  />
                </div>
                <h4 className="text-xs font-black tracking-[0.25em] text-amber-800 uppercase">
                  TN HAPPY KIDS • STATE LEVEL COMPETITION 2026
                </h4>
                <h1
                  className="text-3xl font-extrabold text-orange-600 tracking-wide mt-1 uppercase drop-shadow-sm"
                  style={{ fontFamily: "'Playfair Display', serif, Georgia" }}
                >
                  Certificate of Completion
                </h1>
                <p className="text-xs text-amber-900/80 font-bold italic mt-1">
                  Vinayagar Chaturthi Kids State Level Drawing & Activity Contest
                </p>
              </div>

              {/* RECIPIENT BODY */}
              <div className="text-center px-8 relative z-10">
                <p className="text-xs uppercase font-extrabold text-stone-600 tracking-widest mb-1">
                  This is proudly presented to
                </p>
                <div className="inline-block border-b-2 border-amber-500 px-8 py-1 my-1">
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold text-amber-950 font-heading"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {childName}
                  </h2>
                </div>
                <p className="text-xs font-bold text-amber-900 mt-2">
                  Age: <span className="font-extrabold text-orange-600">{childAge}</span> &bull; Parent / Guardian: <span className="font-extrabold text-stone-950">{parentName}</span>
                </p>

                <p className="text-xs text-stone-700 max-w-lg mx-auto leading-relaxed mt-3 font-medium">
                  For successfully participating & demonstrating remarkable artistic creativity in the <strong className="text-amber-900">TN Happy Kids State Level Vinayagar Chaturthi Drawing Competition 2026</strong>.
                </p>
              </div>

              {/* CERTIFICATE FOOTER WITH SIGNATURES & OFFICIAL GOLD STAMP */}
              <div className="flex items-end justify-between px-6 pb-2 relative z-10 border-t border-amber-200/80 pt-4">
                
                {/* Date Left */}
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider font-extrabold text-amber-800">
                    Date of Issue
                  </p>
                  <p className="text-xs font-bold text-stone-900 mt-0.5">{formattedDate}</p>
                </div>

                {/* Official Gold Seal Center */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 border-4 border-amber-200 shadow-md flex items-center justify-center text-center p-1">
                    <div className="w-full h-full rounded-full border border-amber-900/40 flex flex-col items-center justify-center text-amber-950">
                      <ShieldCheck className="w-5 h-5 text-amber-950" />
                      <span className="text-[7px] font-black uppercase tracking-tighter">OFFICIAL SEAL</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-amber-900 mt-1 uppercase tracking-wider">
                    TN HAPPY KIDS APPROVED
                  </span>
                </div>

                {/* Director Signature Right */}
                <div className="text-right">
                  <div className="h-8 flex items-center justify-end">
                    <span className="font-serif italic font-extrabold text-amber-900 text-sm tracking-wide">
                      TN Happy Kids Mgmt
                    </span>
                  </div>
                  <div className="w-32 border-b border-amber-800 ml-auto my-0.5" />
                  <p className="text-[10px] uppercase tracking-wider font-extrabold text-amber-800">
                    Authorized Signature
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS & GMAIL SEND FORM */}
          <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Quick Download Buttons */}
            <div className="flex items-center gap-2.5 w-full md:w-auto">
              <button
                onClick={handleDownloadImage}
                className="flex-1 md:flex-none px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Image</span>
              </button>
              <button
                onClick={handleDownloadPDF}
                className="flex-1 md:flex-none px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Email Send Form */}
            <form onSubmit={handleSendEmail} className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-md">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter Gmail / Email address"
                  className="w-full pl-9 pr-3 py-2 bg-stone-900 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Certificate</span>
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
