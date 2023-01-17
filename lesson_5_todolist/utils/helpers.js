const fs = require('fs');

const getBodyData = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })
            req.on('end', () => {
                resolve(body)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const writeDatatoFile = (fileName, content) => {
    fs.writeFile(fileName, JSON.stringify(content), 'utf-8', (err) => {
        if (err) console.log(err);
    })
}


module.exports = {
    getBodyData,
    writeDatatoFile,
}
