import { Telas, telaAtiva, mudaParaTela } from './telas.js'

console.log('Flappy Game')

function loop() {
    telaAtiva.desenha()
    telaAtiva.atualiza()

    requestAnimationFrame(loop)
}

window.addEventListener('click', () => {
    if (telaAtiva.click())
        telaAtiva.click()
})

mudaParaTela(Telas.INICIO)
loop()