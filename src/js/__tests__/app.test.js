/* eslint-disable linebreak-style */
import Team from '../app';

describe('Тестирование игроков', () => {
  test('Тестирование метода Add', () => {
    const team = new Team();
    team.add('Svetlana');
    expect(team.members.has('Svetlana')).toBe(true);
  });
  test('Тестирование метода Add', () => {
    const team = new Team();
    team.add('swordsman');
    expect(() => team.add('swordsman')).toThrow(new Error('Игрок уже существует'));
  });
  test('Тестирование метода AddAll', () => {
    const team = new Team();
    team.addAll('swordsman', 'Svetlana', 'archer');
    expect(team.members.has('swordsman')).toBe(true);
    expect(team.members.has('Svetlana')).toBe(true);
    expect(team.members.has('archer')).toBe(true);
  });
  test('Тестирование метода AddAll', () => {
    const team = new Team();
    team.addAll('swordsman', 'Svetlana', 'archer');
    expect(team.toArray()).toEqual(['swordsman', 'Svetlana', 'archer']);
  });
});
