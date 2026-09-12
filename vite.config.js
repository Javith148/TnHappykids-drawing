import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

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

            // Check for logo image
            const logoPath = path.resolve(process.cwd(), 'public/assets/images/logo.png');
            const hasLogo = fs.existsSync(logoPath);

            const attachments = [];

            if (hasLogo) {
              attachments.push({
                filename: 'logo.png',
                path: logoPath,
                cid: 'tn_logo_cid',
              });
            }

            if (certificateBase64) {
              attachments.push({
                filename: `${(childName || 'Certificate').replace(/\s+/g, '_')}_Vinayagar_Drawing_Certificate.png`,
                content: certificateBase64.split(';base64,').pop(),
                encoding: 'base64',
              });
            }

            const mailOptions = {
              from: `"TN Happy Kids Competitions" <javithsukkur@gmail.com>`,
              to: recipientEmail,
              subject: `E-Certificate of Completion - ${childName || 'Little Artist'} | TN Happy Kids 2026`,
              html: `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Official E-Certificate - TN Happy Kids 2026</title>
                </head>
                <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                  <div style="max-width: 620px; margin: 24px auto; background-color: #fffdf5; border: 3px solid #f59e0b; border-radius: 24px; overflow: hidden; box-shadow: 0 12px 30px rgba(217, 119, 6, 0.15);">
                    
                    <!-- HEADER WITH FESTIVE GRADIENT & LOGO -->
                    <div style="background: linear-gradient(135deg, #b45309 0%, #ea580c 50%, #d97706 100%); padding: 30px 20px; text-align: center; color: #ffffff;">
                      
                      <!-- LOGO EMBED -->
                      ${
                        hasLogo
                          ? `<div style="background: #ffffff; padding: 8px 18px; border-radius: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin-bottom: 12px;">
                              <img src="cid:tn_logo_cid" alt="TN Happy Kids Logo" style="height: 48px; width: auto; display: block; margin: 0 auto;" />
                            </div>`
                          : ''
                      }

                      <h1 style="font-size: 24px; font-weight: 800; margin: 6px 0 2px 0; color: #ffffff; letter-spacing: 0.5px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        TN HAPPY KIDS 2026
                      </h1>
                      <p style="font-size: 13px; font-weight: 700; color: #fef08a; margin: 0; text-transform: uppercase; letter-spacing: 1.5px;">
                        State Level Vinayagar Chaturthi Drawing Competition
                      </p>
                    </div>

                    <!-- MAIN BODY CONTAINER -->
                    <div style="padding: 28px 24px;">
                      
                      <!-- CONGRATULATIONS CARD -->
                      <div style="background: linear-gradient(to right, #fff7ed, #fef3c7); border: 2px solid #fde68a; border-radius: 18px; padding: 18px 20px; text-align: center; margin-bottom: 22px;">
                        <span style="background-color: #10b981; color: #ffffff; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">
                          Verified Certificate Issued
                        </span>
                        <h2 style="color: #78350f; font-size: 22px; font-weight: 800; margin: 10px 0 4px 0;">
                          Congratulations ${childName || 'Little Artist'}!
                        </h2>
                        <p style="color: #b45309; font-size: 13px; font-weight: 600; margin: 0;">
                          Star Participant in Vinayagar Chaturthi State Level Contest
                        </p>
                      </div>

                      <!-- SALUTATION & MESSAGE CONTENT -->
                      <div style="color: #334155; font-size: 15px; line-height: 1.7; background: #ffffff; border-radius: 16px; padding: 22px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        <p style="margin-top: 0; font-size: 16px; font-weight: 700; color: #1e293b;">
                          Dear <strong>${parentName || 'Parent / Guardian'}</strong>,
                        </p>
                        <p style="margin-bottom: 14px;">
                          We are delighted to send you the official <strong>E-Certificate of Completion</strong> for <strong>${childName || 'Child'}</strong> (Age: <strong>${childAge || 'Up to 5 Years'}</strong>) for successfully completing the <strong>TN Happy Kids Vinayagar Chaturthi State Level Drawing Competition 2026</strong> on <strong>${completionDate || new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>.
                        </p>

                        <!-- CERTIFICATE ATTACHMENT BOX -->
                        <div style="background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 14px; padding: 16px; text-align: center; margin: 18px 0 6px 0;">
                          <p style="margin: 0; font-weight: 800; color: #b45309; font-size: 14px;">
                            Official E-Certificate Photo Attached Below
                          </p>
                          <p style="margin: 4px 0 0 0; font-size: 12px; color: #78350f;">
                            The high-resolution certificate photo is attached to this email. You can download, print, or share it on WhatsApp & Social Media!
                          </p>
                        </div>
                      </div>

                      <!-- REWARD POINTS BANNER -->
                      <div style="margin-top: 20px; background: linear-gradient(135deg, #ea580c, #d97706); border-radius: 16px; padding: 16px 20px; color: #ffffff; text-align: center; box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);">
                        <p style="margin: 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #fde68a;">
                          Special Reward Unlocked
                        </p>
                        <p style="margin: 4px 0 0 0; font-size: 24px; font-weight: 800; color: #ffffff;">
                          100 Reward Points Credited
                        </p>
                      </div>

                    </div>

                    <!-- FOOTER WITH BRANCHES -->
                    <div style="background-color: #451a03; color: #fef3c7; padding: 24px 20px; text-align: center; border-top: 3px solid #f59e0b;">
                      <p style="font-size: 13px; font-weight: 800; color: #f59e0b; margin: 0 0 8px 0; letter-spacing: 1.5px; text-transform: uppercase;">
                        TN HAPPY KIDS STATE LEVEL COMPETITION
                      </p>
                      
                      <p style="font-size: 12px; color: #fde68a; font-weight: 700; margin: 0 0 12px 0;">
                        Branches Across Tamil Nadu & Karnataka:
                      </p>
                      
                      <div style="font-size: 11px; color: #ffffff; font-weight: 600; line-height: 2;">
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Pollachi</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Coimbatore</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Erode</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Tiruppur</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Kolathur</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Thambaram</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Dharmapuri</span>
                        <span style="background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 8px; margin: 3px; display: inline-block;">Bangalore</span>
                      </div>

                      <p style="font-size: 10px; color: #a16207; margin: 16px 0 0 0;">
                        © 2026 TN Happy Kids. All Rights Reserved.
                      </p>
                    </div>

                  </div>
                </body>
                </html>
              `,
              attachments,
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
