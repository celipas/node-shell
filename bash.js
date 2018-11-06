//Output prompt
process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim() // remove the newline

    if (cmd === 'pwd') {
        //print the drectory
        // process.cwd()

        // console.log(process.cwd())
        process.stdout.write(process.cwd())
    } else {

        process.stdout.write('you type: ' + cmd)

    }

    process.stdout.write('\nprompt > ')
})