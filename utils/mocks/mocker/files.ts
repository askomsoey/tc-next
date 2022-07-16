import { FILES } from '../assets';

const filesArray: string[] = Object.values(FILES);

export const files = {
  files: (length: number = 1): string[] =>
    length > filesArray.length
      ? new Array(length).fill(null).map((_, idx) => filesArray[idx % 2])
      : filesArray.slice(0, length),
  file: (idx: number = 0): string =>
    idx < filesArray.length ? filesArray[idx] : filesArray[idx % 2],
  doc: (): string => FILES.doc,
  docx: (): string => FILES.docx,
  pdf: (): string => FILES.pdf,
  ppt: (): string => FILES.ppt,
  txt: (): string => FILES.txt,
  xml: (): string => FILES.xml,
};
