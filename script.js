document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed(".typed-text", {
        strings: ["Web Developer", "Frontend Developer", "Python Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    })

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            })
        })
    })

    // Active navigation link update on scroll
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")

    window.addEventListener("scroll", () => {
        let current = ""
        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active")
            }
        })
    })
})