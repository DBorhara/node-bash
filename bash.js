const pwd = require('./pwd')
const ls = require('./ls')
process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  if (cmd === 'pwd') {
    cmd = pwd()
  }
  if (cmd === 'ls') {
    cmd = + ls()
  }
  process.stdout.write('you typed:' + cmd);
  process.stdout.write('\nprompt > ')
})
