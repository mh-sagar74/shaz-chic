import { Box, Grid, Typography } from "@mui/material";

// https://dribbble.com/shots/26819666-Fashion-eCommerce-Product-Page-UI

export default function ProductDetails({ product }) {
  console.log("product : ", product);
  return (
    <Grid container size={12} spacing={2}>
      <Grid size={6}>
        <Box component={"img"} src={product.image}
          sx={{ objectFit: "cover", height: { sm: "60vh" }, width: "100%" }} />
      </Grid>

      <Grid size={6}>
        <Typography>{product.description}</Typography>
      </Grid>
    </Grid>
  )
}
