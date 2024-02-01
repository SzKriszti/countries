import Country from './Country'

function Countries( {countries} ) {
  
  return (
    <div>
      {countries.map((country, index) => <Country country={country} key={index}/>)}
    </div>
  )
}

export default Countries