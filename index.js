const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

http.listen(port, function() {
    console.log("Listening on *:" + port);
})