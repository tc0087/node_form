var http = require('http')

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html')
	res.write('<form action="/submitted" method="POST"><input type="text" /><button type="submit">Send</button></form>')
	res.end()
})

server.listen(3000)