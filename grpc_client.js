const grpc = require("@grpc/grpc-js")
const { protoDescription } = require("./protoDescriptor")

const args = process.argv.splice(2, process.argv.length)
if (args.length < 3)
  return console.log("Please Enter command with params ex. sum 1 2 3")
const command = args[0]?.toString()?.toLowerCase()
let paramsList = args.slice(1, args.length)
paramsList = paramsList.map((val) => parseFloat(val))

try {
  const client = new protoDescription.calculator.Calculator(
    "0.0.0.0:55258",
    grpc.credentials.createInsecure()
  )
  switch (command) {
    case "sum":
      client.add({ paramsList }, function (err, resp) {
        console.log("The sum is ", resp?.result)
      })
      break
    case "multiply":
      client.multiply({ paramsList }, function (err, resp) {
        console.log("The multiplication is ", resp?.result)
      })
      break
    default:
      console.log("Invalid operation")
  }
} catch (error) {
  console.log("the err is ", error)
}
