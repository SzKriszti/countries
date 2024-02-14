import { useEffect, useState } from 'react'
import Country from './components/Country'
//import Countries from './components/Countries'
import './App.css'
import LoadingMask from './components/LoadingMask'

function App() {
  const [countries, setCountries] = useState(null)
  const [sort, setSort] = useState('asc')

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        console.log(data[0])
      })
  }, [])

  const sortCountries = () => {
    setCountries([...countries
      .sort((a, b) => sort === 'asc'
      ?
      a.population - b.population
      :
      b.population - a.population)
    ])

    setSort(sort === 'asc' ? 'desc' : 'asc')
  }

  return (
 
      <div className='App'>
        <h1>Countries</h1>

        {/*countries 
          ? 
          <Countries countries = {countries} setCountries = {setCountries}/> 
          : 
          <p>loading...</p>
        */}

        {countries 
          ? 
          <>
            <button onClick={sortCountries}>Sort {sort === 'asc' ? 'ascending' : 'descending'} by population</button>
            {countries.map((country, index) => <Country country={country} key={index}/>)}
          </>
          : 
          <LoadingMask/>
        }

      </div>
        
  )
}

export default App
