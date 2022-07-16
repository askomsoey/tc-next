import { StaticImageData } from 'next/image';
import { MEDIAS } from '../assets';

const images: StaticImageData[] = [MEDIAS.img1, MEDIAS.img2];
const videos: string[] = [MEDIAS.video1, MEDIAS.video2];
const audios: string[] = [MEDIAS.audio1, MEDIAS.audio2];

export const media = {
  images: (length: number): StaticImageData[] => images.slice(0, length),
  image: (idx: number): StaticImageData =>
    idx < images.length ? images[idx] : images[images.length - 1],
  videos: (length: number): string[] => videos.slice(0, length),
  video: (idx: number): string =>
    idx < videos.length ? videos[idx] : videos[videos.length - 1],
  audios: (length: number): string[] => audios.slice(0, length),
  audio: (idx: number): string =>
    idx < audios.length ? audios[idx] : audios[audios.length - 1],
};
