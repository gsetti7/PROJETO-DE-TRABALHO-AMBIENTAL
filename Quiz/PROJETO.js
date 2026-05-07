
        function checkAnswer(button) {
            const isCorrect = button.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                button.classList.add('true');
                //alert("Parabéns, você acertou!");

            } else {
                button.classList.add('wrong');
                //alert(Ops, resposta errada.);

            }
        }