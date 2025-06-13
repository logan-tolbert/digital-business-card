import type { Profile } from "./types/Profile.type";
import imgPath from '/me.png'

export const info: Profile = {
    firstName: 'Logan',
    lastName: 'Tolbert',
    title: 'Software Developer',
    email: 'lodev205@gmail.com',
    phone: '(205) 913-5630',
    city: 'Dora',
    state: 'Alabama',
    profileImage: imgPath,
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero at nulla viverra viverra. Pellentesque egestas metus nibh, in porttitor eros gravida sit amet. Quisque auctor sed tellus sit amet facilisis. Maecenas a volutpat.',
    interests:'Coding, music, guitar, gaming, technology',
    links: {
        linkedIn: 'ttps://linkedin/in/logan-tolbert',
        github: 'https://github.com/logan-tolbert',
        portfolio: 'https://logan-tolbert.com',
        x: 'https://x.com/lodev205',
        facebook: 'https://www.facebook.com/lodev205',
    }
}

