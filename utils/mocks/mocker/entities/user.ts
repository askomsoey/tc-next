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

const domains = ['hotmail', 'gmail', 'yahoo', 'protonmail', 'yoobic'];

export const user = (idx: number = 0): IUser => ({
  firstName: idx < firstNames.length ? firstNames[idx] : firstNames[idx % 9],
  lastName: idx < lastNames.length ? lastNames[idx] : lastNames[idx % 9],
  bio: text.sentence(idx),
  email: `${(idx < firstNames.length
    ? firstNames[idx]
    : firstNames[idx % 9]
  ).toLowerCase()}${(idx < lastNames.length
    ? lastNames[idx]
    : lastNames[idx % 9]
  ).toLowerCase()}@${
    idx < domains.length ? domains[idx] : domains[idx % 5]
  }.com`,
  username: `@${(idx < firstNames.length
    ? firstNames[idx]
    : firstNames[idx % 9]
  ).toLowerCase()}${(idx < lastNames.length
    ? lastNames[idx]
    : lastNames[idx % 9]
  ).toLowerCase()}`,
  profileImg: media.image(idx).src,
  profileHeaderImg: media.image(idx + 1).src,
});

export const users = (length: number): IUser[] =>
  new Array(length).fill(null).map((_, idx): IUser => user(idx));
