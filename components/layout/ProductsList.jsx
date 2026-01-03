import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsList({ heading, products }) {
  return (
    <Box component="section" sx={{ pb: 8, pt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" color="#22223B">
          {heading}
        </Typography>

        <Grid container spacing={2} size={12}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <ProductCard product={product} href={`all-products/${product.id}`} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ my: 4 }}>
        <Pagination variant="outlined" color="primary" count={10} />
      </Box>
    </Box>
  )
}
