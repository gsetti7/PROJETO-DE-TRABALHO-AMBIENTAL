const botoes = document.querySelectorAll('.btnQuiz');
let pontosMarcados = 0;
let perguntasRespondidas = 0;
const totalPerguntas = document.querySelectorAll('.divQuiz').length;

botoes.forEach(botao => {
    botao.addEventListener('click', function () {
        const taCerto = this.getAttribute('data-correct') === 'true';
        const containerPai = this.closest('.divQuiz');
        const botoesDesteQuiz = containerPai.querySelectorAll('.btnQuiz');

        if (taCerto) {
            this.classList.add('correto');
            pontosMarcados++;
        } else {
            this.classList.add('errado');
        }

        perguntasRespondidas++;

        botoesDesteQuiz.forEach(b => {
            b.disabled = true;
            b.style.cursor = "not-allowed";
            if (b === this) {
                b.style.opacity = "1";
            } else {
                b.style.opacity = "0.4";
            }
        });


        if (perguntasRespondidas === totalPerguntas) {
            const divResultado = document.getElementById('resultadoFinal');
            const spanPontos = document.getElementById('pontos');

            divResultado.style.display = "block";
            spanPontos.innerText = pontosMarcados;


            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});