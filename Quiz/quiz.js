const botoes = document.querySelectorAll('.divQuiz .btnQuiz');

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const taCerto = this.getAttribute('data-correct') === 'true';

        if (taCerto) {
            this.classList.add('correto');
            console.log("Acertou!");
        } else {
            this.classList.add('errado');
            console.log("Errou!");
        }


        botoes.forEach(b => {
            b.disabled = true;


            b.style.opacity = "0.5";
            b.style.cursor = "not-allowed";
        });

        console.log("Botão clicado: " + this.innerText + ". Todos os botões bloqueados.");
    });
});
