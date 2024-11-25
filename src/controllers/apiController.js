const verificar = (req, resp) => {
    try {
        console.log("Solicitud de verificación recibida:", req.query);
        var tokenMeta = "chatbootwoquimeta"; //creado por mi
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenMeta) {
            console.log("Tokens coinciden, respondiendo challenge:", challenge);
            resp.status(200).send(challenge); // Enviar challenge enviado por Meta como texto plano
        } else {
            console.log("Tokens no coinciden o falta challenge/token.");
            resp.status(400).send("Tokens no coinciden");

        }
        console.log(req);

    } catch (error) {
        //Le enviamos el status 400 para que Meta no este intentando verificar constantemente
        console.error("Error al procesar la solicitud de verificación:", error);
        resp.status(400).send("Error interno");
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