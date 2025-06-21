# Vercel Deployment Guide

## ✅ Issues Fixed

1. **Build Error**: Fixed TypeScript configuration and module resolution
2. **Contact Form**: Configured to work with Vercel serverless functions
3. **API Routes**: Properly configured for production deployment

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository

Make sure your GitHub repository has all the latest changes:

```bash
git add .
git commit -m "Fix build issues and contact form for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `Monty-jha/Portfolio`
5. Vercel will automatically detect it's a Vite project

### Step 3: Configure Environment Variables

**IMPORTANT**: You must set up environment variables for the contact form to work!

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add these variables:

```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-gmail-app-password
```

**⚠️ Important**: Use a Gmail App Password, not your regular password!

#### How to get Gmail App Password:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Select "Mail" and generate a new password
5. Copy the 16-character password

### Step 4: Deploy

1. Click **Deploy**
2. Wait for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

## 🔧 How the Contact Form Works

### Development vs Production

- **Development**: Uses Express server at `http://localhost:5001/api/contact`
- **Production**: Uses Vercel serverless function at `/api/contact`

### Files Involved

1. **Frontend**: `src/Components/Contact.tsx`
   - Automatically detects environment
   - Uses correct backend URL

2. **Backend**: `api/contact.js`
   - Vercel serverless function
   - Handles email sending

3. **Configuration**: `vercel.json`
   - Routes API requests correctly
   - Configures build settings

## 🧪 Testing the Deployment

1. Visit your deployed site
2. Go to the Contact page
3. Fill out the form with test data
4. Click "🚀 Launch My Project"
5. Check your email for the message

## 🔍 Troubleshooting

### Build Fails
- Check that all files are committed to GitHub
- Verify TypeScript configuration is correct
- Check Vercel build logs for specific errors

### Contact Form Not Working
- Verify environment variables are set in Vercel
- Check that Gmail App Password is correct
- Look at Vercel function logs for errors

### Environment Variables Not Working
- Make sure variables are set for **Production** environment
- Check variable names are exactly: `EMAIL_USER` and `EMAIL_PASS`
- Redeploy after adding environment variables

## 📁 Files Modified for Deployment

- `tsconfig.app.json` - Fixed TypeScript configuration
- `vite.config.ts` - Added proper module resolution
- `vercel.json` - Configured build and API routes
- `src/Components/Contact.tsx` - Dynamic backend URL
- `api/contact.js` - Serverless function for email

## 🎉 Success!

After following these steps, your portfolio will be:
- ✅ Deployed on Vercel
- ✅ Contact form working
- ✅ Emails sent to your Gmail
- ✅ Confirmation emails sent to users
- ✅ Responsive and fast

Your contact form will work perfectly in production! 🚀 