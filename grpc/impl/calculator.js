function add(call, cb) {
  const args = call?.request?.paramsList || []
  const result = args.reduce((prev, curr) => {
    return prev + curr
  })
  cb(null, { result })
}

function multiply(call, cb) {
  const args = call?.request?.paramsList || []
  const result = args.reduce((prev, curr) => {
    return prev * curr
  })

  cb(null, { result })
}

module.exports = {
  add,
  multiply,
}
