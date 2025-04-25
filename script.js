const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Optional: Auto-Slide Testimonials
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function changeTestimonial() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = 'none'; // Hide all testimonials
  });

  testimonialIndex++;
  if (testimonialIndex > testimonials.length) {
    testimonialIndex = 1; // Reset to the first testimonial
  }

  testimonials[testimonialIndex - 1].style.display = 'block'; // Show the current testimonial
}

// Change testimonial every 5 seconds
setInterval(changeTestimonial, 5000);

// Initial setup
changeTestimonial();


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('whatsapp-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent real form submission

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const company = form.company.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    // Prepare WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nCompany: ${company}\nService Interested: ${service}\nMessage: ${message}`;

    // Your WhatsApp number (no +, no spaces)
    const phoneNumber = "27601903181"; // Example: 27679050394

    // WhatsApp API link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  });
});
