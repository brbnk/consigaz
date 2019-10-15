const chalk = require('chalk')
const log = console.log

module.exports = (message, type) => { 
    switch (type) { 
        case 'CYAN': 
            log(chalk.bold.cyan(message))
            break
        case 'RED':
            log(chalk.bold.red(message))
            break
        case 'BG_GREEN':
            log(chalk.bgGreen.bold(message))
            break
        case 'BG_YELLOW':
            log(chalk.bgYellow.bold(message))
            break
        case 'BG_RED':
            log(chalk.bgRed.bold(message))
            break
        default:
            log(message)
    }
}