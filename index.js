// 1. IMPORTACIONES
const express = require('express');
const app = express()

// 2. MIDDLEWARES
require('dotenv').config()

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs')

// 3. RUTAS


// 4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`It's alive`);
})
