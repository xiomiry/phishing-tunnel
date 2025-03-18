const net = require("net");

const server = net.createServer((socket) => {
  console.log("Nueva conexión entrante");
  socket.on("data", (data) => {
    console.log("Datos recibidos:", data.toString());
  });

  socket.on("end", () => {
    console.log("Conexión terminada");
  });

  socket.on("error", (err) => {
    console.error("Error en la conexión:", err);
  });
});

server.listen(80, () => {
  console.log("Servidor FRP (falso) escuchando en el puerto 80");
});
