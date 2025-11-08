# Free APIs for AJ Tech Website

This guide lists free APIs and services that can enhance your website functionality.

---

## 📧 Form & Email Services

### 1. **EmailJS** (Highly Recommended)
- **What it does**: Send emails directly from JavaScript without a backend
- **Free Tier**: 200 emails/month
- **Perfect for**: Contact form submissions
- **Website**: https://www.emailjs.com/
- **Setup Time**: 10 minutes

**How to use:**
```javascript
// After signing up and configuring your email service
emailjs.send('service_id', 'template_id', {
    name: 'Customer Name',
    email: 'customer@email.com',
    message: 'Message content'
});
```

### 2. **Formspree**
- **What it does**: Form backend that sends submissions to your email
- **Free Tier**: 50 submissions/month
- **Website**: https://formspree.io/
- **Setup**: Just add their action URL to your form

### 3. **Web3Forms**
- **What it does**: Free form backend service
- **Free Tier**: Unlimited forms
- **Website**: https://web3forms.com/
- **Setup**: Very simple, just add API key to form

---

## 💬 Chat & Messaging

### 4. **Tawk.to** (Highly Recommended)
- **What it does**: Free live chat widget for your website
- **Free Tier**: Completely free forever
- **Perfect for**: Real-time customer support
- **Website**: https://www.tawk.to/
- **Mobile App**: Yes (iOS & Android)

### 5. **Crisp Chat**
- **What it does**: Live chat and messaging
- **Free Tier**: Unlimited conversations, 2 operators
- **Website**: https://crisp.chat/

---

## 💳 Payment Integration (Nigeria)

### 6. **Paystack** (Recommended for Nigeria)
- **What it does**: Accept payments online
- **Free Tier**: Pay only transaction fees (1.5% + ₦100)
- **Perfect for**: Selling devices online
- **Website**: https://paystack.com/
- **Supports**: Card, Bank Transfer, USSD, Mobile Money

### 7. **Flutterwave**
- **What it does**: Payment gateway for African businesses
- **Transaction Fee**: 1.4% for cards
- **Website**: https://flutterwave.com/

---

## 📊 Analytics & Tracking

### 8. **Google Analytics**
- **What it does**: Track website visitors and behavior
- **Free Tier**: Completely free
- **Perfect for**: Understanding your customers
- **Website**: https://analytics.google.com/

### 9. **Microsoft Clarity**
- **What it does**: Heatmaps, session recordings, user behavior
- **Free Tier**: Completely free, unlimited
- **Website**: https://clarity.microsoft.com/

---

## 🗺️ Location & Maps

### 10. **Google Maps Embed API**
- **What it does**: Embed maps showing your shop location
- **Free Tier**: Unlimited embeds
- **Perfect for**: Contact page location map
- **No API key needed** for basic embed

### 11. **Mapbox**
- **What it does**: Custom maps and location services
- **Free Tier**: 50,000 map loads/month
- **Website**: https://www.mapbox.com/

---

## 📱 Device Information APIs

### 12. **GSMArena API (Unofficial)**
- **What it does**: Get phone specifications and prices
- **Free Tier**: Free (use web scraping carefully)
- **Perfect for**: Auto-populating device specs

### 13. **Device Atlas** (Limited Free)
- **What it does**: Device detection and information
- **Free Tier**: Limited requests
- **Website**: https://deviceatlas.com/

---

## 🖼️ Image Hosting & Optimization

### 14. **Cloudinary**
- **What it does**: Image hosting, optimization, and transformation
- **Free Tier**: 25GB storage, 25GB bandwidth/month
- **Perfect for**: Product images
- **Website**: https://cloudinary.com/

### 15. **ImgBB**
- **What it does**: Free image hosting
- **Free Tier**: Unlimited images
- **Website**: https://imgbb.com/

---

## 📞 SMS & WhatsApp Integration

### 16. **Twilio** (WhatsApp Business API)
- **What it does**: Send automated WhatsApp messages
- **Free Tier**: Trial credits available
- **Website**: https://www.twilio.com/

### 17. **Termii** (Nigerian SMS Service)
- **What it does**: Send SMS in Nigeria
- **Pricing**: Pay as you go (₦2-4 per SMS)
- **Website**: https://termii.com/

---

## 🔍 Search & Product Catalog

### 18. **Algolia**
- **What it does**: Fast search for your product catalog
- **Free Tier**: 10,000 searches/month
- **Website**: https://www.algolia.com/

---

## 🌐 Website Hosting (Free)

### 19. **Netlify**
- **What it does**: Free website hosting
- **Free Tier**: 100GB bandwidth/month
- **Perfect for**: Hosting your AJ Tech website
- **Website**: https://www.netlify.com/
- **Features**: Auto-deploy from GitHub, free SSL

### 20. **Vercel**
- **What it does**: Free website hosting
- **Free Tier**: Unlimited websites
- **Website**: https://vercel.com/

### 21. **GitHub Pages**
- **What it does**: Free static site hosting
- **Free Tier**: Completely free
- **Perfect for**: Simple websites
- **Website**: https://pages.github.com/

---

## 📅 Booking & Appointments

### 22. **Calendly**
- **What it does**: Schedule repair appointments
- **Free Tier**: 1 event type, unlimited bookings
- **Website**: https://calendly.com/

---

## 🛒 E-commerce Features

### 23. **Snipcart**
- **What it does**: Add shopping cart to any website
- **Free Tier**: Test mode free, 2% transaction fee after
- **Website**: https://snipcart.com/

---

## 🔐 Authentication

### 24. **Firebase Authentication**
- **What it does**: User login/signup system
- **Free Tier**: 10K authentications/month
- **Website**: https://firebase.google.com/

---

## 📊 Inventory Management APIs

### 25. **Google Sheets API**
- **What it does**: Use Google Sheets as a database
- **Free Tier**: Free
- **Perfect for**: Simple inventory tracking
- **Can update**: Device availability, prices automatically

---

## 🎯 Recommended Immediate Integrations

For AJ Tech, I recommend starting with these **FREE** services:

1. **EmailJS** or **Web3Forms** - Contact form functionality
2. **Tawk.to** - Live chat support
3. **Google Analytics** + **Microsoft Clarity** - Track visitors
4. **Netlify** or **GitHub Pages** - Free hosting
5. **WhatsApp Business** - Already integrated! (Just add your number)
6. **Google Maps Embed** - Show your Jos location

---

## 💡 Quick Setup Priority

### Week 1:
- [ ] Set up EmailJS for contact form
- [ ] Add Tawk.to live chat
- [ ] Deploy on Netlify

### Week 2:
- [ ] Add Google Analytics
- [ ] Set up Paystack (if selling online)
- [ ] Add Google Maps to contact section

### Week 3:
- [ ] Integrate Microsoft Clarity
- [ ] Set up Cloudinary for product images
- [ ] Consider SMS notifications via Termii

---

## 🚀 How to Add These to Your Website

Most of these services work by:
1. Signing up for free account
2. Getting an API key or code snippet
3. Adding the code to your website
4. Testing the integration

**Need help integrating any of these? Just let me know which service you want to add first!**

---

## 💰 Cost Summary

**Completely Free Forever:**
- Tawk.to, Google Analytics, Microsoft Clarity, GitHub Pages, Netlify, Google Maps Embed

**Free Tier (Generous):**
- EmailJS (200/month), Web3Forms (unlimited), Firebase, Cloudinary

**Pay Per Use (Affordable):**
- Paystack (1.5% + ₦100), Flutterwave (1.4%), Termii SMS (₦2-4)

**Total monthly cost for small business: ₦0 - ₦5,000** (if using mostly free tiers)
