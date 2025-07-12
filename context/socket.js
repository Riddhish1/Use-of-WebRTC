import { createContext, useContext, useEffect, useState } from "react";
import {io} from "socket.io-client"

const SocketContext = createContext()

export const useSocket = () =>{
    const socket = useContext(SocketContext);
    return socket;
}
export const SocketProvider = (props) => {
    const {children} = props;
    const [socket,setSocket] = useState(null);

    useEffect(()=>{
        const connection = io()
        setSocket(connection)
    },[]);
    //When the socket receives the connect_error event, run this function
    socket?.on('connect_error', async(err)=>{
        console.log("error establishing socket",err)
        await fetch('/api/socket')
    })
    
    return(
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}