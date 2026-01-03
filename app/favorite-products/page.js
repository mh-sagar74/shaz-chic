import { Box } from "@mui/material";
import { PRODUCTS } from "../utils/constants";
import ProductsList from "@/components/layout/ProductsList";

export default function FavProductsPage() {
  const favProducts = PRODUCTS.filter((product) => product.isFav === true);
  return (
    <Box>
      <ProductsList heading={"Favorite Products"} products={favProducts} />
    </Box>
  )
}
