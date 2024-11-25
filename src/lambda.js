exports.handler = async(event) => {
    return {
        statusCode: 200, // Devuelve 200 para confirmar que funciona
        body: JSON.stringify({
            message: "Hello, World!",
            method: event.httpMethod, // Muestra el método HTTP usado (GET, POST, etc.)
            headers: event.headers, // Incluye los encabezados de la solicitud
            queryString: event.queryStringParameters // Incluye los parámetros de consulta
        }),
    };
};