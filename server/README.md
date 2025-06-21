# Portfolio Backend Server

This is the backend server for Monty Jha's portfolio contact form.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Email Settings
Create a `.env` file in the server directory with your Gmail credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Important:** For Gmail, you need to use an App Password, not your regular password.

#### How to get a Gmail App Password:
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use that password in the EMAIL_PASS field

### 3. Start the Server
```bash
npm run dev
```

The server will start on port 5001.

### 4. Test the Contact Form
- Make sure your frontend is running (`npm run dev` in the main directory)
- Fill out the contact form and submit
- Check the console for any error messages

## Troubleshooting

### Common Issues:

1. **"EMAIL_USER and EMAIL_PASS must be set"**
   - Make sure you have created the `.env` file with the correct credentials

2. **"Failed to send email"**
   - Check that your Gmail credentials are correct
   - Ensure you're using an App Password, not your regular password
   - Make sure 2-Factor Authentication is enabled on your Google account

3. **CORS errors**
   - The server is configured to allow requests from `localhost:5173` and your deployed frontend
   - If you're using a different port, update the `allowedOrigins` array in `server.js`

4. **Port already in use**
   - Change the port in `server.js` (line 15) to a different port
   - Update the frontend `BACKEND_URL` accordingly

## API Endpoint

- **POST** `/api/contact`
- **Body:** JSON with name, email, phone, projectType, budget, message
- **Response:** JSON with success/error message 