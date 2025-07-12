// Import the Server and Socket types from the socket.io library
import { Server, Socket } from "socket.io";

// This is the main handler function (usually used in a Next.js API route)
const SocketHandler = (req, res) => {

    // Check if a Socket.IO server is already running on the current HTTP server
    if (res.socket.server.io) {
        console.log("Server already running");
    }
    else {
        // If no, create a new Socket.IO server and attach it to the existing HTTP server
        const io = new Server(res.socket.server);
        
        // Store the server instance on the HTTP server to prevent duplicate creation
        res.socket.server.io = io;

        //.on(eventName, callback) is used to listen for a specific event.
        // so when server recives connection run this function
        io.on('connection', (socket) => {
            // This runs when a client successfully connects
            console.log("server is connected");
        });
    }
    res.end();  //concludes the response process
}

export default SocketHandler;
