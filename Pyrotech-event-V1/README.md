# 🎆 Pyrotech - Premium Fireworks Landing Page

A stunning, high-converting landing page for Pyrotech, a professional fireworks and pyrotechnic services company in Germany. Built with React 18, TypeScript, Three.js, and modern web technologies.

## ✨ Features

- **Cinematic 3D Fireworks**: Three.js-powered hero section with realistic particle effects
- **Responsive Design**: Mobile-first approach with CSS fallbacks for 3D effects
- **Interactive Animations**: Framer Motion and GSAP for smooth, engaging animations
- **Form Integration**: Formspree integration with React Hook Form and Zod validation
- **Performance Optimized**: Lazy loading, code splitting, and mobile detection
- **SEO Ready**: Meta tags, structured data, and accessibility features
- **German Localization**: Complete German language support

## 🚀 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion + GSAP
- **Styling**: Tailwind CSS + Custom CSS
- **Forms**: React Hook Form + Zod validation + Formspree
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pyrotech-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Formspree form ID:
   ```
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px (CSS fireworks fallback)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (Full 3D effects)

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    black: '#000000',
    red: '#DC143C',
    yellow: '#FFD700',
    // ... more colors
  }
}
```

### Content
Update content in `src/utils/constants.ts`:
- Event categories
- Pricing tiers
- Testimonials
- Contact information

### Images
Replace placeholder images in the `public/images/` directory:
- Event card images: `public/images/events/`
- Testimonial photos: `public/images/testimonials/`
- Video thumbnails: `public/images/videos/`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push code to GitHub
   - Connect repository to Vercel
   - Add environment variables in Vercel dashboard

2. **Environment Variables**
   ```
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

3. **Deploy**
   - Vercel will automatically deploy on push to main branch

### Other Platforms

The app can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📊 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 5s
- **Bundle Size**: Optimized with tree shaking

## 🔧 Configuration

### Formspree Setup
1. Create account at [formspree.io](https://formspree.io)
2. Create new form
3. Copy form ID to environment variables
4. Update form endpoint in `ContactForm.tsx`

### Three.js Mobile Detection
The app automatically detects mobile devices and falls back to CSS animations for better performance.

### Analytics (Optional)
Add Google Analytics by setting `VITE_GOOGLE_ANALYTICS_ID` in environment variables.

## 🎯 SEO Features

- Meta tags for social sharing
- Structured data for local business
- German language attributes
- Semantic HTML structure
- Accessibility features (ARIA labels, keyboard navigation)

## 🐛 Troubleshooting

### Common Issues

1. **Three.js not loading on mobile**
   - This is intentional for performance
   - CSS fallback animations are used instead

2. **Form submission errors**
   - Check Formspree form ID in environment variables
   - Verify form endpoint URL

3. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run build`

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Support

For technical support or questions:
- Email: info@pyrotech.de
- Phone: +49 (0)211 999 88 77

## 🔄 Updates

### Version 1.0.0
- Initial release
- Complete landing page with all sections
- Three.js fireworks integration
- Mobile responsive design
- Form integration with Formspree

---

**Made with ❤️ for Pyrotech GmbH**
