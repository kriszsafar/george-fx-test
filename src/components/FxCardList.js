import FxCard from "./FxCard"
import { getExchangeRatesData, getCountryData } from "../utils/dataLoader"

export const FxCardList = ({filter}) => {
  const cardData = getCardData()

  return (
    <div className="card-list">
      {
        cardData
          .filter(c => filter === "" || c.currency.includes(filter))
          .map(c => <FxCard key={c.countryCode} countryData={c} />)
      }
    </div>
  )
}

function getCardData() {
  const exchangeRates = getExchangeRatesData()
  const countries = getCountryData()

  let cardData = []
  exchangeRates.map(fx => {
    const countriesWithCurrency = countries.filter(country => country.currencyCode === fx.currency)

    countriesWithCurrency.map(country => {
      const countryData = {
        countryName: country.countryName,
        countryCode: country.countryCode,
        currency: fx.currency,
        exchangeRate: fx.exchangeRate ? fx.exchangeRate.middle : undefined
      }
      cardData = [...cardData, countryData]
    })
  })

  return cardData
}

export default FxCardList