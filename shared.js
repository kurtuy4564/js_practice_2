import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export function readLine(inputString, outputString = '') {
  return new Promise(resolve => {
    rl.question(inputString, answer => {
      console.log(outputString ?? `${outputString} ${answer}`)
      resolve(answer)
    })
  })
}

export function closeReadline() {
  rl.close()
}
