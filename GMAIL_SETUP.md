# Gmail SMTP Setup Instructions

This contact form uses Gmail's SMTP server directly without any third-party services. All emails will be sent to `geethakasandesh95@gmail.com`.

## Prerequisites

- Gmail account: `geethakasandesh95@gmail.com`
- 2-Factor Authentication enabled on your Google account
- Next.js project with API routes support

## Setup Steps

### 1. Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click "2-Step Verification"
3. Follow the setup process to enable 2FA

### 2. Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click "App passwords"
3. Select "Mail" from the dropdown
4. Select "Other (Custom name)" from the device dropdown
5. Enter "Ceylon Shine Travel Website" as the name
6. Click "Generate"
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### 3. Create Environment Variables

Create a `.env.local` file in your project root:

```bash
# Gmail SMTP Configuration
GMAIL_USER=geethakasandesh95@gmail.com
GMAIL_APP_PASSWORD=yawm gbwv tmoj nafq
```

**Important:** Replace `your_16_character_app_password_here` with the actual app password from step 2.

### 4. Test the Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Go to your contact form and fill it out
3. Submit the form
4. Check your Gmail inbox for the new email

## How It Works

### Primary Method: Gmail SMTP API

- Form data is sent to `/api/send-email` API route
- API route uses Nodemailer with Gmail SMTP
- Email is sent directly to `geethakasandesh95@gmail.com`
- Customer's email is set as reply-to for easy responses

### Fallback Method: Mailto

- If Gmail API fails, opens user's email client
- Pre-fills email with all form data
- User can send manually

## Email Features

### Professional HTML Email

- Clean, branded design
- Customer information clearly displayed
- Quick action buttons (Reply, Call)
- Timestamp and source information

### Email Content Includes

- Customer name and contact details
- Selected destination interest
- Full message content
- Direct reply-to customer's email
- Quick action links

## Troubleshooting

### Common Issues

1. **"Invalid login" error**

   - Check that 2FA is enabled
   - Verify app password is correct (16 characters, no spaces)
   - Make sure `.env.local` file exists and has correct values

2. **"Less secure app access" error**

   - This shouldn't happen with app passwords
   - If it does, double-check the app password generation

3. **API route not found**

   - Ensure `app/api/send-email/route.ts` exists
   - Restart your development server

4. **Emails not received**
   - Check spam folder
   - Verify Gmail credentials are correct
   - Check browser console for errors

### Testing

1. **Test API directly:**

   ```bash
   curl -X POST http://localhost:3000/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"1234567890","destination":"Sigiriya","message":"Test message"}'
   ```

2. **Check logs:**
   - Look at terminal/console for error messages
   - Check browser network tab for API calls

## Security Notes

- App passwords are safer than regular passwords
- Environment variables keep credentials secure
- No third-party services involved
- Direct Gmail integration only

## Production Deployment

### Environment Variables

Make sure to set these in your production environment:

- `GMAIL_USER=geethakasandesh95@gmail.com`
- `GMAIL_APP_PASSWORD=your_app_password`

### Vercel/Netlify

Add environment variables in your deployment platform's dashboard.

### Other Platforms

Set environment variables according to your hosting provider's documentation.

## Benefits

✅ **No third-party services** - Direct Gmail integration  
✅ **Professional emails** - HTML formatted with branding  
✅ **Reliable delivery** - Gmail's robust infrastructure  
✅ **Easy replies** - Customer email set as reply-to  
✅ **Fallback support** - Mailto if API fails  
✅ **Free to use** - No additional costs  
✅ **Secure** - App passwords for authentication

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify all setup steps were completed
3. Check browser console and server logs
4. Test with a simple email first
