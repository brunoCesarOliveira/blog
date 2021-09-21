const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render("admin/index")
})

router.get('/posts', (req, res) => {
    res.render('admin/posts')
})

router.get('/categorias', (req, res) => {
    res.send('Dentro da categoria')
})
router.get("/categorias/add", (req, res) => {
    res.render("admin/addcategorias")
})
module.exports = router