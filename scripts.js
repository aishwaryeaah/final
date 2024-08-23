document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleLoginPassword() {
    const passwordField = document.getElementById("login-password");
    const toggleBtn = document.querySelector(".toggle-login-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

function toggleSignupPassword() {
    const passwordField = document.getElementById("signup-password");
    const toggleBtn = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}

function toggleConfirmPassword() {
    const confirmPasswordField = document.getElementById("confirm-password");
    const toggleBtn = document.querySelector(".toggle-confirm-password");
    if (confirmPasswordField.type === "password") {
        confirmPasswordField.type = "text";
        toggleBtn.classList.remove("fa-eye");
        toggleBtn.classList.add("fa-eye-slash");
    } else {
        confirmPasswordField.type = "password";
        toggleBtn.classList.remove("fa-eye-slash");
        toggleBtn.classList.add("fa-eye");
    }
}


function toggleSignup() {
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
}

function toggleLogin() {
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}

function validateSignupForm() {
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        document.getElementById("password-error").textContent = "Passwords do not match!";
        document.getElementById("password-error").style.display = "block";
        return false;
    }
    return true;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        console.log("Class list after toggle:", sidebar.classList);
    } else {
        console.error("Sidebar element not found");
    }
}

async function handleLogin() {
    console.log("handleLogin function called"); // Debug line
    const emailInput = document.getElementById("email").value.trim();
    console.log("Email entered:", emailInput); // Debug line
    
    try {
        const response = await fetch('customer.json');
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const customers = await response.json();
        console.log("Fetched customers:", customers); // Debug line
        
        const customer = customers.find(customer => customer.email === emailInput);
        console.log("Customer found:", customer); // Debug line
        
        if (customer) {
            const domain = emailInput.split('@')[1];
            console.log("Email domain:", domain); // Debug line
            if (domain === "peppyproduce.com") {
                window.location.href = 'admin-dashboard.html';
            } else {
                window.location.href = 'customer/dashboard.html';
            }
        } else {
            alert("Email not found. Please check your email or sign up.");
        }
    } catch (error) {
        console.error("Error fetching customer data:", error);
        alert("There was an error processing your request. Please try again later.");
    }
    
    return false; // Prevent form submission
}


