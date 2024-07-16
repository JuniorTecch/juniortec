document.addEventListener('DOMContentLoaded', function() {
    const btnDetalhes = document.querySelectorAll('.btn-detalhes');

    btnDetalhes.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const detalhes = document.getElementById(target);

            if (detalhes.style.display === 'block') {
                detalhes.style.display = 'none';
            } else {
                detalhes.style.display = 'block';
            }
        });
    });
});
