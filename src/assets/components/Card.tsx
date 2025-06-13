import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import type { CardProps } from "../types/CardProps.type";

import '../styles/Card.style.css'
export const Card: React.FC<CardProps> = ( {profileInfo} ) => {
    return (
        <div className="card__container">
            <CardHeader profileInfo={profileInfo}/>  
            <CardBody about={profileInfo.about} interests={profileInfo.interests}/>
            <CardFooter links={profileInfo.links}/>
        </div>
    )
}

