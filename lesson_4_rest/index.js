const http = require('http')

const user = {
    name: 'John',
    age: 20,
    job: 'Developer',
}

const car = {
    brand: 'BMW',
    model: 'X7',
    make: '2020'
}

const routes = {
    '/': '<h1>Welcome this is main page</h1>',
    '/user': user,
    '/user/name': user.name,
    '/api/methods': (req, res) =>{
        console.log(`${req.url} ${res.statusCode}`);
        return {
            status: res.statusCode,
            url: req.url,
            user,
            method: req.method,
        }
    },
    '/car': (req) => ({
        car,
        cookie: req.headers.cookie,
    }),
}


const types = {
    object: JSON.stringify,
    string: s=>s,
    undefined: () => '404 route not found',
    function: (fn, req, res) => JSON.stringify(fn(req, res))
}

const server = http.createServer((req, res) => {
    const data = routes[req.url]
    const type = typeof data
    const serializer = types[type]
    const result = serializer(data, req, res)
    res.end(result)
})

server.listen(5000, () => {
    console.log(`server is running at port ${5000}`);
})
