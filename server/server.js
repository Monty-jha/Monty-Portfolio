import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Error: EMAIL_USER and EMAIL_PASS must be set in .env file');
  process.exit(1);
}

const app = express();
const port = 5001; // Fixed port to 5001

// CORS setup: allow requests from deployed frontend and localhost for dev
const allowedOrigins = [
  'https://monty-portfolio.vercel.app', // your real deployed frontend URL
  'http://localhost:5173'
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Function to get formatted date and time
const getFormattedDateTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  return { date, time };
};

// Email template
const getEmailTemplate = (data) => {
  const { date, time } = getFormattedDateTime();
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry - Monty Jha</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #0a0a0a;
                color: #ffffff;
                line-height: 1.6;
            }
            
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }
            
            .header {
                background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                padding: 30px 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
                animation: rotate 20s linear infinite;
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .header-content {
                position: relative;
                z-index: 1;
            }
            
            .logo {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            
            .subtitle {
                font-size: 18px;
                opacity: 0.9;
                margin: 0;
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .timestamp {
                background: linear-gradient(90deg, #374151, #4b5563);
                padding: 15px 20px;
                border-radius: 8px;
                margin-bottom: 30px;
                border-left: 4px solid #3b82f6;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .timestamp-icon {
                background: #3b82f6;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            
            .form-section {
                background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
                border-radius: 10px;
                padding: 25px;
                margin-bottom: 20px;
                border: 1px solid #374151;
            }
            
            .section-title {
                color: #60a5fa;
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .section-icon {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .info-item {
                background: rgba(59, 130, 246, 0.05);
                padding: 15px;
                border-radius: 8px;
                border: 1px solid rgba(59, 130, 246, 0.2);
            }
            
            .info-label {
                color: #9ca3af;
                font-size: 14px;
                margin-bottom: 5px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .info-value {
                color: #ffffff;
                font-size: 16px;
                font-weight: 500;
            }
            
            .message-box {
                background: rgba(59, 130, 246, 0.05);
                padding: 20px;
                border-radius: 8px;
                border: 1px solid rgba(59, 130, 246, 0.2);
                margin-top: 20px;
            }
            
            .message-text {
                color: #e5e7eb;
                font-size: 16px;
                line-height: 1.7;
                margin: 0;
                white-space: pre-wrap;
            }
            
            .priority-badge {
                display: inline-block;
                background: linear-gradient(135deg, #ef4444, #dc2626);
                color: white;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                margin-left: 10px;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            .footer {
                background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
                padding: 30px;
                text-align: center;
                border-top: 1px solid #374151;
            }
            
            .footer-text {
                color: #9ca3af;
                margin-bottom: 20px;
            }
            
            .social-links {
                display: flex;
                justify-content: center;
                gap: 15px;
            }
            
            .social-link {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: transform 0.3s ease;
            }
            
            .social-link:hover {
                transform: scale(1.1);
            }
            
            .cta-button {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
                padding: 15px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                margin-top: 20px;
                transition: all 0.3s ease;
            }
            
            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                    border-radius: 8px;
                }
                
                .content {
                    padding: 20px 15px;
                }
                
                .info-grid {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }
                
                .header {
                    padding: 20px 15px;
                }
                
                .logo {
                    font-size: 28px;
                }
                
                .subtitle {
                    font-size: 16px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <div class="header-content">
                    <div class="logo">🚀 New Project Inquiry</div>
                    <p class="subtitle">Contact Form Submission - Monty Jha</p>
                </div>
            </div>
            
            <div class="content">
                <div class="timestamp">
                    <div class="timestamp-icon">⏰</div>
                    <div>
                        <strong>Received:</strong> ${date} at ${time}
                        <span class="priority-badge">NEW</span>
                    </div>
                </div>
                
                <div class="form-section">
                    <div class="section-title">
                        <div class="section-icon">👤</div>
                        Client Information
                    </div>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Full Name</div>
                            <div class="info-value">${data.name}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Email Address</div>
                            <div class="info-value">${data.email}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Phone Number</div>
                            <div class="info-value">${data.phone || 'Not provided'}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Project Type</div>
                            <div class="info-value">${data.projectType}</div>
                        </div>
                    </div>
                </div>
                
                <div class="form-section">
                    <div class="section-title">
                        <div class="section-icon">💼</div>
                        Project Details
                    </div>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">Budget Range</div>
                            <div class="info-value">${data.budget}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Priority Level</div>
                            <div class="info-value">High Priority</div>
                        </div>
                    </div>
                    
                    <div class="message-box">
                        <div class="info-label">Project Description</div>
                        <p class="message-text">${data.message}</p>
                    </div>
                </div>
                
                <div class="form-section">
                    <div class="section-title">
                        <div class="section-icon">⚡</div>
                        Quick Actions
                    </div>
                    <div style="text-align: center;">
                        <a href="mailto:${data.email}" class="cta-button">
                            📧 Reply to Client
                        </a>
                        ${data.phone ? `<a href="tel:${data.phone}" class="cta-button" style="margin-left: 15px;">
                            📞 Call Client
                        </a>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p class="footer-text">
                    This inquiry was submitted through your contact form on montyjha.dev
                </p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/monty-jha-1b83712bb" class="social-link">
                        💼
                    </a>
                    <a href="https://github.com/Monty-jha" class="social-link">
                        💻
                    </a>
                    <a href="mailto:jhamonty302@gmail.com" class="social-link">
                        📧
                    </a>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, projectType, budget, message } = req.body;

    // Email content for you (the owner)
    const mailOptions = {
      from: `Monty Jha <${process.env.EMAIL_USER}>`,
      to: 'jhamonty302@gmail.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto;">
          <h2>New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <pre style="background: #f4f4f4; padding: 10px; border-radius: 4px;">${message}</pre>
          <hr/>
          <p>Sent from Monty Jha's Portfolio Contact Form</p>
        </div>
      `,
      text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nProject Type: ${projectType}\nBudget: ${budget}\nMessage:\n${message}\n\nSent from Monty Jha's Portfolio Contact Form`
    };

    // Send email to you
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: `Monty Jha <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Monty Jha',
      html: `
        <div style="font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <hr/>
          <p>Best regards,<br/>Monty Jha<br/>jhamonty302@gmail.com</p>
        </div>
      `,
      text: `Thank you for reaching out!\n\nDear ${name},\nI have received your message and will get back to you as soon as possible.\n\nProject Type: ${projectType}\nBudget: ${budget}\n\nBest regards,\nMonty Jha\njhamonty302@gmail.com`
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`\n🚀 Server is running on port ${port}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
}); 