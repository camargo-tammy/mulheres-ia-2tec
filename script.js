document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Scroll Suave para os links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Efeito Interativo 3D nas Imagens (Tilt Effect ao mover o mouse)
    const imagens = document.querySelectorAll('.img-animada');
    imagens.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            img.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg) scale(1.05)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        });
    });

    // 3. Botão Flutuante de Tema
    const btnTema = document.createElement('button');
    btnTema.id = 'btn-tema';
    btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    btnTema.title = 'Alternar Modo de Cor';
    document.body.appendChild(btnTema);

    if (localStorage.getItem('tema') === 'light') {
        document.body.classList.add('light-mode');
        btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        btnTema.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('tema', isLight ? 'light' : 'dark');
    });
});