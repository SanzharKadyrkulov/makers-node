const http = require('http');

const PORT = 8080;
const data = [
    {
        name: 'John',
        lastName: 'Cena',
        age: 20
    },
    {
        name: 'John',
        lastName: 'Cena',
        age: 20
    }
]
const server = http.createServer((req, res) => {
    // res.setHeader(`Content-Type`, 'text/html');
    // res.statusCode = 201;
    // res.writeHead(200, {
    //     'Content-Type' : 'application/json'
    // })
    // res.write(JSON.stringify(data))
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        Authorization: 'Bearer 28347024837401346098234823647321837'
    })
    // res.write(`<body><p>Lesson 1</p></body>`)
    // res.write(`<a href="netflix.com">Link</a>`)
    res.statusCode = 200
    switch(req.url){
        case '/' :
            res.write("<h1>This is main page</h1>")
            break;
        case '/contacts': 
            res.write("<h1>This is contacts page</h1>")
            break;
        default:
            res.statusCode = 404;
            res.write("<h1>page not found</h1>")
        

    }
    res.end();
})

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})