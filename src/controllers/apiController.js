const verificar = (req, resp) => {
    try {
        var tokenMeta = "chatbootwoquimeta";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenMeta) {
            resp.send(challenge);
        } else {
            resp.status(400).send();

        }
        console.log(req);

    } catch (error) {
        //Le enviamos el status 400 para que Meta no este intentando verificar constantemente
        resp.status(400).send();
    }
}

const recibir = (req, resp) => {
    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var objetoMensaje = value["messages"];

        var message = objetoMensaje[0];

        var texto = message["text"]["body"];
        var number = message["form"];

        console.log("Enviado desde: " + number + " El texto es el siguiente: " + texto);
        // console.log(objetoMensaje);
        resp.send('EVENT_RECEIVED');
    } catch (error) {
        console.log(error);
        resp.send('EVENT_RECEIVED');
    }
    console.log(req);

}

module.exports = {
    verificar,
    recibir
}