import { StaticImageData } from 'next/image';
import { MEDIAS } from '../assets';

const images: StaticImageData[] = [MEDIAS.img1, MEDIAS.img2];
const videos: string[] = [MEDIAS.video1, MEDIAS.video2];
const audios: string[] = [MEDIAS.audio1, MEDIAS.audio2];

export const media = {
  images: (length: number = 1): StaticImageData[] =>
    length > images.length
      ? new Array(length).fill(null).map((_, idx) => images[idx % 2])
      : images.slice(0, length),
  image: (idx: number = 0): StaticImageData =>
    idx < images.length ? images[idx] : images[idx % 2],
  videos: (length: number = 1): string[] =>
    videos.length
      ? new Array(length).fill(null).map((_, idx) => videos[idx % 2])
      : videos.slice(0, length),
  video: (idx: number = 0): string =>
    idx < videos.length ? videos[idx] : videos[idx % 2],
  audios: (length: number = 1): string[] =>
    audios.length
      ? new Array(length).fill(null).map((_, idx) => audios[idx % 2])
      : audios.slice(0, length),
  audio: (idx: number = 0): string =>
    idx < audios.length ? audios[idx] : audios[idx % 2],
};
