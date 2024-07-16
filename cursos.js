document.addEventListener("DOMContentLoaded", () => {
    const btnDetalhes = document.querySelectorAll(".btn-detalhes");

    btnDetalhes.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const targetDetalhes = document.getElementById(targetId);

            // Alternar a classe 'active' nos detalhes do curso
            targetDetalhes.classList.toggle("active");
        });
    });
});
