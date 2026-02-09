# Ananda Behavioral Health - Professional Healthcare Website

A modern, professional healthcare website built for Ananda Behavioral Health, featuring a responsive design and comprehensive service information.

## Website Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional design with a medical/healthcare theme
- **Navigation**: Easy-to-use navigation menu with smooth scrolling
- **Service Overview**: Detailed sections for medical services and specialties
- **Doctor Profile**: Comprehensive information about qualifications and experience
- **Patient Testimonials**: Display of patient reviews and satisfaction
- **Contact Form**: Easy appointment scheduling and inquiry form
- **Social Media Integration**: Links to social media profiles
- **Accessibility**: Optimized for all users including those with accessibility needs

## File Structure

```
├── index.html          # Main HTML file with all page content
├── styles.css          # All CSS styling for the website
├── script.js           # JavaScript functionality (forms, animations, scrolling)
└── README.md           # This file
```

## How to Use

### 1. Customization

Edit the following in `index.html`:
- **Doctor Name**: Change "Dr. Maninder Aulakh" throughout
- **Contact Information**: Update phone number, email, and address
- **Office Hours**: Modify hours in the contact section
# Ananda Behavioral Health — Behavioral Health Services

A responsive website template for Ananda Behavioral Health, focused on behavioral and mental health services. The site includes service descriptions, provider information, patient testimonials, and a contact form for scheduling appointments.

## Website Highlights

- **Responsive Layout**: Adapts to desktop, tablet, and mobile screens
- **Clear Navigation**: Section-based navigation with smooth scrolling
- **Service Pages**: Overviews of specialties and treatment approaches
- **Provider Info**: Credentials, mission, and clinic details
- **Testimonials**: Patient success stories and ratings
- **Contact Form**: Ready to connect to an email service (FormSubmit is configured)
- **Accessibility**: Designed with readable typography and contrast

## File Structure

```
├── index.html          # Main HTML file with all page content
├── styles.css          # CSS styling for the website
├── script.js           # JavaScript for interactions and form handling
└── README.md           # This file
```

## Quick Customization

- Edit content and copy in `index.html` to update clinic name, address, hours, and services
- Replace placeholder emoji/image with real photos by swapping `.doctor-image` content
- Update contact details and social links in the contact section

## Contact Form (FormSubmit)

The site is preconfigured to use FormSubmit (https://formsubmit.co) for email forwarding. Notes:

- The form uses `method="POST"` and an `action` endpoint pointing at the clinic email.
- The recipient email must be verified through FormSubmit before submissions are delivered.
- Serve the site over HTTP(S) (not opened via `file://`) — otherwise FormSubmit will not receive the request.

## Deployment

1. Host the files on any static web host (GitHub Pages, Netlify, Vercel, or your web server).
2. Ensure `index.html`, `styles.css`, and `script.js` are in the same directory.
3. Verify the contact email via FormSubmit to start receiving messages.

## Design Tokens

- **Primary Blue**: #2563EB
- **Accent Green**: #10B981

Change variables in `styles.css` under the `:root` selector.

## Sections Overview

1. Header — navigation and quick contact
2. Hero — welcome message and CTAs
3. Services — treatment areas and programs
4. Provider — clinic mission and credentials
5. Insurance & Access — insurance and accessibility info
6. Testimonials — patient reviews
7. Contact — form and clinic details
8. Footer — links and social

## Browser Support

Recent versions of Chrome, Firefox, Edge, and Safari are supported, including modern mobile browsers.

## Implemented Features

- Responsive grids and layouts
- Smooth scrolling navigation
- Basic client-side form validation
- Placeholder assets for quick prototyping

## Next Steps

1. Verify the FormSubmit recipient email (required for production form delivery)
2. Replace placeholder images with clinic photos
3. Add appointment booking or scheduling integration
4. Deploy to a public host and configure a custom domain

## Contact Email Integration (recommended)

- FormSubmit: simple email forwarding; free tier available with email verification
- EmailJS/Formspree: alternatives for client-side submissions
- Custom backend: for attachments, higher security, or advanced workflows

## License

This template is provided for use by Ananda Behavioral Health.

---

**Created**: February 2026  
**Last Updated**: February 8, 2026
