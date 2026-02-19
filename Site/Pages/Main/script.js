document.addEventListener('DOMContentLoaded', () => {
    new WOW({ boxClass: 'wow', animateClass: 'animate__animated', offset: 100, live: true }).init();

    const heroSection = document.getElementById('heroSection');
    const backgrounds = [
        "url('../../Images/Main/ImageBG.png')",
        "url('../../Images/Main/PlacesPhotos/Hawaii.png')",
        "url('../../Images/Main/PlacesPhotos/Island_1.png')",
        "url('../../Images/Main/PlacesPhotos/Island_2.png')",
        "url('../../Images/Main/PlacesPhotos/Island_3.png')"
    ];
    let bgIndex = 0;
    setInterval(() => {
        bgIndex = (bgIndex + 1) % backgrounds.length;
        heroSection.style.backgroundImage = backgrounds[bgIndex];
    }, 8000);

    const videoModal = document.getElementById('videoModal');
    const openVideoBtn = document.getElementById('openVideoBtn');
    const openVideoLink = document.getElementById('openVideoLink');
    const videoSource = 'https://rutube.ru/play/embed/3a3b6922c82e4036883b143ffe3b6f66/';

    const openVideo = () => {
        videoModal.innerHTML = `<span class="video-modal__close">&times;</span><div class="video-modal__content"><iframe src="${videoSource}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border-radius:8px;"></iframe></div>`;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            videoModal.innerHTML = `<span class="video-modal__close">&times;</span><div class="video-modal__content"><video id="fullscreenVideo" class="video-modal__video" controls><source src="" type="video/mp4">Ваш браузер не поддерживает видео.</video></div>`;
        }, 300);
    };

    videoModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('video-modal__close') || e.target === videoModal) closeVideo();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideo();
    });

    [openVideoBtn, openVideoLink].forEach(btn => btn?.addEventListener('click', (e) => { e.preventDefault(); openVideo(); }));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    document.querySelectorAll('.hover-effect').forEach(el => {
        el.addEventListener('mouseenter', () => el.style.zIndex = '5');
        el.addEventListener('mouseleave', () => el.style.zIndex = '1');
    });
});