const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    process.stdin.on('fileName', fileName => {
      cat(fileName);
    })
    ;
  } else {
    process.stdout.write('you typed:' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
