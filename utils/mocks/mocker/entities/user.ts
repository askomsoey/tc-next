import { IUser } from '../../../../shared/interface/user';
import { media } from '../media';
import { text } from '../text';

const firstNames: string[] = [
  'Paul',
  'Sara',
  'Robert',
  'Maria',
  'Charles',
  'Karen',
  'Lucas',
  'Elizabeth',
  'Henry',
];
const lastNames: string[] = [
  'Smith',
  'Winford',
  'Charleston',
  'Littleworth',
  'Jameson',
  'Eisenhover',
  'Müller',
  'Van Cliffe',
  'Mozart',
];

export const user = (idx: number = 0): IUser => ({
  firstName: idx < firstNames.length ? firstNames[idx] : firstNames[idx % 10],
  lastName: idx < lastNames.length ? lastNames[idx] : lastNames[idx % 10],
  bio: text.sentence(idx),
  email: '',
  username: `@${(idx < firstNames.length
    ? firstNames[idx]
    : firstNames[idx % 10]
  ).toLowerCase()}${(idx < lastNames.length
    ? lastNames[idx]
    : lastNames[idx % 10]
  ).toLowerCase()}`,
  profileImg: media.image(idx),
  profileHeaderImg: media.image(idx + 1),
});

export const users = (length: number): IUser[] =>
  new Array(length).fill(null).map((_, idx): IUser => user(idx));
