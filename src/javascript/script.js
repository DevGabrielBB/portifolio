/* =====================================================
   GABRIEL BATISTA — PORTFÓLIO
   script.js
   ===================================================== */

// ─── NAV: adiciona classe ao fazer scroll ────────────
(function initNavScroll() {
    const header = document.getElementById('hdr');

    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
})();


// ─── MENU MOBILE ────────────────────────────────────
(function initMobileMenu() {
    const ham      = document.getElementById('ham');
    const mob      = document.getElementById('mob');
    const mobClose = document.getElementById('mobClose');
    const links    = mob.querySelectorAll('.ml');

    function openMenu()  { mob.classList.add('open'); }
    function closeMenu() { mob.classList.remove('open'); }

    ham.addEventListener('click', openMenu);
    mobClose.addEventListener('click', closeMenu);
    links.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
})();


// ─── TYPEWRITER ──────────────────────────────────────
(function initTypewriter() {
    var phrases  = ['Full Stack Dev', 'Server (Linux e Windows)', 'Lógica de Programação', 'Protheus'];
    var target   = document.getElementById('tw');
    var phraseIndex  = 0;
    var charIndex    = 0;
    var isDeleting   = false;

    function type() {
        var current = phrases[phraseIndex];

        if (!isDeleting) {
            charIndex++;
            target.textContent = current.slice(0, charIndex);

            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(type, 2200);
                return;
            }
        } else {
            charIndex--;
            target.textContent = current.slice(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        setTimeout(type, isDeleting ? 55 : 105);
    }

    setTimeout(type, 1600);
})();


// ─── SCROLL REVEAL ───────────────────────────────────
(function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, index * 90);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
        observer.observe(el);
    });
})();


// ─── LINK ATIVO NA NAV CONFORME SCROLL ───────────────
(function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function () {
        var current = '';

        sections.forEach(function (sec) {
            if (window.scrollY >= sec.offsetTop - 180) {
                current = sec.id;
            }
        });

        navLinks.forEach(function (link) {
            var isActive = link.getAttribute('href') === '#' + current;
            link.classList.toggle('active', isActive);
        });
    }, { passive: true });
})();
