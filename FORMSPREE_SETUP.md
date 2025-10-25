# Formspree Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Sign Up" (free account)
3. Verify your email

### Step 2: Create New Form
1. After login, click "New Form"
2. Choose "Contact Form" template
3. Give it a name: "Pyrotech Contact Form"
4. Copy the **Form ID** (looks like: `xrgkqjqw`)

### Step 3: Update Environment File
1. Open `.env` file in your project root
2. Replace `your_form_id_here` with your actual Form ID:
   ```
   VITE_FORMSPREE_FORM_ID=xrgkqjqw
   ```

### Step 4: Test the Form
1. Start your dev server: `npm run dev`
2. Go to your contact section
3. Fill out and submit the form
4. Check your email for the submission

## Formspree Features

### Free Tier (50 submissions/month)
- ✅ Email notifications
- ✅ Spam protection
- ✅ Basic analytics
- ✅ Custom redirect after submit

### Paid Tier ($10/month for 1000 submissions)
- ✅ All free features
- ✅ Custom email templates
- ✅ Advanced analytics
- ✅ Webhook integrations
- ✅ File uploads
- ✅ Custom fields

## Troubleshooting

### Form Not Working?
1. Check `.env` file has correct Form ID
2. Restart dev server after changing `.env`
3. Check browser console for errors
4. Verify Form ID in Formspree dashboard

### Not Receiving Emails?
1. Check spam folder
2. Verify email in Formspree settings
3. Check Formspree dashboard for submissions
4. Ensure form has required fields

## Next Steps

Once Formspree is working:
1. ✅ Deploy to Vercel (free hosting)
2. ✅ Add custom domain
3. ✅ Setup Google Analytics
4. ✅ Add more form fields if needed

## Deployment

### Vercel Deployment
1. Push code to GitHub
2. Connect Vercel to GitHub repo
3. Add environment variable in Vercel:
   - Key: `VITE_FORMSPREE_FORM_ID`
   - Value: `your_form_id_here`
4. Deploy automatically

### Environment Variables in Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add: `VITE_FORMSPREE_FORM_ID` = `your_actual_form_id`

## Support

- Formspree Docs: [https://formspree.io/help/](https://formspree.io/help/)
- Vercel Docs: [https://vercel.com/docs](https://vercel.com/docs)
- Contact: info@pyrotech.de

