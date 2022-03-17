const calculatorImpl = require("./impl/calculator")
const proto = require("../proto")

const Calculator = proto?.calculator?.Calculator

const registerServices = (server) => {
  server.addService(Calculator.service, calculatorImpl)
  return server
}

module.exports = { registerServices }
