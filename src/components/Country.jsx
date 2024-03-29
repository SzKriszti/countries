import { useState } from "react"
import CountryDetails from "./CountryDetails"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function Country({ country }) {
  const [show, setShow] = useState(false)
  const [details, setDetails] = useState('more')

  const showDetails = () => {
    setShow(show => !show)
    setDetails(show === false ? 'less' : 'more')
  }

  return (
    <Card sx={{ maxWidth: '100%', marginTop: 3 }}>

      <CardMedia sx={{ height: {xs: '150px', sm: '300px', md: '300px', lg: '300px'} }} image={country.flags.png} title={country.flags.alt}/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {country.population}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" variant="outlined" 
          onClick={showDetails}>show {details === 'more' ? 'more' : 'less'}</Button>

        {show && 
          <CardContent sx={{ }}>

            <CardContent sx={{ padding: 1 }}>
              <Typography variant="body2" color="text.secondary">Currencies: </Typography>
            </CardContent>

            {country.currencies 
            ?(
            Object.keys(country.currencies).map((currName, index) => 
              <CountryDetails country={country} currName={currName} key={index}/>
            ))
            :
            "has no currencies"}
          </CardContent>
        }

      </CardActions>

    </Card>
  )
}

export default Country