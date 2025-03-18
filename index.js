const express = require('express');
const app = express();
const httpProxy = require('http-proxy-middleware');

app.use('/', httpProxy.createProxyMiddleware({
  target: 'http://localhost:5555',
  changeOrigin: true
}));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor túnel escuchando en el puerto ${PORT}`);
});
