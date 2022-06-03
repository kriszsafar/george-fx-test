import TestRenderer from 'react-test-renderer';
import FxCardList from '../components/FxCardList';
import FxCard from "../components/FxCard"

describe("FxCardList", () => {
  
  test("FxCardList displays all cards when filter is empty", () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="" />
    );
    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(235)
  });

  test("FxCardList displays USD cards when filter is USD", () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="USD" />
    );
    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(17)
  });

  test("FxCardList displays no cards when filter is TEST", () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="TEST" />
    );
    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(0)
  });

})
