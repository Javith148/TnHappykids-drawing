import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import nodemailer from 'nodemailer';

// Custom Vite plugin to handle SMTP email sending directly in Vite without separate server
const emailSmtpPlugin = () => ({
  name: 'email-smtp-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith('/api/send-certificate') && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { recipientEmail, childName, childAge, parentName, completionDate, certificateBase64 } = data;

            if (!recipientEmail) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ success: false, message: 'Recipient email is required' }));
            }

            // Gmail SMTP configuration using provided credentials
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'javithsukkur@gmail.com',
                pass: 'krwqlgekvajxjcpy',
              },
            });

            const mailOptions = {
              from: `"TN Happy Kids Competition" <javithsukkur@gmail.com>`,
              to: recipientEmail,
              subject: `🎉 E-Certificate of Completion - ${childName || 'Little Artist'} | TN Happy Kids 2026`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fffbeb; border: 3px solid #f59e0b; border-radius: 16px; padding: 24px; color: #451a03;">
                  <div style="text-align: center; margin-bottom: 20px;">
                    <h1 style="color: #ea580c; font-size: 26px; margin: 0;">🎨 TN HAPPY KIDS 2026</h1>
                    <p style="color: #0d9488; font-weight: bold; margin-top: 4px;">State Level Vinayagar Chaturthi Drawing Competition</p>
                  </div>

                  <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; border: 1px solid #fde68a;">
                    <h2 style="color: #b45309; text-align: center; margin-top: 0;">Congratulations ${childName || 'Little Artist'}! 🏆</h2>
                    <p style="font-size: 15px; color: #334155;">Dear <strong>${parentName || 'Parent / Guardian'}</strong>,</p>
                    <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                      We are delighted to send you the official <strong>E-Certificate of Completion</strong> for <strong>${childName || 'Child'}</strong> (Age: ${childAge || 'Up to 5'} years) for successfully completing the <strong>TN Happy Kids Vinayagar Chaturthi State Level Drawing Competition 2026</strong> on <strong>${completionDate || new Date().toLocaleDateString()}</strong>.
                    </p>
                    <p style="font-size: 15px; line-height: 1.6; color: #334155;">
                      The official E-Certificate photo is attached below to this email!
                    </p>
                  </div>

                  <div style="margin-top: 20px; text-align: center; padding-top: 16px; border-top: 1px dashed #f59e0b;">
                    <p style="font-size: 13px; color: #78350f; font-weight: bold; margin: 0;">✨ TN HAPPY KIDS STATE LEVEL COMPETITION ✨</p>
                    <p style="font-size: 11px; color: #92400e; margin-top: 4px;">Branches: Pollachi | Coimbatore | Erode | Tiruppur | Kolathur | Thambaram | Dharmapuri | Bangalore</p>
                  </div>
                </div>
              `,
              attachments: certificateBase64
                ? [
                    {
                      filename: `${(childName || 'Certificate').replace(/\s+/g, '_')}_Vinayagar_Drawing_Certificate.png`,
                      content: certificateBase64.split(';base64,').pop(),
                      encoding: 'base64',
                    },
                  ]
                : [],
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('SMTP Email Sent:', info.messageId);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(
              JSON.stringify({
                success: true,
                message: `E-Certificate image successfully sent to ${recipientEmail}!`,
              })
            );
          } catch (err) {
            console.error('SMTP Email Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(
              JSON.stringify({
                success: false,
                message: 'SMTP Email sending failed: ' + err.message,
              })
            );
          }
        });
        return;
      }
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), emailSmtpPlugin()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
