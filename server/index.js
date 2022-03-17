const grpc = require("@grpc/grpc-js")
const { registerServices } = require("../grpc/registerServices")

let server = new grpc.Server()

server = registerServices(server)

server.bindAsync(
  "0.0.0.0:55258",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    console.log("GRPC server started listening on port: " + port)
    server.start()
  }
)
