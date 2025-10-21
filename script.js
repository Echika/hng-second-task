// Time Display Script (for home page)
const timeDisplay = document.getElementById('timeDisplay');

if (timeDisplay) {
    function updateTime() {
        timeDisplay.textContent = Date.now();
    }
    
    updateTime();
    setInterval(updateTime, 1);
}

// Contact Form Validation Script (for contact page)
const form = document.getElementById('contactForm');

if (form) {
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    function validateEmail(emailValue) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailValue);
    }

    function showError(input, errorElement) {
        input.classList.add('error');
        errorElement.classList.add('show');
    }

    function hideError(input, errorElement) {
        input.classList.remove('error');
        errorElement.classList.remove('show');
    }

    function validateField(input, errorElement, validationFn) {
        if (validationFn()) {
            hideError(input, errorElement);
            return true;
        } else {
            showError(input, errorElement);
            return false;
        }
    }

    // Real-time validation on blur
    fullName.addEventListener('blur', () => {
        validateField(fullName, document.getElementById('nameError'), () => fullName.value.trim() !== '');
    });

    email.addEventListener('blur', () => {
        validateField(email, document.getElementById('emailError'), () => validateEmail(email.value.trim()));
    });

    subject.addEventListener('blur', () => {
        validateField(subject, document.getElementById('subjectError'), () => subject.value.trim() !== '');
    });

    message.addEventListener('blur', () => {
        validateField(message, document.getElementById('messageError'), () => message.value.trim().length >= 10);
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateField(fullName, document.getElementById('nameError'), () => fullName.value.trim() !== '');
        const isEmailValid = validateField(email, document.getElementById('emailError'), () => validateEmail(email.value.trim()));
        const isSubjectValid = validateField(subject, document.getElementById('subjectError'), () => subject.value.trim() !== '');
        const isMessageValid = validateField(message, document.getElementById('messageError'), () => message.value.trim().length >= 10);

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            successMessage.classList.add('show');
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);

            // Scroll to top to see success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}