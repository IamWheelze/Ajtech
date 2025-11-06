# AJ Tech - Phone & Laptop Repair Website

A responsive website for AJ Tech, a phone and laptop repair business in Nigeria that also sells new and used devices.

## Features

- **Fully Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Sections**:
  - Phone & Laptop Repair Services
  - New Devices Sales
  - Used/Refurbished Devices
  - Accessories
- **Contact Form**: Easy-to-use contact form for customer inquiries
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Project Structure

```
Ajtech/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with responsive design
├── script.js           # JavaScript for interactivity
├── assets/
│   └── images/         # Folder for product and business images
└── README.md           # This file
```

## Getting Started

### Option 1: Open Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will work immediately (no build process required)

### Option 2: Use a Local Server

For a better development experience:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Adding Images

1. Navigate to `assets/images/`
2. Add your images with these filenames:
   - `phone-placeholder.jpg`
   - `laptop-placeholder.jpg`
   - `used-phone-placeholder.jpg`
   - `accessories-placeholder.jpg`
   - `about-placeholder.jpg`

### Updating Contact Information

Edit the contact section in `index.html` (around line 250):

```html
<p>+234 XXX XXX XXXX</p>  <!-- Replace with your phone number -->
<p>info@ajtech.com.ng</p>  <!-- Replace with your email -->
<p>Lagos, Nigeria</p>      <!-- Replace with your address -->
```

### Changing Colors

Edit the CSS variables in `styles.css` (at the top):

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #10b981;  /* Accent color */
    --dark-color: #1f2937;       /* Dark text/backgrounds */
}
```

## Sections

1. **Navigation**: Fixed top navigation with mobile hamburger menu
2. **Hero**: Eye-catching banner with call-to-action buttons
3. **Services**: Three main service categories with detailed features
4. **Products**: Featured products showcase with pricing
5. **About**: Company information and key features
6. **Contact**: Contact information and inquiry form
7. **Footer**: Links and social media

## Form Handling

The contact form currently displays a success notification and logs data to the console. To make it functional:

1. **Option A**: Connect to a backend API
   - Modify the form submission handler in `script.js`
   - Send data to your server endpoint

2. **Option B**: Use a form service
   - Services like Formspree, EmailJS, or Netlify Forms
   - Simple integration without backend code

3. **Option C**: Email integration
   - Use `mailto:` action (basic, not recommended for production)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add product catalog with database integration
- [ ] Implement online booking system for repairs
- [ ] Add customer testimonials section
- [ ] Create blog section for tech tips
- [ ] Add live chat support
- [ ] Implement e-commerce functionality
- [ ] Add multiple language support (English, Yoruba, Igbo, Hausa)
- [ ] Integration with payment gateways (Paystack, Flutterwave)

## License

This project is open source and available for use.

## Support

For questions or support, please contact the AJ Tech team.

---

Built with ❤️ for AJ Tech Nigeria
