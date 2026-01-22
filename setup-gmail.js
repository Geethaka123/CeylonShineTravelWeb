#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🚀 Setting up Gmail SMTP for Ceylon Shine Travel Website");
console.log("=======================================================\n");

// Check if .env.local already exists
const envPath = path.join(__dirname, ".env.local");
if (fs.existsSync(envPath)) {
  console.log("⚠️  .env.local already exists!");
  console.log("Please check if it contains the correct Gmail credentials.\n");
} else {
  // Create .env.local file
  const envContent = `# Gmail SMTP Configuration
GMAIL_USER=geethakasandesh95@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log("✅ Created .env.local file");
  } catch (error) {
    console.error("❌ Error creating .env.local:", error.message);
    process.exit(1);
  }
}

console.log("\n📋 Next Steps:");
console.log("1. Enable 2-Factor Authentication on your Google account");
console.log("2. Generate an App Password:");
console.log("   - Go to https://myaccount.google.com/security");
console.log("   - App passwords → Mail → Generate");
console.log("   - Copy the 16-character password");
console.log("3. Update .env.local with your actual app password");
console.log("4. Start your development server: npm run dev");
console.log("5. Test the contact form!");

console.log("\n🔧 Current .env.local content:");
console.log("-----------------------------");
try {
  const content = fs.readFileSync(envPath, "utf8");
  console.log(content);
} catch (error) {
  console.log("Could not read .env.local file");
}

console.log("\n✨ Setup complete! Happy coding!");

