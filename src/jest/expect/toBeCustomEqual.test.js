import toBeCustomEqual from './toBeCustomEqual';

describe('toBeCustomEqual', () => {
  test('toBeCustomEqual 매칭', () => {
    // Act
    const act = toBeCustomEqual(1, 1);
    // Assert
    expect(act.pass).toEqual(true);
    expect(act.message()).toEqual('expected 1 to be equal to 1');
  })

  test('toBeCustomEqual 비매칭', () => {
    // Act
    const act = toBeCustomEqual(1, 2);
    // Assert
    expect(act.pass).toEqual(false);
    expect(act.message()).toEqual('expected 1 to be not equal to 2');
  })
})
