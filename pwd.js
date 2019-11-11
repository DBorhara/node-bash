const pwd = () => {
  const ff = process.cwd()
  process.stdout.write(ff)
  process.stdout.write('\nprompt > ')
}

module.exports = pwd
