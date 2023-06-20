/* eslint-disable linebreak-style */
import ErrorRepository from '../error_rep';

describe('Тестирование игроков', () => {
  test('Тестирование ErrorRep', () => {
    const repo = new ErrorRepository();
    repo.add(100, 'Continue');
    expect(repo.translate(404)).toBe('Файл не найден');
    expect(repo.translate(403)).toBe('Unknown error');
    expect(repo.translate(200)).toBe('Хорошо');
    expect(repo.translate(100)).toBe('Continue');
  });
});
