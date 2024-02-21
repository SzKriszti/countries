import { Box, CircularProgress } from "@mui/material"

function LoadingMask() {
  return (
    <Box variant="determinate" sx={{ display:'flex' }}>
      <CircularProgress/>
    </Box>
  )
}

export default LoadingMask