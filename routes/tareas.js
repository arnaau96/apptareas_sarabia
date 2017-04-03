var express = require('express');
var router = express.Router();
var vartareas = [
    {
        "nom":"Diseño wireframe",
        "etiquetes": [ "wireframe","app","hibrida"],
        "realització":"45"
    },
    {
        "nom":"Reunión",
        "etiquetes": ["app","hibrida"],
        "realització":"20"
    },
    {
        "nom":"Desarrollo Layout",
        "etiquetes": [ "layout","app","hibrida"],
        "realització":"58"
    },
    {
        "nom":"Reunión cliente",
        "etiquetes": [ "reunión","app","hibrida"],
        "realització":"440"
    }
]
router.get('/', function(req, res, next) {
    res.render('tareas', {title: 'Tareas', tareas:vartareas});
});
module.exports = router;