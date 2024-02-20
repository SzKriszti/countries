import { useEffect, useState } from 'react'
import Country from './components/Country'
import './App.css'
import LoadingMask from './components/LoadingMask'
import { Box, Button, Container, Typography } from '@mui/material'

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
 
      <Container className='App' sx={{}}>
        <Typography variant='h4'>Countries</Typography>

      <Box>
        {countries 
          ? 
          <>
            <Button onClick={sortCountries}>Sort {sort === 'asc' ? 'ascending' : 'descending'} by population</Button>
            {countries.map((country, index) => <Country country={country} key={index}/>)}
          </>
          : 
          <LoadingMask/>
        }
      </Box>

      </Container>
        
  )
}

export default App
