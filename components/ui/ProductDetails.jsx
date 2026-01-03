import { Box, Typography } from "@mui/material";

export default function ProductDetails({ product }) {
  return (
    <Box>
      <Box>
        <Box component={"img"} src={product.image} />
      </Box>
      <Typography>{product.title}</Typography>
    </Box>
  )
}
