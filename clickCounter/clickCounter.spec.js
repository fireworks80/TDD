describe('App.ClickCounter', () => {

  let counter;

  beforeEach(() => {
    counter = App.ClickCounter();
  });

  describe('increase()', () => {

    it('값을 1증가 시킨다', () => {
      // 준비
      // const counter = App.ClickCounter();
      // counter의 value의 값이 0이 아닐 수가 있다

      const initValue = counter.getValue();

      // 실행
      counter.increase();

      // 단언
      expect(counter.getValue()).toBe(initValue + 1);

    });

  });

  describe('getValue()', () => {

    it('초기값이 0인 카운터 값을 반환한다', () => {
      // const counter = App.ClickCounter();
      expect(counter.getValue()).toBe(0);
    });

  });

});