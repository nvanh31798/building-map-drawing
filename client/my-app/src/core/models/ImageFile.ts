export interface ImageFile extends File {
  id: string;
  url: string;
  name: string;
  order: number;
  lastModified: number;
}
