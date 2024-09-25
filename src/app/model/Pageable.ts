export class Pageable<T> {
  pagesCount: number;
  totalElements: string;
  objects: Array<T>;

  constructor(pagesCount: number, totalElements: string, objects: Array<T>) {
    this.pagesCount = pagesCount;
    this.totalElements = totalElements;
    this.objects = objects;
  }
}
