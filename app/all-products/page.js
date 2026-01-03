import { Box } from "@mui/material";
import { PRODUCTS } from "../utils/constants";
import ProductsList from "@/components/layout/ProductsList";

export default function AllProductsPage() {
  return (
    <Box>
      <ProductsList heading={"All Available Products"} products={PRODUCTS} />
    </Box>
  )
}
