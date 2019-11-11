const pwd = require('./pwd')
const fs = require('./fs')
process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  if (cmd === 'pwd') {
    cmd = pwd()
  }
  if (cmd === 'ls') {
    cmd = fs()
  }
  process.stdout.write('you typed:' + cmd);
  process.stdout.write('\nprompt > ')
})
