import { render, screen } from '@testing-library/react'
import FxCard from '../components/FxCard'

describe("FxCard", () => {

  test("FxCard displays exchange rate", () => {
    const dummyCountryData = {
      countryCode: "TE",
      currency: "Test Currency",
      baseCurrency: "EUR",
      countryName: "Test Republic",
      exchangeRate: 0.55
    }

    render(<FxCard countryData={dummyCountryData} />);
    const fxRate = screen.getByText(`${(1 / dummyCountryData.exchangeRate).toFixed(4)} ${dummyCountryData.baseCurrency}`)
    expect(fxRate).toBeInTheDocument()
  });

  test("FxCard dont displays exchange rate if not available", () => {
    const dummyCountryData = {
      countryCode: "TE",
      countryFlag: "testFlagData",
      currency: "Test Currency",
      baseCurrency: "EUR",
      countryName: "Test Republic",
      exchangeRate: undefined
    }

    render(<FxCard countryData={dummyCountryData} />);
    const fxRate = screen.getByText("Exchange rate not available");
    expect(fxRate).toBeInTheDocument();
  });

  test("FxCard loads existing flag", () => {
    const dummyCountryData = {
      countryCode: "HU",
      countryFlag: "testFlagData",
      baseCurrency: "EUR",
      currency: "Test Currency",
      countryName: "Test Republic",
      exchangeRate: 0.5
    }

    render(<FxCard countryData={dummyCountryData} />);

    const flag = screen.getByRole("img");
    expect(flag).toHaveAttribute("src", "testFlagData");
    expect(flag).toHaveAttribute("alt", "HU");
    expect(flag).toBeInTheDocument();
  });

})