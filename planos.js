// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const btnDetalhes = document.querySelectorAll('.btn-detalhes');

    btnDetalhes.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const detalhes = document.getElementById(target);

            detalhes.classList.toggle('active');
        });
    });
});
