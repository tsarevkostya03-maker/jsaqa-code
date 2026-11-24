const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

const { sortByName } = require('../../app');

describe('Books names test suit', () => {
  test('Books names should be sorted in ascending order', () => {
    const input = ['Book C', 'Book A', 'Book B'];
    const expected = ['Book A', 'Book B', 'Book C'];
    expect(sortByName(input)).toEqual(expected);
  });

  test('Should return 0 for equal names (case-insensitive)', () => {
    // 'Book' и 'book' после toLowerCase() равны → сработает return 0
    const input = ['Book', 'book'];
    const result = sortByName(input);
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining(['Book', 'book']));
  });
});