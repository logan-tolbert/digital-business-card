import type React from "react"
import type { CardBodyProps } from "../types/CardBodyProps.type"
import '../styles/CardBody.style.css'

export const CardBody: React.FC<CardBodyProps> = ({about, interests}) => {
    return (
        <div className="card__content">
            <article>
                <h3>About</h3>
                <p>{about}</p>
            </article>
            <article>
                <h3>Interests</h3>
                <p>{interests}</p>
            </article>
            
        </div>
    )
}