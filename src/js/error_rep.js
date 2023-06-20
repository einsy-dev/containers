/* eslint-disable linebreak-style */
export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[404, 'Файл не найден'], [200, 'Хорошо']]);
  }

  add(code, value) {
    this.errors.set(code, value);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
