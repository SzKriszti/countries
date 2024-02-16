function CountryDetails({ country, currName }) {


  return (
    <>
      <p>name: {country.currencies[currName].name}</p>
      <p>symbol: {country.currencies[currName].symbol}</p>
    </>
  )
}

export default CountryDetails