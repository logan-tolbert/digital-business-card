import type { CardProps } from "../types/CardProps.type"
import '../styles/CardHeader.style.css'
import { EmailButton } from "./EmailButton";
export const CardHeader: React.FC<CardProps> = ({profileInfo}:CardProps) => {
    const fullName: string = `${profileInfo.firstName} ${profileInfo.lastName}`;
    const portfolioDisplayName: string = profileInfo.links.portfolio!.substring(profileInfo.links.portfolio!.indexOf('/')+2)
    return (
        <header className="card__header">
            <img className="header__img" src={profileInfo.profileImage} alt={fullName}/>
               <h1>{fullName}</h1>
               <h2>{profileInfo.title}</h2>
               <a className="header__link"href={profileInfo.links.portfolio}>{portfolioDisplayName}</a>
               <EmailButton emailAddress={profileInfo.email}/>
        </header>
    )
}