import React from "react"
import {useDrag, useDrop} from "react-dnd"
import { Card, CardContent, Typography } from "@material-ui/core"
import "../css/Header.css"
import {ItemType} from "./ItemTypes.ts"
import {memo} from "react"
interface Item{
    id:string, 
    originalIndex:number; 
}
interface Props {
    id:string, 
    textoSmall: string,
    color:string, 
    moveCard:(id:string, to:number)=> void, 
    findCard:(id:string) =>{card:any; index:number }
}
export const ContenedorSmall = ({id, textoSmall, color, moveCard, findCard}: Props) => {
    const originalIndex=findCard(id).index; 
    const [{isDragging}, drag]= useDrag({
        type:ItemType.CARD, 
        item:{id, originalIndex},
        collect:(monitor)=>({
            isDragging:monitor.isDragging()
        }),
        end:(item, monitor)=>{
            const {id:droppedId, originalIndex}=item; 
            const didDrop=monitor.didDrop(); 
            if(!didDrop){
                moveCard(droppedId, originalIndex)
            }
        }
    }); 

    
    const opacity= isDragging ?0 :1; 

    return (<>
        <Card ref={drag} className="cards_smalls" style={{margin:"10px 0" , borderLeft:`3px solid ${color}`, borderRadius:"0 10px 10px 0", opacity}} >
            <CardContent >
                <Typography component="h5" style={{color:"#B4B4B8"}}>NIS  87120 PO/1</Typography>
                <Typography style={{ fontWeight: "bold" }}>
                    {textoSmall}
                </Typography>
                <Typography component="h5" style={{color:"#B4B4B8"}}>300-AX 35</Typography>
            </CardContent>
        </Card>
    </>)
}