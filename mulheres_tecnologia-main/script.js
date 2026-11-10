document.addEventListener('DOMContentLoaded', () => {
 
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });


    const btnTema = document.createElement('button');
    btnTema.id = 'btn-tema';
    btnTema.innerHTML = '🌙';
    btnTema.title = 'Alternar Modo Escuro';
    document.body.appendChild(btnTema);


    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
        btnTema.innerHTML = '☀️';
    }

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        btnTema.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
    });
});