# Contact Form Setup Guide

## Issue Fixed ✅

The contact form was failing because:
1. The frontend was trying to call `/api/contact` (Vercel serverless function)
2. But you have a separate Express server running on port 5001
3. The backend URLs were not properly configured

## What I Changed

### 1. Updated Frontend (Contact.tsx)
- Changed `BACKEND_URL` to be dynamic based on environment
- Development: `http://localhost:5001/api/contact`
- Production: `/api/contact` (for Vercel deployment)
- Improved error handling with better user feedback

### 2. Backend Configuration
- Your Express server is already properly configured
- Just needs email credentials setup

## Setup Instructions

### Step 1: Configure Email Settings

Create a `.env` file in the `server` directory:

```bash
cd Portfolio/server
```

Create a file named `.env` with this content:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

**⚠️ Important:** You must use a Gmail App Password, not your regular password!

#### How to get Gmail App Password:
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Select "Mail" and generate a new password
5. Use that 16-character password in the EMAIL_PASS field

### Step 2: Install Dependencies

```bash
# In the main Portfolio directory
npm install

# In the server directory
cd server
npm install
```

### Step 3: Start the Application

```bash
# From the main Portfolio directory
npm run dev
```

This will start both:
- Frontend on `http://localhost:5173`
- Backend on `http://localhost:5001`

### Step 4: Test the Contact Form

1. Open your browser to `http://localhost:5173`
2. Navigate to the Contact page
3. Fill out the form with test data
4. Click "🚀 Launch My Project"
5. Check the console for any error messages

## Troubleshooting

### If you get "EMAIL_USER and EMAIL_PASS must be set":
- Make sure you created the `.env` file in the `server` directory
- Check that the file has the correct format (no spaces around `=`)

### If you get "Failed to send email":
- Verify your Gmail credentials are correct
- Make sure you're using an App Password, not your regular password
- Check that 2-Factor Authentication is enabled on your Google account

### If you get CORS errors:
- The server is configured to allow requests from `localhost:5173`
- If you're using a different port, update the `allowedOrigins` array in `server.js`

### If port 5001 is already in use:
- Change the port in `server.js` (line 15) to a different port
- Update the frontend `BACKEND_URL` in `Contact.tsx` accordingly

## Production Deployment

For production (Vercel), the form will automatically use the Vercel serverless function at `/api/contact`. Make sure to:

1. Set environment variables in your Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`

2. The Vercel API route (`api/contact.js`) is already configured and ready to use.

## Files Modified

- `src/Components/Contact.tsx` - Updated backend URL and error handling
- `server/README.md` - Added setup instructions
- `CONTACT_FORM_SETUP.md` - This guide

## Support

If you still have issues:
1. Check the browser console for error messages
2. Check the server console for backend errors
3. Verify your email credentials are correct
4. Make sure both frontend and backend are running

The contact form should now work properly! 🚀 