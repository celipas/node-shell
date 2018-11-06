//Output prompt
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const fs = require('fs')
const curl = require('./request')

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim() // remove the newline

    if (cmd === 'pwd') {
        //print the drectory
        // process.stdout.write(process.cwd())
        pwd()
    } else if (cmd === 'ls') {
        ls()
    } else if (cmd.split(' ')[0] === 'cat') {
        //split 'cat bash.js'

        cat(cmd.split(' ')[1])

        //cat file.js
    } else if (cmd.split(' ')[0] === 'curl') {
        //split 'cat bash.js'

        curl(cmd.split(' ')[1])

        //cat file.js
    } else {



        process.stdout.write('you type: ' + cmd)

    }

    // process.stdout.write('\nprompt > ')
})