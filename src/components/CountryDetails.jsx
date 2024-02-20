import { CardContent, Typography } from "@mui/material"

function CountryDetails({ country, currName }) {

  return (
    <CardContent sx={{ padding: 1 }}>
      <Typography variant="body2" color="text.secondary">name: {country.currencies[currName].name}</Typography>
      <Typography variant="body2" color="text.secondary">symbol: {country.currencies[currName].symbol}</Typography>
    </CardContent>
  )
}

export default CountryDetails