"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: "Todo esta bien!!"
    });
    exports.router.post('/mensajes', (req, res) => {
        const cuerpo = req.body.cuerpo;
        const de = req.body.de;
        const id = req.params.id;
        res.json({
            ok: true,
            mensaje: 'POST - ok'
        });
    });
});
