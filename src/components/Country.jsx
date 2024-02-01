function Country({ country }) {
  return (
    <div className='country'>
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>
    </div>
  )
}

export default Country