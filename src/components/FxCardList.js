import React from "react"
import FxCard from "./FxCard"
import { getExchangeRatesData, getCountryData, getFlagsData } from "../utils/dataLoader"


const fxReducer = (state, action) => {
  if (action.type === 'fetch') {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === 'success') {
    return {
      fxCardData: action.data,
      error: null,
      loading: false
    }
  } else if (action.type === 'error') {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  } else {
    throw new Error(`That action type isn't supported.`)
  }
}

export const FxCardList = ({ filter }) => {
  const [state, dispatch] = React.useReducer(
    fxReducer,
    {
      fxCardData: null,
      loading: true,
      error: null
    }
  )

  React.useEffect(() => {
    getExchangeRatesData()
      .then(data => dispatch({ type: "success", data: getCardData(data) }))
      .catch(error => dispatch({ type: "error", error }))
  }, [])

  return (
    <div className="card-list">
      {
        state.loading
          ? <p>Loading</p>
          : state.error
            ? <p>{state.error}</p>
            : state.fxCardData
              .filter(c => filter === "" || c.currency.includes(filter))
              .map(c => <FxCard key={c.countryCode} countryData={c} />)
      }
    </div>
  )
}

function getCardData(excahngeRateData) {
  const countries = getCountryData()
  const flags = getFlagsData()

  let cardData = []
  excahngeRateData.fx.map(fx => {
    const countriesWithCurrency = countries.filter(country => country.currencyCode === fx.currency)

    countriesWithCurrency.map(country => {
      const countryData = {
        countryName: country.countryName,
        countryCode: country.countryCode,
        countryFlag: flags[String(country.countryCode).toLowerCase() + ".png"],
        baseCurrency: excahngeRateData.baseCurrency,
        currency: fx.currency,
        exchangeRate: fx.exchangeRate ? fx.exchangeRate.middle : undefined
      }
      cardData = [...cardData, countryData]
    })
  })

  return cardData
}

export default FxCardList