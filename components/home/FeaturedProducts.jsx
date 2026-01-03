import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../ui/ProductCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";
import { PRODUCTS } from "@/app/utils/constants";

export default function FeaturedProducts() {

  return (
    <Box component="section" sx={{ py: 8, bgcolor: '#F2E9E4' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" color="#22223B">
          Featured Products
        </Typography>

        <Grid container spacing={2} size={12}>
          {PRODUCTS.slice(0, 4).map((product) => (
            <Grid item key={product.id} size={{ xs: 6, sm: 4, md: 3 }} >
              <ProductCard product={product} href={`all-products/${product.id}`} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
          <Link href={"/all-products"}>
            <AnimatedButton endIcon={<ArrowForwardIcon />}
              sx={{
                fontSize: "16px",
                paddingX: "30px",
                paddingY: "10px",
                "&:hover .MuiButton-endIcon": {
                  transform: "translateX(4px)",
                  transition: "transform 0.3s ease-in-out",
                },
                "& .MuiButton-endIcon": {
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              More Products
            </AnimatedButton>

          </Link>
        </Box>
      </Container >
    </Box >

  )
}
