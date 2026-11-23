AOS.init({
    duration: 680,
    once: true,
    offset: 55
});

/* NAVBAR SCROLL & ACTIVE LINK  */
window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    var btt = document.getElementById('btt');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    if (btt) btt.classList.toggle('show', window.scrollY > 300);

    document.querySelectorAll('section[id]').forEach(function(sec) {
        var top = sec.offsetTop - 110,
            bot = top + sec.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bot) {
            document.querySelectorAll('.nav-link').forEach(function(l) {
                l.classList.remove('active');
            });
            var lnk = document.querySelector('.nav-link[href="#' + sec.id + '"]');
            if (lnk) lnk.classList.add('active');
        }
    });
});

/* SMOOTH SCROLL + MOBILE NAV CLOSE */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (!href || href === '#') return;
        var t = document.querySelector(href);
        if (t) {
            e.preventDefault();
            // Close Bootstrap mobile navbar if open
            var navCollapse = document.getElementById('navmenu');
            if (navCollapse && navCollapse.classList.contains('show') && typeof bootstrap !== 'undefined') {
                var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                } else {
                    navCollapse.classList.remove('show');
                }
            }
            setTimeout(function() {
                var isFormTarget = (href === '#villaEnquiryForm' || t.id === 'villaEnquiryForm' || t.classList.contains('enq-form'));
                var navOffset = isFormTarget ? 95 : 75;
                var targetTop = t.getBoundingClientRect().top + window.pageYOffset - navOffset;
                window.scrollTo({
                    top: Math.max(0, targetTop),
                    behavior: 'smooth'
                });

                if (isFormTarget || href === '#contact-section') {
                    setTimeout(function() {
                        var firstInput = document.getElementById('enqName');
                        if (firstInput) {
                            firstInput.focus({ preventScroll: true });
                            firstInput.classList.add('enq-input-highlight');
                            setTimeout(function() {
                                firstInput.classList.remove('enq-input-highlight');
                            }, 2000);
                        }
                    }, 550);
                }
            }, 50);
        }
    });
});

/* ============================================================
   TWIN VILLAS — LUXURY GALLERY & ANIMATED LIGHTBOX CONTROLLER
   ============================================================ */
function initVillaGallery() {
    var vgalItems = document.querySelectorAll('.vgal-item, .mem-bento-tile');
    var vgalFilterBtns = document.querySelectorAll('.vgal-filter-btn');
    var villaLightbox = document.getElementById('villaLightbox');
    if (!villaLightbox || vgalItems.length === 0) return;

    var vlbMainImg = document.getElementById('vlbMainImg');
    var vlbSpinner = document.getElementById('vlbSpinner');
    var vlbViewport = document.getElementById('vlbViewport');
    var vlbCur = document.getElementById('vlbCur');
    var vlbTotal = document.getElementById('vlbTotal');
    var vlbCat = document.getElementById('vlbCat');
    var vlbTitle = document.getElementById('vlbTitle');
    var vlbDesc = document.getElementById('vlbDesc');
    var vlbTags = document.getElementById('vlbTags');
    var vlbFilmstrip = document.getElementById('vlbFilmstrip');

    var vgalData = [];
    var vlbCurrentIdx = 0;
    var isZoomed = false;

    // 1. Gather data from all gallery items
    vgalItems.forEach(function(item, i) {
        var imgEl = item.querySelector('img');
        var src = item.getAttribute('data-src') || (imgEl ? imgEl.src : '');
        var thumbSrc = imgEl ? imgEl.src : src;
        var title = item.getAttribute('data-title') || 'Twin Villas';
        var cat = item.getAttribute('data-subtitle') || item.getAttribute('data-category') || 'Villa';
        var desc = item.getAttribute('data-desc') || '';
        var rawTags = item.getAttribute('data-tags') || '';
        var tags = rawTags.split('•').map(function(t) { return t.trim(); }).filter(Boolean);

        vgalData.push({
            idx: i,
            src: src,
            thumbSrc: thumbSrc,
            title: title,
            category: cat,
            desc: desc,
            tags: tags
        });

        // Click on ANY part of card opens full view
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            e.preventDefault();
            openVillaLightbox(i, 'next');
        });
    });

    if (vlbTotal) vlbTotal.textContent = vgalData.length;

    // 2. Populate thumbnail filmstrip inside lightbox
    if (vlbFilmstrip && vgalData.length > 0) {
        vlbFilmstrip.innerHTML = '';
        vgalData.forEach(function(data, i) {
            var thumb = document.createElement('div');
            thumb.className = 'vlb-thumb' + (i === 0 ? ' active' : '');
            thumb.setAttribute('data-idx', i);
            thumb.setAttribute('title', data.title);
            thumb.innerHTML = '<img src="' + data.thumbSrc + '" alt="' + data.title + '" loading="lazy" />';
            thumb.addEventListener('click', function(e) {
                e.stopPropagation();
                var dir = i >= vlbCurrentIdx ? 'next' : 'prev';
                openVillaLightbox(i, dir);
            });
            vlbFilmstrip.appendChild(thumb);
        });
    }

    // 3. Category Filter Tabs
    vgalFilterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            vgalFilterBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var filter = this.getAttribute('data-filter');

            vgalItems.forEach(function(item) {
                var itemCat = item.getAttribute('data-category');
                if (filter === 'all' || itemCat === filter) {
                    item.classList.remove('vgal-hide');
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(function() {
                        item.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 30);
                } else {
                    item.classList.add('vgal-hide');
                }
            });

            if (window.AOS) AOS.refresh();
        });
    });

    // 4. Open Lightbox
    function openVillaLightbox(idx, direction) {
        if (!villaLightbox || vgalData.length === 0) return;
        if (idx < 0) idx = vgalData.length - 1;
        if (idx >= vgalData.length) idx = 0;

        vlbCurrentIdx = idx;
        var data = vgalData[idx];

        // Reset zoom state
        if (vlbViewport) vlbViewport.classList.remove('is-zoomed');
        isZoomed = false;

        // Show loading spinner
        if (vlbSpinner) vlbSpinner.classList.add('show');

        // Apply slide animation class
        if (vlbMainImg) {
            vlbMainImg.classList.remove('vlb-anim-next', 'vlb-anim-prev');
            void vlbMainImg.offsetWidth; // Trigger reflow
            vlbMainImg.classList.add(direction === 'prev' ? 'vlb-anim-prev' : 'vlb-anim-next');

            // Set image immediately
            vlbMainImg.src = data.src;

            if (vlbMainImg.complete) {
                if (vlbSpinner) vlbSpinner.classList.remove('show');
            } else {
                vlbMainImg.onload = function() {
                    if (vlbSpinner) vlbSpinner.classList.remove('show');
                };
                vlbMainImg.onerror = function() {
                    vlbMainImg.src = data.thumbSrc;
                    if (vlbSpinner) vlbSpinner.classList.remove('show');
                };
            }
        }

        // Update Counter & Text
        if (vlbCur) vlbCur.textContent = idx + 1;
        if (vlbTotal) vlbTotal.textContent = vgalData.length;
        if (vlbCat) vlbCat.textContent = data.category;
        if (vlbTitle) vlbTitle.textContent = data.title;
        if (vlbDesc) vlbDesc.textContent = data.desc;

        // Update Tags
        if (vlbTags) {
            vlbTags.innerHTML = data.tags.map(function(t) {
                return '<span class="vlb-tag-pill">' + t + '</span>';
            }).join('');
        }

        // Sync Thumbnails in Filmstrip
        var thumbs = vlbFilmstrip ? vlbFilmstrip.querySelectorAll('.vlb-thumb') : [];
        thumbs.forEach(function(th, tIdx) {
            th.classList.toggle('active', tIdx === idx);
            if (tIdx === idx) {
                th.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });

        villaLightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // 5. Close Lightbox
    function closeVillaLightbox() {
        if (!villaLightbox) return;
        villaLightbox.classList.remove('open');
        document.body.style.overflow = '';
        if (vlbViewport) vlbViewport.classList.remove('is-zoomed');
        isZoomed = false;
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(function() {});
        }
    }

    // Control Buttons
    var vlbCloseBtn = document.getElementById('vlbCloseBtn');
    if (vlbCloseBtn) vlbCloseBtn.addEventListener('click', closeVillaLightbox);

    var vlbPrevBtn = document.getElementById('vlbPrevBtn');
    if (vlbPrevBtn) {
        vlbPrevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openVillaLightbox(vlbCurrentIdx - 1, 'prev');
        });
    }

    var vlbNextBtn = document.getElementById('vlbNextBtn');
    if (vlbNextBtn) {
        vlbNextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openVillaLightbox(vlbCurrentIdx + 1, 'next');
        });
    }

    // Close on backdrop click
    villaLightbox.addEventListener('click', function(e) {
        if (e.target === villaLightbox || e.target.classList.contains('vlb-stage')) {
            closeVillaLightbox();
        }
    });

    // Zoom Toggle
    function toggleVlbZoom() {
        if (!vlbViewport) return;
        isZoomed = !isZoomed;
        vlbViewport.classList.toggle('is-zoomed', isZoomed);
    }

    var vlbZoomBtn = document.getElementById('vlbZoomBtn');
    if (vlbZoomBtn) vlbZoomBtn.addEventListener('click', toggleVlbZoom);
    if (vlbMainImg) vlbMainImg.addEventListener('dblclick', toggleVlbZoom);

    // Fullscreen Toggle
    var vlbFsBtn = document.getElementById('vlbFsBtn');
    if (vlbFsBtn) {
        vlbFsBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                villaLightbox.requestFullscreen().catch(function(err) {});
            } else {
                document.exitFullscreen().catch(function() {});
            }
        });
    }

    // Mobile Touch Swipe Navigation
    var touchStartX = 0;
    var touchEndX = 0;
    villaLightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    villaLightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
            if (diff < 0) {
                openVillaLightbox(vlbCurrentIdx + 1, 'next');
            } else {
                openVillaLightbox(vlbCurrentIdx - 1, 'prev');
            }
        }
    }, { passive: true });

    // Keyboard Shortcuts
    document.addEventListener('keydown', function(e) {
        if (villaLightbox.classList.contains('open')) {
            if (e.key === 'Escape') {
                closeVillaLightbox();
            } else if (e.key === 'ArrowRight') {
                openVillaLightbox(vlbCurrentIdx + 1, 'next');
            } else if (e.key === 'ArrowLeft') {
                openVillaLightbox(vlbCurrentIdx - 1, 'prev');
            } else if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    villaLightbox.requestFullscreen().catch(function() {});
                } else {
                    document.exitFullscreen().catch(function() {});
                }
            }
        }
    });

    // Export globally for any inline triggers
    window.openVillaLightbox = openVillaLightbox;
    window.closeVillaLightbox = closeVillaLightbox;
    window.openGal = function(i) { openVillaLightbox(i, 'next'); };
    window.closeGal = closeVillaLightbox;
}

// Initialize gallery immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVillaGallery);
} else {
    initVillaGallery();
}

// Magnific popup if present
if (typeof $ !== 'undefined' && typeof $.fn.magnificPopup !== 'undefined') {
    $('.magnific_popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

// ============================================================
// TESTIMONIALS SWIPER WITH PREV/NEXT NAVIGATION ARROWS
// ============================================================
function initTestimonialsSlider() {
    if (typeof Swiper === 'undefined') return;
    var tesEl = document.querySelector('.tesSwiper');
    if (!tesEl) return;
    if (tesEl.swiper) return; // Prevent double init

    var prevBtn = document.querySelector('.tes-swiper-prev');
    var nextBtn = document.querySelector('.tes-swiper-next');

    var tesSwiper = new Swiper('.tesSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: prevBtn,
            nextEl: nextBtn
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 }
        }
    });

    // Start only when in focus area
    if (tesSwiper.autoplay) {
        tesSwiper.autoplay.stop();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            tesSwiper.slidePrev();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            tesSwiper.slideNext();
        });
    }
}

initTestimonialsSlider();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsSlider);
}
window.addEventListener('load', initTestimonialsSlider);

// Number Counter Animation
var numAnimated = false;
window.addEventListener('scroll', function() {
    var hero = document.getElementById('hero');
    if (!numAnimated && hero && window.scrollY > hero.offsetHeight - 300) {
        numAnimated = true;
        document.querySelectorAll('.snum').forEach(function(el) {
            var txt = el.textContent;
            var num = parseInt(txt);
            var suf = txt.replace(/[0-9]/g, '');
            if (isNaN(num)) return;
            var start = 0;
            var step = Math.ceil(num / 55);
            var iv = setInterval(function() {
                start += step;
                if (start >= num) {
                    start = num;
                    clearInterval(iv);
                }
                el.textContent = start + suf;
            }, 1400 / 55);
        });
    }
});

/* ============================================================
   TWIN VILLAS — WHATSAPP BOOKING & ENQUIRY FORM CONTROLLER
   Direct 1-tap instant booking enquiry via WhatsApp (+91 91364 86153)
   ============================================================ */
function initVillaEnquiryForm() {
    var form = document.getElementById('villaEnquiryForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var nameInput = document.getElementById('enqName');
        var phoneInput = document.getElementById('enqPhone');
        var checkinInput = document.getElementById('enqCheckin');
        var checkoutInput = document.getElementById('enqCheckout');
        var guestsSelect = document.getElementById('enqGuests');
        var messageInput = document.getElementById('enqMessage');
        var successBox = document.getElementById('enqSuccessBox');

        var name = (nameInput && nameInput.value) ? nameInput.value.trim() : '';
        var phone = (phoneInput && phoneInput.value) ? phoneInput.value.trim() : '';
        var checkin = (checkinInput && checkinInput.value) ? checkinInput.value : 'To be confirmed';
        var checkout = (checkoutInput && checkoutInput.value) ? checkoutInput.value : 'To be confirmed';
        var guests = guestsSelect ? guestsSelect.value : 'Family / Friends Group';
        var message = (messageInput && messageInput.value) ? messageInput.value.trim() : '';

        if (!name || !phone) {
            alert('Please enter your Name and Phone / Mobile Number.');
            if (!name && nameInput) nameInput.focus();
            else if (!phone && phoneInput) phoneInput.focus();
            return;
        }

        var waPhone = "919136486153";

        var waLines = [
            "Hi Twin Villas, I would like to make a Booking Enquiry:",
            "",
            "👤 *Name:* " + name,
            "📞 *Phone:* " + phone,
            "📅 *Check-in Date:* " + checkin,
            "📅 *Check-out Date:* " + checkout,
            "👥 *Guests:* " + guests
        ];

        if (message) {
            waLines.push("💬 *Special Requests / Occasion:* " + message);
        }

        waLines.push("");
        waLines.push("Please share available villas, tariff, and booking details.");

        var waUrl = "https://wa.me/" + waPhone + "?text=" + encodeURIComponent(waLines.join("\n"));

        // Display feedback banner inside form
        if (successBox) {
            successBox.innerHTML = '<div class="alert alert-success d-flex align-items-center mb-3" style="border-radius:12px; background:#dcfce7; border-color:#86efac; color:#14532d; padding:14px 18px;">' +
                '<i class="fab fa-whatsapp fa-2x text-success me-3"></i>' +
                '<div>' +
                '<strong>Thank you, ' + name + '!</strong> Opening WhatsApp to connect directly with Twin Villas reservations team (+91 91364 86153).' +
                '<br/><small class="text-muted">If WhatsApp does not open automatically, <a href="' + waUrl + '" target="_blank" class="fw-bold text-success text-decoration-underline">Click here to send on WhatsApp</a>.</small>' +
                '</div></div>';
            successBox.style.display = 'block';
            successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Open WhatsApp directly
        window.open(waUrl, '_blank');
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVillaEnquiryForm);
} else {
    initVillaEnquiryForm();
}

/* ============================================================
   TWIN VILLAS — HERO 3-IMAGE LUXURY SWIPER SLIDER
   ============================================================ */
function initHeroSlider() {
    var heroSwiperEl = document.querySelector('.hero-swiper');
    if (!heroSwiperEl || typeof Swiper === 'undefined') return;
    if (heroSwiperEl.swiper) return; // Prevent double init

    var heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 850,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.hero-swiper-next',
            prevEl: '.hero-swiper-prev'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        grabCursor: true
    });

    // Start only when in focus area
    if (heroSwiper.autoplay) {
        heroSwiper.autoplay.stop();
    }
}

/* ============================================================
   TWIN VILLAS — SCROLL REVEAL TRANSLATE ENGINE
   Smooth upwards translation & fade on scrolling into view
   ============================================================ */
function initScrollReveal() {
    var revealElements = document.querySelectorAll('.reveal-up');
    if (revealElements.length === 0) return;

    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.1
        };

        var revealObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                    // Update and kickstart swiper immediately upon reveal
                    var c = entry.target.querySelector('.vs-swiper-carousel');
                    if (c && c.swiper) {
                        c.swiper.update();
                        if (c.swiper.autoplay && !c.swiper.autoplay.running) {
                            c.swiper.autoplay.start();
                        }
                    }
                }
            });
        }, observerOptions);

        revealElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            // If already visible on initial load, reveal immediately
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('is-revealed');
            } else {
                revealObserver.observe(el);
            }
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(function(el) {
            el.classList.add('is-revealed');
        });
    }
}

/* ============================================================
   TWIN VILLAS — BANNER PARALLAX & AMBIENT CONTROLLER
   Keeps text crisp & clear without 3D rasterization blur
   ============================================================ */
function initBannerParallax() {
    var hero = document.getElementById('hero');
    if (!hero) return;

    var glow = hero.querySelector('.hero-slider-glow');
    var ticking = false;

    function updateParallax() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var heroRect = hero.getBoundingClientRect();

        if (heroRect.bottom > -50 && heroRect.top < window.innerHeight + 50) {
            if (glow) {
                // Subtle ambient glow translation only (no text blurred)
                var translateY = scrollY * 0.12;
                glow.style.transform = 'translate(-50%, calc(-50% + ' + translateY.toFixed(1) + 'px)) scale(1.06)';
            }
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    updateParallax();
}

// Interactive Stacked Villas Controller (Default Open, No Toggle Needed)
function initStackedVillaAccordion() {
    var cards = document.querySelectorAll('.villa-split-card');
    if (!cards || cards.length === 0) return;

    cards.forEach(function(card) {
        // Ensure default open state on load
        card.classList.add('is-active');

        var toggleBtn = card.querySelector('.villa-toggle-btn');
        var closeBtn = card.querySelector('.vs-close-btn');

        if (toggleBtn) {
            toggleBtn.style.display = 'none';
        }

        if (closeBtn) {
            closeBtn.style.display = 'none';
        }
    });
}

// Initialize all features on DOM ready

// Amenities Gallery Category Filter Handler
function initAmenitiesFilter() {
    var filterBtns = document.querySelectorAll('.amenity-filter-btn');
    var tiles = document.querySelectorAll('.amenities-bento-grid .mem-bento-tile');
    if (!filterBtns.length || !tiles.length) return;

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var filter = btn.getAttribute('data-filter');
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            tiles.forEach(function(tile) {
                var tileFilter = tile.getAttribute('data-filter');
                if (filter === 'all' || tileFilter === filter) {
                    tile.classList.remove('is-filtered-out');
                    tile.style.display = '';
                } else {
                    tile.classList.add('is-filtered-out');
                    tile.style.display = 'none';
                }
            });
        });
    });
}

function initTwinsVillaFeatures() {
    initHeroSlider();
    initScrollReveal();
    initBannerParallax();
    initAmenitiesFilter();
    initStackedVillaAccordion();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTwinsVillaFeatures);
} else {
    initTwinsVillaFeatures();
}

// ============================================================
// VILLA SPLIT MEDIA AUTO CAROUSELS WITH ARROWS
// Starts auto-sliding dynamically when scrolled into that villa section
// ============================================================
function initVillaCarousels() {
    if (typeof Swiper === 'undefined') return;

    var carousels = document.querySelectorAll('.vs-swiper-carousel');
    if (!carousels || carousels.length === 0) return;

    carousels.forEach(function(carouselEl, idx) {
        // Prevent double initialization
        if (carouselEl.swiper) {
            carouselEl.swiper.update();
            return;
        }

        var prevBtn = carouselEl.querySelector('.vs-carousel-prev');
        var nextBtn = carouselEl.querySelector('.vs-carousel-next');
        var counterEl = carouselEl.querySelector('.vs-current-idx');

        var villaSwiper = new Swiper(carouselEl, {
            loop: true,
            speed: 500,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            watchSlidesProgress: true,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn
            },
            on: {
                init: function() {
                    if (counterEl) {
                        counterEl.textContent = (this.realIndex || 0) + 1;
                    }
                },
                realIndexChange: function() {
                    if (counterEl) {
                        counterEl.textContent = (this.realIndex || 0) + 1;
                    }
                },
                slideChange: function() {
                    if (counterEl) {
                        counterEl.textContent = (this.realIndex || 0) + 1;
                    }
                }
            }
        });

        // Initially stop autoplay: only start when user scrolls to that specific villa
        if (villaSwiper.autoplay) {
            villaSwiper.autoplay.stop();
        }

        // Direct click event listeners to guarantee prev/next works unconditionally
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (villaSwiper && typeof villaSwiper.slidePrev === 'function') {
                    villaSwiper.slidePrev();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (villaSwiper && typeof villaSwiper.slideNext === 'function') {
                    villaSwiper.slideNext();
                }
            });
        }

        // Sizing update after initial paint
        setTimeout(function() {
            if (villaSwiper && typeof villaSwiper.update === 'function') {
                villaSwiper.update();
            }
        }, 300);
    });

    // Attach IntersectionObserver so each villa carousel starts sliding on scroll
    setupVillaCarouselScrollObserver();
}

// ============================================================
// FOCUS AREA SCROLL CONTROLLER FOR ALL SLIDERS
// Ensures EVERY slider (Hero, each of the 6 Villas, Testimonials) starts auto-sliding
// ONLY after its section comes into the active viewport focus area,
// and immediately pauses when scrolled out of focus.
// ============================================================
function setupAllSlidersFocusObserver() {
    if (typeof Swiper === 'undefined') return;

    var observedTargets = [];

    // 1. Hero Section Slider
    var heroSection = document.getElementById('hero');
    if (heroSection) {
        var heroSwiperEl = heroSection.querySelector('.hero-swiper');
        if (heroSwiperEl) {
            observedTargets.push({
                container: heroSection,
                swiperEl: heroSwiperEl
            });
        }
    }

    // 2. Each Villa Split Card Slider (All 6 Villas)
    var villaCards = document.querySelectorAll('.villa-split-card');
    villaCards.forEach(function(card) {
        var carousel = card.querySelector('.vs-swiper-carousel');
        if (carousel) {
            observedTargets.push({
                container: card,
                swiperEl: carousel
            });
        }
    });

    // 3. Testimonials Section Slider
    var tesSection = document.getElementById('reviews') || document.querySelector('.testimonials-section');
    if (tesSection) {
        var tesCarousel = tesSection.querySelector('.tesSwiper');
        if (tesCarousel) {
            observedTargets.push({
                container: tesSection,
                swiperEl: tesCarousel
            });
        }
    }

    if (!observedTargets.length) return;

    if ('IntersectionObserver' in window) {
        var focusObserverOptions = {
            root: null,
            // Negative margins ensure the section must enter the prominent focus area (not barely touching edge)
            rootMargin: '-5% 0px -15% 0px',
            threshold: 0.15
        };

        var sliderFocusObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                for (var i = 0; i < observedTargets.length; i++) {
                    var item = observedTargets[i];
                    if (item.container === entry.target) {
                        var swiper = item.swiperEl ? item.swiperEl.swiper : null;
                        if (!swiper) return;

                        if (entry.isIntersecting) {
                            // Section came into focus area: update and start auto-sliding
                            swiper.update();
                            if (swiper.autoplay && !swiper.autoplay.running) {
                                swiper.autoplay.start();
                            }
                        } else {
                            // Section left focus area: pause auto-sliding
                            if (swiper.autoplay && swiper.autoplay.running) {
                                swiper.autoplay.stop();
                            }
                        }
                        break;
                    }
                }
            });
        }, focusObserverOptions);

        observedTargets.forEach(function(item) {
            sliderFocusObserver.observe(item.container);
        });
    } else {
        // Fallback for older browsers without IntersectionObserver
        function checkFocusFallback() {
            var winHeight = window.innerHeight;
            observedTargets.forEach(function(item) {
                var swiper = item.swiperEl ? item.swiperEl.swiper : null;
                if (!swiper || !swiper.autoplay) return;

                var rect = item.container.getBoundingClientRect();
                var inFocus = (rect.top < winHeight * 0.85) && (rect.bottom > winHeight * 0.15);

                if (inFocus) {
                    if (!swiper.autoplay.running) {
                        swiper.update();
                        swiper.autoplay.start();
                    }
                } else {
                    if (swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    }
                }
            });
        }

        window.addEventListener('scroll', checkFocusFallback, { passive: true });
        window.addEventListener('resize', checkFocusFallback, { passive: true });
        checkFocusFallback();
    }
}

// Alias for backwards compatibility
var setupVillaCarouselScrollObserver = setupAllSlidersFocusObserver;

// Initialize on DOMContentLoaded and on window load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initVillaCarousels();
        setupAllSlidersFocusObserver();
    });
} else {
    initVillaCarousels();
    setupAllSlidersFocusObserver();
}

window.addEventListener('load', function() {
    initVillaCarousels();
    setupAllSlidersFocusObserver();
});