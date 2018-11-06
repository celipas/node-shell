const request = require('request');

module.exports = function (url) {
    request(url, function (err, res, body) {
        console.log(err)
        console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        process.stdout.write('\nprompt > ')

    })
}