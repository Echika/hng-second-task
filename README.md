# HNG Internship Stage 1 - Multi-Page Application

This project is my submission for **Stage 1** of the HNG Internship 13. It builds upon the Stage 0 profile card by adding a Contact Us page with form validation and an About Me page with personal reflections.

## 🚀 Live Demo

**Live URL:** https://echika.github.io/hng-second-task

## 📋 Project Overview

This is a multi-page responsive web application that includes:

- **Home Page (index.html)**: Profile card from Stage 0 with real-time clock
- **Contact Page (contact.html)**: Form with comprehensive validation
- **About Me Page (about_me.html)**: Personal reflections and goals

## ✨ Features

### Contact Us Page
- ✅ Full client-side form validation
- ✅ All fields required with proper error messages
- ✅ Email format validation (name@example.com)
- ✅ Minimum character validation for message field (10 characters)
- ✅ Success message on valid submission
- ✅ Fully accessible with ARIA labels and keyboard navigation
- ✅ All required `data-testid` attributes implemented

### About Me Page
- ✅ Semantic HTML structure with proper heading hierarchy
- ✅ Five required sections: Bio, Goals, Areas of Confidence, Future Note, Extra Thoughts
- ✅ All required `data-testid` attributes implemented
- ✅ Wrapped in semantic `<main>` tag
- ✅ Proper use of `<section>` elements

### General Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Semantic HTML throughout
- ✅ Accessible (proper labels, ARIA attributes, keyboard navigation)
- ✅ Modern, clean UI with gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Consistent navigation menu across all pages

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Media Queries, Animations)
- Vanilla JavaScript (Form validation, Real-time clock)

## 📂 Project Structure

```
hng-first-task/
│
├── index.html          # Home page with profile card
├── contact.html        # Contact form page
├── about_me.html       # About me page
├── styles.css          # Unified CSS for all pages
├── script.js           # JavaScript for clock and form validation
├── echika.jpg          # Profile image
└── README.md           # Project documentation
```

## 🎯 Acceptance Criteria Met

### Contact Us Page
- [x] All required fields with correct `data-testid` attributes
- [x] Validation prevents invalid submissions
- [x] Email validation (name@example.com format)
- [x] Message minimum length validation (10 characters)
- [x] Success message only appears after valid submission
- [x] Error messages tied to inputs with `aria-describedby`
- [x] All inputs have properly linked `<label>` elements
- [x] Fully keyboard accessible

### About Me Page
- [x] All required sections with correct `data-testid` attributes
- [x] Semantic HTML (main, section, headings)
- [x] Proper heading hierarchy (h1, h2)
- [x] Wrapped in `<main data-testid="test-about-page">`

### General
- [x] Semantic HTML throughout
- [x] Fully accessible
- [x] Responsive across all devices
- [x] Keyboard navigable
- [x] Clean, modular, readable code

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Echika/hng-second-task.git
   cd hng-first-task
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     
    

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ♿ Accessibility Features

- Semantic HTML5 elements (`<main>`, `<section>`, `<nav>`)
- Proper heading hierarchy
- ARIA labels and descriptions
- Keyboard navigation support
- Form labels properly linked with `for` attribute
- Error messages linked via `aria-describedby`
- Focus states for interactive elements
- Sufficient color contrast ratios

## 🧪 Testing the Contact Form

### Valid Submission Test:
1. Fill in all fields with valid data:
   - Full Name: "John Doe"
   - Email: "john@example.com"
   - Subject: "Test Message"
   - Message: "This is a test message with more than 10 characters"
2. Click "Send Message"
3. Success message should appear

### Validation Tests:
- Leave any field empty → Error message appears
- Enter invalid email (e.g., "notanemail") → Email error appears
- Enter message with less than 10 characters → Message error appears

## 📊 Data-TestID Reference

### Contact Page
- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

### About Page
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Areas of confidence section
- `test-about-future-note` - Future note section
- `test-about-extra` - Extra thoughts section

## 🌐 Deployment

This project is deployed on GitHub Pages at: https://echika.github.io/hng-second-task

### To Deploy Your Own:
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch (usually `main`) and `/ (root)` folder
4. Save and wait 2-3 minutes for deployment

## 🔗 Important Links

- **HNG Internship**: [https://hng.tech/internship](https://hng.tech/internship)
- **Study Materials Used**:
  - [Semantic HTML & Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
  - [Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - [Accessibility for Forms](https://www.w3.org/WAI/tutorials/forms/)
  - [Responsive CSS](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## 👤 Author

**Echika Raphael**
- GitHub: [@Echika](https://github.com/Echika)
- Twitter: [@echika_raphael](https://twitter.com/@echika_raphael)
- LinkedIn: [Echika Raphael](https://linkedin.com/in/echika-raphael-774668290)

## 📝 License

This project is part of the HNG Internship program.

## 🙏 Acknowledgments

- HNG Internship Team for providing this learning opportunity
- All reviewers and mentors
- The amazing developer community

---

**Made with ❤️ for HNG Internship Stage 1**