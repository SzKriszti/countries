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
    <Card className='country' sx={{ maxWidth: 450}}>

      <CardMedia sx={{ height: 300 }} image={country.flags.png} title={country.flags.alt}/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {country.population}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color='primary' onClick={showDetails}>show {details === 'more' ? 'more' : 'less'}</Button>
        {show && 
          <CardContent>
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