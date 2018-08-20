describe('App.ClickCounterView', () => {
  let clickCounter, updateEl, view;

  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement("span");
    view = App.ClickCounterView(clickCounter, updateEl);
  });

  // 1. 데이터를 조회할 clickCounter를 어떻게 얻을 수 있을까?
  // 2. 데이터를 출력할 돔 엘리면트는 어떻게 테스트 할까?

  // 모듈 주입 방식으로 사용

  describe('updateView()', () => {
    it('ClickCounter의 getValue()값을 출력한다', () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  }); // updateView()
});
