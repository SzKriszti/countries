import { useState } from "react"

function Country({ country }) {
  const [show, setShow] = useState(false)

  return (
    <div className='country'>
      <h3>{country.name.common}</h3>
      <p>Population: {country.population}</p>

      <button onClick={() => setShow(show => !show)}>show more</button>
      {show  && 
        <>
          {country.flags.png}
          {country.currencies}
        </>
      }

    </div>
  )
}

export default Country