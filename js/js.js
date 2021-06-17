const btnM = document.getElementById('icon-menu'),
nav = document.getElementById('nav'),
link = document.querySelectorAll('.header .nav li a')

btnM.addEventListener('click', () => {
    btnM.classList.toggle('active');
    nav.classList.toggle('active');
});

link.forEach(a => {
    a.addEventListener('click', () => {
        btnM.classList.remove('active');
        nav.classList.remove('active');
    });
});
