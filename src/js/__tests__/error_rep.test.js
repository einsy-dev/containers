/* eslint-disable linebreak-style */
import ErrorRepository from '../error_rep';

describe('Тестирование игроков', () => {
  test('Тестирование ErrorRep', () => {
    const repo = new ErrorRepository();
    repo.add(404, 'Файл не найден');
    expect(repo.translate(404)).toBe('Файл не найден');
    expect(repo.translate(403)).toBe('Unknown error');
  });
});
