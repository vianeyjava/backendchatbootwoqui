const verificar = (req, resp) => {
    resp.send('Verificado!')
}

const recibir = (req, resp) => {
    resp.send('Recibido!')
}

module.exports = {
    verificar,
    recibir
}