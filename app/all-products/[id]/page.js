import { PRODUCTS } from "@/app/utils/constants";
import ProductDetails from "@/components/ui/ProductDetails";
import { Box, Container, Typography } from "@mui/material";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const selectedProduct = PRODUCTS.find((product) => product.id === Number(id));

  return (
    <Box sx={{ pb: 8, pt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" color="#22223B">
          {selectedProduct.title}
        </Typography>
        <ProductDetails product={selectedProduct} />
      </Container>
    </Box>
  )
}
