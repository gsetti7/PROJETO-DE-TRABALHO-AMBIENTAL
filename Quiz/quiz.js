const botoes = document.querySelectorAll('.btnQuiz');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const taCerto = this.getAttribute('data-correct') === 'true';
        const containerPai = this.closest('.divQuiz');
        const botoesDesteQuiz = containerPai.querySelectorAll('.btnQuiz');

        if (taCerto) {
            this.classList.add('correto');
        } else {
            this.classList.add('errado');
        }

        botoesDesteQuiz.forEach(b => {
            b.disabled = true;
            b.style.cursor = "not-allowed";

            if (b === this) {
                b.style.opacity = "1";
            } else {
                b.style.opacity = "0.4";
            }
        });
    });
});