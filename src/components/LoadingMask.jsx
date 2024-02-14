import { Box, CircularProgress } from "@mui/material"

function LoadingMask() {
  return (
    <Box sx={{ display:'flex' }}>
      <CircularProgress/>
    </Box>
  )
}

export default LoadingMask