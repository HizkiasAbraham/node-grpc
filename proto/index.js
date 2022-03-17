const PROTO_PATH = __dirname + "/service.proto"
const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

const protoDescription = grpc.loadPackageDefinition(
  protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  })
)

module.exports = protoDescription
