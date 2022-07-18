import { StaticImageData } from 'next/image';

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  bio?: string;
  profileHeaderImg?: string | StaticImageData;
  profileImg?: string | StaticImageData;
}
