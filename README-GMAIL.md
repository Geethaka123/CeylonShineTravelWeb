# Gmail Integration - Ceylon Shine Travel Website

This project uses **Gmail SMTP** for sending contact form emails directly to `geethakasandesh95@gmail.com` without any third-party services.

## 🚀 Quick Setup

1. **Run the setup script:**

   ```bash
   npm run setup-gmail
   ```

2. **Enable 2-Factor Authentication** on your Google account

3. **Generate App Password:**

   - Go to [Google Account Security](https://myaccount.google.com/security)
   - App passwords → Mail → Generate
   - Copy the 16-character password

4. **Update `.env.local`** with your actual app password

5. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
ceylonShineWeb/
├── app/
│   └── api/
│       └── send-email/
│           └── route.ts          # Gmail SMTP API endpoint
├── components/
│   └── Contact.tsx               # Contact form component
├── .env.local                    # Gmail credentials (create this)
├── setup-gmail.js               # Setup script
├── test-gmail-api.html          # Test page
└── GMAIL_SETUP.md               # Detailed setup instructions
```

## 🔧 How It Works

### Primary Method: Gmail SMTP API

- Form data → `/api/send-email` → Gmail SMTP → Your inbox
- Professional HTML email formatting
- Customer email set as reply-to
- Automatic delivery

### Fallback Method: Mailto

- If Gmail API fails → Opens email client
- Pre-filled with form data
- User sends manually

## 📧 Email Features

- **Professional HTML formatting** with Ceylon Shine branding
- **Customer information** clearly displayed
- **Quick action buttons** (Reply, Call)
- **Reply-to customer** for easy responses
- **Timestamp and source** information

## 🧪 Testing

1. **Open test page:** `test-gmail-api.html` in your browser
2. **Fill out the form** and test both methods
3. **Check your Gmail inbox** for the test email

## 🔒 Security

- Uses Gmail App Passwords (safer than regular passwords)
- Environment variables keep credentials secure
- No third-party services involved
- Direct Gmail integration only

## 🚨 Troubleshooting

### "Email client opens instead of sending automatically"

- **Cause:** Gmail API is failing, falling back to mailto
- **Solution:** Check `.env.local` file and Gmail app password

### "Invalid login" error

- **Cause:** Wrong app password or 2FA not enabled
- **Solution:** Regenerate app password with 2FA enabled

### "API route not found"

- **Cause:** Development server not running
- **Solution:** Run `npm run dev`

## 📋 Environment Variables

Create `.env.local` in your project root:

```bash
GMAIL_USER=geethakasandesh95@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

## 🎯 Benefits

✅ **No third-party services** - Direct Gmail integration  
✅ **Professional emails** - HTML formatted with branding  
✅ **Reliable delivery** - Gmail's robust infrastructure  
✅ **Easy replies** - Customer email set as reply-to  
✅ **Fallback support** - Mailto if API fails  
✅ **Free to use** - No additional costs  
✅ **Secure** - App passwords for authentication

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all setup steps were completed
3. Check browser console and server logs
4. Test with the provided test page

---

**Ready to go!** Your contact form will now send emails directly to your Gmail account. 🎉

