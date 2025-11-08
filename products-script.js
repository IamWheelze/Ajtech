// WhatsApp Configuration
// IMPORTANT: Replace this with your actual WhatsApp number (including country code, no + or spaces)
const WHATSAPP_NUMBER = '2348012345678'; // Example: 2348012345678 for Nigeria

// Function to send WhatsApp inquiry
function sendWhatsAppInquiry(deviceName, specs, price, condition) {
    // Create the message
    const message = `Hello AJ Tech! 👋

I'm interested in the following device:

📱 *Device:* ${deviceName}
📋 *Specifications:* ${specs}
💰 *Price:* ${price}
🏷️ *Condition:* ${condition}

Please provide more details and availability.

Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
}

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter category
        const filterValue = button.getAttribute('data-filter');

        // Filter cards
        catalogCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href').split('#')[1];
        if (hash) {
            e.preventDefault();
            window.location.href = this.getAttribute('href');
        }
    });
});

console.log('Products page loaded successfully!');
console.log('Remember to update WHATSAPP_NUMBER in products-script.js with your actual WhatsApp number');
