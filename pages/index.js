import { useSocket } from "@/context/socket";
import { useEffect, useState } from "react";

export default function Home() {
  const socket = useSocket();
  const [socketId,setSocketId] = useState(null);

  useEffect(()=>{
    socket?.on('connect',()=>{
       setSocketId(socket.id);
    })
  },[socket])
  return (
    <h1>
      {socketId}
    </h1>
  );
}
