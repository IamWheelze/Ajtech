# AJ Tech - Professional Tech Repair & Sales Website

A high-performance, visually stunning Next.js 14+ website for AJ Tech, a phone and laptop repair/sales business in Jos, Nigeria.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14+ App Router, TypeScript, and Tailwind CSS
- **Advanced Animations**: Framer Motion, GSAP with ScrollTrigger, and Lenis smooth scrolling
- **3D Elements**: React Three Fiber with interactive 3D phone model
- **Responsive Design**: Fully responsive across all devices
- **Custom Cursor**: Interactive custom cursor for desktop
- **Product Filtering**: Animated product filtering with smooth transitions
- **Contact Form**: Integrated contact form with validation
- **SEO Optimized**: Complete metadata and Open Graph tags

## 🛠️ Technologies Used

1. **Next.js 14+** - React framework with App Router
2. **TypeScript** - Type-safe development
3. **Tailwind CSS** - Utility-first styling
4. **Framer Motion** - Physics-based animations
5. **GSAP + ScrollTrigger** - Advanced scroll effects
6. **Lenis** - Smooth scrolling
7. **React Three Fiber** - 3D graphics
8. **@react-three/drei** - 3D helpers

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Project Structure

```
next-app/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── services/            # Services page
│   ├── products/            # Products page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── blog/                # Blog page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # UI components
│   │   ├── ServiceCard.tsx
│   │   ├── ProductCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── shared/              # Shared components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   └── SmoothScroll.tsx
│   └── three/               # 3D components
│       ├── Scene3D.tsx
│       └── FloatingPhone.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript types
└── public/                  # Static assets
```

## 🎯 Pages

- **Home** - Hero with 3D element, services grid, testimonials, featured products
- **Services** - Detailed repair services for phones, laptops, and printers
- **Products** - Filterable product catalog with animations
- **About** - Company story, team, stats with GSAP animations
- **Contact** - Contact form, business info, map integration
- **Blog** - Tech tips and articles

## 🎨 Design Features

- **Color Palette**: Deep navy/charcoal with blue, orange, green, and purple accents
- **Typography**: Space Grotesk (display) + Inter (body)
- **Design Style**: Asymmetrical layouts, glassmorphism, high contrast
- **Animations**: Smooth transitions, scroll-triggered effects, physics-based motion

## 🔧 Customization

### Update Business Info

Edit the following files to customize business information:

- `app/layout.tsx` - Metadata and SEO
- `components/shared/Footer.tsx` - Contact information
- `app/contact/page.tsx` - Contact details

### Add Products

Edit the `products` array in `app/products/page.tsx`

### Change Colors

Update color variables in `tailwind.config.ts`

## 📱 Key Features

### Custom Cursor
Interactive cursor that changes on hover over clickable elements

### Smooth Scrolling
Lenis-powered buttery smooth scrolling

### 3D Hero
Floating phone model built with React Three Fiber

### Product Filtering
Animated product filtering with category and condition filters

### Scroll Animations
GSAP ScrollTrigger animations on About page stats

## 🚀 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Fast page transitions

## 📝 TODO

- [ ] Add real product images
- [ ] Connect contact form to email service
- [ ] Add Google Maps integration
- [ ] Set up analytics
- [ ] Add blog CMS integration
- [ ] Implement e-commerce functionality
- [ ] Add customer testimonials carousel
- [ ] Set up payment gateway integration

## 📄 License

Built for AJ Tech Nigeria

## 🤝 Support

For support, email info@ajtech.com.ng or call +234 814 757 1469

---

Built with ❤️ using Next.js 14, TypeScript, and modern web technologies
