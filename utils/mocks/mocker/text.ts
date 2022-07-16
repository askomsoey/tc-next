import { LOREM } from '../assets';

const parapraphs = LOREM.paragraphs;
const sentences = LOREM.paragraphs.join(' ').split('.');
const words = sentences.join(' ').split(' ');

export const text = {
  parapraphs: (
    length: number = 1,
    joined: boolean = false
  ): string[] | string =>
    joined
      ? parapraphs.slice(0, length).join(' ')
      : parapraphs.slice(0, length),
  parapraph: (idx: number = 0): string =>
    idx < parapraphs.length
      ? parapraphs[idx]
      : parapraphs[parapraphs.length - 1],
  sentences: (length: number = 1, joined: boolean = false): string[] | string =>
    joined ? sentences.slice(0, length).join(' ') : sentences.slice(0, length),
  sentence: (idx: number = 0): string =>
    idx < sentences.length ? sentences[idx] : sentences[sentences.length - 1],
  words: (length: number = 1, joined: boolean = false): string[] | string =>
    joined ? words.slice(0, length).join(' ') : words.slice(0, length),
  word: (idx: number = 0): string =>
    idx < words.length ? words[idx] : words[words.length - 1],
};
