import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, projectType, budget, message } = req.body;

  if (!name || !email || !projectType || !budget || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create transporter
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

  // Owner email
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

  // Confirmation email
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

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
} 