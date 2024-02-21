import { useEffect, useState } from 'react'
import Country from './components/Country'
import LoadingMask from './components/LoadingMask'
import { Box, Button, Container, TextField, Typography } from '@mui/material'

function App() {
  const [countries, setCountries] = useState(null)
  const [sort, setSort] = useState('asc')
  const [filteredCountries, setFilteredCountries] = useState(null)
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setTimeout(() => setCountries(data), 1000)
      )
  }, [])

  useEffect(() => {
    if (countries) {
      setFilteredCountries(
        countries.filter(
          country =>
            country.name &&
            country.name.common.toLowerCase().includes(searchString.toLowerCase())
            )
      )
    }
  }, [searchString, countries])

  const sortCountries = () => {
    setCountries([...countries]
      .sort((a, b) => sort === 'asc'
      ?
      a.population - b.population
      :
      b.population - a.population)
    )

    setSort(sort === 'asc' ? 'desc' : 'asc')
  }

  return (
 
      <Container className='App' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h2' sx={{ padding: 5, fontStyle: 'italic' }}>Fun with flags</Typography>

      <>
        {countries 
          ? 
          <Box sx={{ maxWidth: '500px' }}>
            <TextField variant="outlined" label="search" type="text" sx={{ width: '100%'}} onChange={event => {setSearchString(event.target.value)}}/>
            
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ marginTop: 3 }} onClick={sortCountries}>Sort {sort === 'asc' ? 'ascending' : 'descending'} <br/> by population</Button>
            </Box>
          
            {searchString === ""
              ?
              countries.map((country, index) => <Country country={country} key={index}/>)
              :
              filteredCountries.map((country, index) => <Country country={country} key={index}/>)
            }
            
          </Box>
          : 
          <LoadingMask/>
        }
      </>

      </Container>
        
  )
}

export default App
