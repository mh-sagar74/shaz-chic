import { Box } from "@mui/material";
import { PRODUCTS } from "../utils/constants";
import ProductsList from "@/components/layout/ProductsList";

export default function CartProductsPage() {
  const cartProducts = PRODUCTS.filter((product) => product.isCart === true);
  return (
    <Box>
      <ProductsList heading={"Add to Cart"} products={cartProducts} />
    </Box>
  )
}
