import exchangeData from "../assets/fx.json"
import countryData from "../assets/countries.json"

export function getExchangeRatesData() {
  return exchangeData.fx
}

export function getCountryData() {
  return Object.keys(countryData.countries.country)
    .map(function (key) {
      return countryData.countries.country[key];
    });
}

function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

export function getFlagsData() {  
  return importAll(require.context('../assets/flags', false, /\.(png)$/));
}