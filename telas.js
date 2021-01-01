import { flappyBird, planoDeFundo, chao, mensagemGetReady } from './desenhos.js'

export let telaAtiva = {}

export const mudaParaTela = (novaTela) => {
    telaAtiva = novaTela
}

export const Telas = {
    INICIO: {
        desenha() {
            planoDeFundo.desenha()
            chao.desenha()
            flappyBird.desenha()
            mensagemGetReady.desenha()
        },
        click() {
            mudaParaTela(Telas.JOGO)
        },
        atualiza() {}
    }
}

Telas.JOGO = {
    desenha() {
        planoDeFundo.desenha()
        chao.desenha()
        flappyBird.desenha()
    },
    atualiza() {
        flappyBird.atualiza()
    }
}