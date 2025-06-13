export type Profile = {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  profileImage: string;
  about: string;
  interests: string;
  links: {
    linkedIn?: string;
    github?: string;
    x?: string;
    facebook?: string;
    instagram?: string;
    portfolio?: string;
  };
};