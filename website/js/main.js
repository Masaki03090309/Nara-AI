// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');

            if (n >= slides.length) {
                currentSlide = 0;
            } else if (n < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = n;
            }

            slides[currentSlide].style.display = 'block';
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                showSlide(currentSlide - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showSlide(currentSlide + 1);
            });
        }

        // Initialize slideshow
        showSlide(currentSlide);

        // Auto-advance slides every 5 seconds
        setInterval(function() {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section, .gallery-item, .visit-option');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Philosophy items staggered animation
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    philosophyItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(item);
    });

    // Value cards staggered animation
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);

        // Hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(0) scale(1.03)';
            this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        });
    });

    // Service cards staggered animation and hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`;
        observer.observe(card);

        let isAnimated = false;

        // Update hover transition after initial animation completes
        setTimeout(() => {
            isAnimated = true;
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
        }, (index * 0.15 + 0.7) * 1000);

        // Hover effect with lift animation
        card.addEventListener('mouseenter', function() {
            if (isAnimated) {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
                this.style.borderColor = '#2c3e50';
                this.style.zIndex = '10';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (isAnimated) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                this.style.borderColor = '#e8e8e8';
                this.style.zIndex = '1';
            }
        });
    });

    // Horizontal scroll for gallery images
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        let isDown = false;
        let startX;
        let scrollLeft;

        galleryGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            galleryGrid.style.cursor = 'grabbing';
            startX = e.pageX - galleryGrid.offsetLeft;
            scrollLeft = galleryGrid.scrollLeft;
        });

        galleryGrid.addEventListener('mouseleave', () => {
            isDown = false;
            galleryGrid.style.cursor = 'grab';
        });

        galleryGrid.addEventListener('mouseup', () => {
            isDown = false;
            galleryGrid.style.cursor = 'grab';
        });

        galleryGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - galleryGrid.offsetLeft;
            const walk = (x - startX) * 2;
            galleryGrid.scrollLeft = scrollLeft - walk;
        });
    }

    // Add active state to current page navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.style.fontWeight = '700';
        }
    });

    // Hero video effects
    const heroVideo = document.querySelector('.hero-video');
    const heroOverlay = document.querySelector('.hero-overlay');

    if (heroVideo) {
        // Smooth video playback with reduced speed for calmer effect
        heroVideo.playbackRate = 0.75;

        // Ensure video starts playing
        heroVideo.play().catch(function(error) {
            console.log('Video autoplay prevented:', error);
        });

        const isMobile = window.innerWidth <= 768;

        // Mobile: Slow panning effect (left to right)
        if (isMobile) {
            let panPosition = 0;
            const panSpeed = 0.3; // pixels per frame - increased for visible effect
            const panRange = 100; // total pixels to pan - increased range

            function animatePan() {
                panPosition += panSpeed;
                if (panPosition >= panRange) {
                    panPosition = 0; // Reset to create loop
                }

                // Calculate position percentage (from left to right)
                const positionPercent = 30 + (panPosition / panRange) * 40; // 30% to 70%
                heroVideo.style.objectPosition = `${positionPercent}% center`;

                requestAnimationFrame(animatePan);
            }

            animatePan();
        }

        // PC: Parallax effect for video (gentle movement)
        if (!isMobile) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;

                if (scrolled < 835) {
                    // Subtle zoom effect on scroll
                    const scale = 1 + (scrolled / 835) * 0.1;
                    heroVideo.style.transform = `translate(-50%, -50%) scale(${scale})`;

                    // Gradually increase overlay opacity and blur
                    const opacity = 0.4 + (scrolled / 835) * 0.3;
                    const blur = (scrolled / 835) * 3;
                    heroOverlay.style.background = `linear-gradient(135deg, rgba(102, 126, 234, ${opacity}), rgba(118, 75, 162, ${opacity}))`;
                    heroOverlay.style.backdropFilter = `blur(${blur}px)`;
                }
            });
        }

        // Pulsing effect disabled to prevent flickering
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));

    // ========================================
    // 追加のおしゃれなエフェクト
    // ========================================

    // 1. スムーズなナビゲーション背景変化（スクロール時に影を追加）
    const nav = document.querySelector('.navigation');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            nav.style.transition = 'box-shadow 0.3s ease';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    // 2. Typewriter effect disabled to prevent conflict with CSS cross-dissolve animation

    // 3. Mouse-following gradient effect disabled to prevent flickering

    // 4. スクロール進行バー
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(to right, #667eea, #764ba2)';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // 5. ボタンのリップル効果
    const buttons = document.querySelectorAll('a.btn-primary, a.join-link, .nav-link.book-now');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-effect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // CSSアニメーション追加
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        /* スムーズなホバートランジション */
        a, button {
            transition: all 0.3s ease;
        }

        /* カードのホバー時の光沢効果 */
        .service-card::before,
        .value-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
        }

        .service-card:hover::before,
        .value-card:hover::before {
            left: 100%;
        }
    `;
    document.head.appendChild(style);
});
