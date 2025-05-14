const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.yellow(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
  return !bgcolor ? chalk.yellow(text) : chalk.bgKeyword(bgcolor)(text)
}

const Lognyong = (text, color) => {
  return !color ? chalk.yellow('[ ! ] ') + chalk.yellow(text) : chalk.yellow('=> ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  bgcolor,
  Lognyong
}
