const calculatorImpl = require("./impl/calculator")
const { protoDescription } = require("../protoDescriptor")

const Calculator = protoDescription?.calculator?.Calculator

const registerService = (server) => {
  server.addService(Calculator.service, calculatorImpl)
  return server
}

module.exports = { registerService }
