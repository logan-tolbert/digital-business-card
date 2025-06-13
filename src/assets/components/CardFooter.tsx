import type React from "react"
import type { CardFooterProps } from "../types/CardFooterProps.type"
import '../styles/CardFooter.style.css'
import linkedInIcon from '../images/Linkedin-Icon.png'
import githubIcon from '../images/GitHub-Icon.png'
import facebookIcon from '../images/Facebook-Icon.png'
import xIcon from '../images/Twitter-Icon.png'

export const CardFooter: React.FC<CardFooterProps> = ({links}) => {
    return (
        <footer className="card__footer">
            <a href={links.linkedIn}><img src={linkedInIcon} alt="LinkedIn icon"/></a>
            <a href={links.github}><img src={githubIcon} alt="Github Icon"/></a>
            <a href={links.facebook}><img src={facebookIcon} alt="Facebook Icon"/></a>
            <a href={links.x}><img src={xIcon} alt="X (Twitter) icon"/></a>
        </footer>
    )
}