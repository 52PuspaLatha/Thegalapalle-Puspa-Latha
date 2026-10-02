/**
 * Interactive Behavior Script for Thegalapalle Puspa Latha's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Footer Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-item');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Auto close navigation on selecting link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // 3. Scroll Progress Indicator & Scroll-to-Top Button Toggle
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.pageYOffset / pageHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = `${currentProgress}%`;
        }

        if (scrollTopBtn) {
            if (window.pageYOffset > 350) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // Execute scroll to top action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Active Nav Item Highlighting on Page Scroll
    const sections = document.querySelectorAll('section[id]');

    const updateActiveNavLink = () => {
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const targetNavLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                if (targetNavLink) {
                    navItems.forEach(link => link.classList.remove('active'));
                    targetNavLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavLink);
});