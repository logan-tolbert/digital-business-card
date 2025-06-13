import type { EmailButtonProps } from "../types/EmailButton.type"
import '../styles/EmailButton.style.css'
import mailIcon from '../images/mail-icon.png'

export const EmailButton: React.FC<EmailButtonProps> = ({ emailAddress }) => {
    return (
        <div className="btn__container">
        <a className="email-btn" href={`mailto:${emailAddress}`} aria-label={`Send email to ${emailAddress}`}><img src={mailIcon} alt="mail-icon"/>Email</a>
        </div>
    );
};
