
import React from "react"
import { useState } from "react"
import Contenedor from "./Contenedor.tsx"
import "../css/Filters.css"
import LocalBarIcon from '@material-ui/icons/LocalBar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography} from "@material-ui/core";
export const Filter = () => {
    const [currency, setCurrency] = useState<string>("Flujo")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(e.target.value)
    }
    return (
        <>
            <div className="content">
                <div className="filters_container">
                    <div className="lista">
                        <Typography>Inicio</Typography>
                        <NavigateNextIcon/>
                        <Typography style={{fontWeight:"bold"}}>DashBoard</Typography>
                    </div>
                    <div className="content_icon">
                        <div className="content_icon_text">
                            <Typography>Flujo</Typography>
                            <ExpandMoreIcon/>
                        </div>
                        <div className="icon">
                            <LocalBarIcon />
                        </div>
                    </div>
                </div>
                <Contenedor />
            </div>
        </>
    )
}