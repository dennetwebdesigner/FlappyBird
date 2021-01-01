import { criaFlappyBird, planoDeFundo, chao, mensagemGetReady } from './desenhos.js'

export let telaAtiva = {}
const globais = {}

export const mudaParaTela = (novaTela) => {
    telaAtiva = novaTela
    if (telaAtiva.inicializa())
        telaAtiva.inicializa()
}

export const Telas = {
    INICIO: {
        inicializa() {
            globais.flappyBird = criaFlappyBird()
        },
        desenha() {
            planoDeFundo.desenha()
            chao.desenha()
            globais.flappyBird.desenha()
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
        globais.flappyBird.desenha()
    },
    click() {
        globais.flappyBird.pula()
    },
    atualiza() {
        globais.flappyBird.atualiza()
    }
}