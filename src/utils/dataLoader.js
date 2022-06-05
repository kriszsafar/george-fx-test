import countryData from "../assets/countries.json"

export function getExchangeRatesData() {
  return fetch("https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343")
    .then((resp) => resp.json())
    .then((data) => {
      return data
    })
    .catch(() => { 
      throw new Error("Error while fetching data.") })
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