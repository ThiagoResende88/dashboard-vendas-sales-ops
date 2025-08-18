document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', event => {
        const content = item.nextElementSibling;
        content.classList.toggle('active');
    });
});
