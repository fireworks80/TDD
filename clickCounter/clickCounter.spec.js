describe('App.ClickCounter', () => {

  let counter;

  // beforeEach: it 함수가 호출 직전에 실행되는 함수
  beforeEach(() => {
    counter = App.ClickCounter();
  });

  describe("increase()", () => {
    it("카운터를 1 올린다", () => {
      // 준비
      // const counter = App.ClickCounter();
      const iniVal = counter.getValue();
      // 실행
      counter.increase();

      // 단언
      expect(counter.getValue()).toBe(iniVal + 1);
    });
  });

  describe('getValue()', () => {
    it('초기값이 0인 카운터 값을 반환한다', () => {
      // const counter = App.ClickCounter();
      expect(counter.getValue()).toBe(0);
    });
  });

  

});