// Cursor glow
    const glow = document.getElementById('glow');
    document.addEventListener('mousemove', e => {
      glow.style.opacity = '1';
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) { el.target.classList.add('visible'); }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Stagger card reveals
    document.querySelectorAll('.card.reveal').forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
    });
