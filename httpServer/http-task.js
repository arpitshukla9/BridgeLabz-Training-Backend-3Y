const http = require("http");



const server = http.createServer((req,res) => {

    const baseUrl = "http://localhost:3000"
    const parsedURL = new URL(req.url, baseUrl)

    console.log(parsedURL)
    res.end("Server is running")
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});