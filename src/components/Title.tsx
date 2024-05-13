import React from "react"
import {Card, CardContent, Typography} from "@material-ui/core"
import "../css/Header.css"
interface Props{
    texto:string,
    cantidad:string
    color:string
}
export const Title=({texto, cantidad,color}:Props)=>{
    return(
        <>
        <Card className="cards" style={{marginTop:"10px", borderTop:`3px solid ${color}`, borderRadius:"0 0 10px 10px"}}>
        <CardContent className="content_text">
          <Typography style={{fontWeight:"bold",textTransform:"uppercase"}}>
            {texto}
          </Typography>
          <Typography style={{fontWeight:"bold"}}>{cantidad}</Typography>
          </CardContent>
      </Card>
        </>
    )
}