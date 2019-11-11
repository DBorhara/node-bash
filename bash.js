const pwd = require('./pwd')
const ls = require('./ls')
process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd()
  }
  else if (cmd === 'ls') {
    ls()
  } else {
    process.stdout.write('you typed:' + cmd);
    process.stdout.write('\nprompt > ')
  }
})
