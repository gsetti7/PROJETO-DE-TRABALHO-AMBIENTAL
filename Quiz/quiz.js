const botoes = document.querySelectorAll('.divQuiz .btnQuiz');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const taCerto = this.getAttribute('data-correct') === 'true';

        if (taCerto) {
            this.classList.add('correto');
        } else {
            this.classList.add('errado');
        }

        botoes.forEach(b => {
            b.disabled = true;
            b.style.cursor = "not-allowed";

            const bTaCerto = b.getAttribute('data-correct') === 'true';

            if (b === this || bTaCerto) {
                b.style.opacity = "1";
            } else {
                b.style.opacity = "0.4";
            }
        });
    });
});