export function fazColisao(objeto, colisor) {
    const objetoY = objeto.y + objeto.altura
    const colisorY = colisor.y

    if (objetoY >= colisorY)
        return true

    return false
}