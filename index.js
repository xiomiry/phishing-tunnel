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

server.listen(5555, () => {
  console.log("Servidor escuchando en el puerto 5555");
});
