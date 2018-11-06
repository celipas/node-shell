const fs = require('fs')

module.exports = function (filePath) {
    fs.readFile(filePath, 'utf8', (err, files) => {
        if (err) {
            throw err
            // process.stdout.write('we need a flie name dude')
            // process.stdout.write('\nprompt > ')
        } else {
            process.stdout.write(files)
            process.stdout.write('\nprompt > ')

        }
    })

}