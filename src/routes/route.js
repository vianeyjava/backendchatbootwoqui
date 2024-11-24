const express = require("express");
const apiController = require("../controllers/apiController");

// Crear el router
const router = express.Router();

// Ruta de ejemplo: Página principal, ruta ejemplo
router.get("/", (req, res) => {
    res.json({ message: "Bienvenido a la API de ChatBootWoqui" });
});

// Ruta de ejemplo: Obtener usuarios
router.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
    ]);
});

// Ruta de ejemplo: Crear un usuario
router.post("/users", (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `Usuario ${name} creado exitosamente` });
});

// Ruta de ejemplo: Obtener un usuario por ID
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id, name: `Usuario ${id}` });
});

// Ruta de ejemplo: Actualizar un usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Usuario ${id} actualizado a ${name}` });
});

// Ruta de ejemplo: Eliminar un usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario ${id} eliminado exitosamente` });
});

//Rutas que utilizan funciones del apiController
router
    .get("/verificar", apiController.verificar)
    .post("/recibir", apiController.recibir)

module.exports = router;