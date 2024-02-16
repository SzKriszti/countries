import { useState } from "react"
import CountryDetails from "./CountryDetails"

function Country({ country }) {
  const [show, setShow] = useState(false)

  return (
    <div className='country'>
      <></>
      <img src={country.flags.png} alt={country.flags.alt}></img>
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>

      <button onClick={() => setShow(show => !show)}>show more</button>
      {show  && 
        <>
          <div>currencies: {country.currencies 
            ?(
            Object.keys(country.currencies).map((currName, index) => 
              <CountryDetails country={country} currName={currName} key={index}/>
            ))
            :
            "has no currencies"}
          </div>
        </>
      }

    </div>
  )
}

export default Country