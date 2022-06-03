import { getFlagsData } from "../utils/dataLoader"
import { MdBrokenImage } from "react-icons/md"

export const FxCard = ({ countryData }) => (
  <div className="card">
    <Flag countryCode={countryData.countryCode} />
    <h3 className="space-around">{countryData.currency}</h3>
    <p>{countryData.countryName}</p>
    <ExchangeRate exchangeRate={countryData.exchangeRate} />
  </div>
)

const ExchangeRate = ({ exchangeRate }) => (
  <h3 className="float-right">
    {
      exchangeRate
        ? (1 / exchangeRate).toFixed(4) + " EUR"
        : "Exchange rate not available"
    }
  </h3>
)

const flags = getFlagsData()

const Flag = ({ countryCode }) => {
  const flagName = String(countryCode.toLowerCase()) + '.png'

  return (
    flags[flagName]
      ? <img alt={countryCode} src={flags[flagName]} />
      : <MdBrokenImage color="rgb(187, 43,31)" size={50} style={{ width: "70px" }} />
  )
}

export default FxCard