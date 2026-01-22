// Gmail SMTP Configuration
// Copy these values to your .env.local file

export const GMAIL_CONFIG = {
  // Your Gmail address
  USER: "geethakasandesh95@gmail.com",

  // Gmail App Password (not your regular password)
  // To generate an app password:
  // 1. Go to your Google Account settings
  // 2. Security → 2-Step Verification (must be enabled)
  // 3. App passwords → Generate app password
  // 4. Use the generated 16-character password here
  APP_PASSWORD: "yawm gbwv tmoj nafq",
};

// Instructions for setting up Gmail App Password:
// 1. Enable 2-Factor Authentication on your Google Account
// 2. Go to https://myaccount.google.com/security
// 3. Click "App passwords" under "Signing in to Google"
// 4. Select "Mail" and "Other (Custom name)"
// 5. Enter "Ceylon Shine Travel Website"
// 6. Copy the 16-character password and replace "your_app_password_here" above
// 7. Create a .env.local file in your project root with:
//    GMAIL_USER=geethakasandesh95@gmail.com
//    GMAIL_APP_PASSWORD=your_16_character_app_password
