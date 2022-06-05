import TestRenderer from 'react-test-renderer'
import FxCardList from '../components/FxCardList'
import FxCard from "../components/FxCard"
import { waitForElementToBeRemoved, queryByText, screen } from '@testing-library/react'

describe("FxCardList", () => {

  test("FxCardList displays all cards when filter is empty", async () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="" />
    );

    await new Promise((r) => setTimeout(r, 2000));

    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(235)
  });

  test("FxCardList displays USD cards when filter is USD", async () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="USD" />
    );

    await new Promise((r) => setTimeout(r, 2000));

    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(17)
  });

  test("FxCardList displays no cards when filter is TEST", async () => {

    const testRenderer = TestRenderer.create(
      <FxCardList filter="TEST" />
    );

    await new Promise((r) => setTimeout(r, 2000));

    const testInstance = testRenderer.root;
    const cards = testInstance.findAllByType(FxCard)

    expect(cards.length).toBe(0)
  });

})
