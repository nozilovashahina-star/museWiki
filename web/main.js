/**
 * MuseWiki Interactive Client-side Script
 * Vanilla JavaScript (No frameworks)
 */

document.addEventListener('DOMContentLoaded', () => {
    initArtModal();
    initWingTabs();
    initGallerySliders();
});

/**
 * Gallery Horizontal Slider Controls
 */
function initGallerySliders() {
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => {
        const grid = section.querySelector('.gallery-grid');
        const prevBtn = section.querySelector('.slider-prev');
        const nextBtn = section.querySelector('.slider-next');

        if (!grid) return;

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const cardWidth = grid.querySelector('.art-card')?.offsetWidth || 300;
                grid.scrollBy({ left: -(cardWidth + 22) * 2, behavior: 'smooth' });
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const cardWidth = grid.querySelector('.art-card')?.offsetWidth || 300;
                grid.scrollBy({ left: (cardWidth + 22) * 2, behavior: 'smooth' });
            });
        }
    });
}

/**
 * Masterpiece Details Lightbox / Modal
 */
function initArtModal() {
    const modal = document.getElementById('artModal');
    if (!modal) return;

    const modalClose = modal.querySelector('.modal-close');
    const modalImg = document.getElementById('modalImg');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalMaterial = document.getElementById('modalMaterial');
    const modalLocation = document.getElementById('modalLocation');

    // Attach click events to all art cards and elements with modal data
    const clickableElements = document.querySelectorAll('.art-card, .clickable-art, [data-title]');
    clickableElements.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            // Prevent multiple triggers if target clicked
            const card = e.currentTarget;
            const title = card.getAttribute('data-title') || card.querySelector('h3, h1')?.innerText || 'Durdona Asar';
            const artist = card.getAttribute('data-artist') || card.querySelector('.art-artist, .meta-value')?.innerText || 'Noma\'lum muallif';
            const desc = card.getAttribute('data-desc') || card.querySelector('.art-desc, .spotlight-desc, p')?.innerText || '';
            const img = card.getAttribute('data-img') || card.querySelector('img')?.src || (card.tagName === 'IMG' ? card.src : '');
            const tag = card.getAttribute('data-tag') || card.querySelector('.art-tag, .spotlight-badge')?.innerText || 'San\'at Asari';
            const material = card.getAttribute('data-material') || 'Klassik san\'at merosi';
            const location = card.getAttribute('data-location') || 'Asosiy ekspozitsiya zali';

            if (modalImg && img) modalImg.src = img;
            if (modalBadge) modalBadge.innerText = tag;
            if (modalTitle) modalTitle.innerText = title;
            if (modalDesc) modalDesc.innerText = desc;
            if (modalAuthor) modalAuthor.innerText = artist;
            if (modalMaterial) modalMaterial.innerText = material;
            if (modalLocation) modalLocation.innerText = location;

            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close on X button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on outside overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Museum Wings / Departments Tab Navigation
 */
function initWingTabs() {
    const tabBtns = document.querySelectorAll('.wing-tab-btn');
    const tabPanels = document.querySelectorAll('.wing-panel');

    if (!tabBtns.length || !tabPanels.length) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            // Remove active from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Remove active from all panels
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate current
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}
