document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-email-btn");
    const emailText = document.getElementById("email-text").textContent.trim();

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(emailText);
            copyButton.textContent = "Copied!";
            copyButton.style.backgroundColor = "var(--primary-yellow)"; // optional visual feedback
            setTimeout(() => {
                copyButton.textContent = "Copy";
                copyButton.style.backgroundColor = "";
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Function to close the menu
    const closeMenu = () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    };

    // Toggle menu when hamburger button is clicked
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu when any nav link is clicked
    const navLinkItems = navLinks.querySelectorAll("a");
    navLinkItems.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains("open")) {
            closeMenu();
        }
    });

    // Close menu on window resize to prevent layout issues
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && navLinks.classList.contains("open")) { // Adjust breakpoint as needed
            closeMenu();
        }
    });
});