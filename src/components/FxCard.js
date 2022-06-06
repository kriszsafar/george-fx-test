import { MdBrokenImage } from "react-icons/md"

export const FxCard = ({ countryData }) => (
  <div className="card">
    <Flag countryCode={countryData.countryCode} src={countryData.countryFlag} />
    <h3 className="space-around">{countryData.currency}</h3>
    <p>{countryData.countryName}</p>
    <ExchangeRate exchangeRate={countryData.exchangeRate} baseCurrency={countryData.baseCurrency} />
  </div>
)

const ExchangeRate = ({ exchangeRate, baseCurrency }) => (
  <h3 className="float-right">
    {
      exchangeRate
        ? `${(1 / exchangeRate).toFixed(4)} ${baseCurrency}`
        : "Exchange rate not available"
    }
  </h3>
)

const Flag = ({ countryCode, src }) => (
  src
    ? <img alt={countryCode} src={src} />
    : <MdBrokenImage color="rgb(187, 43,31)" size={50} style={{ width: "70px" }} />
)

export default FxCard