"use client";

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AnimatedButton from "./AnimatedButton";
import AnimatedIconButton from "./AnimatedIconButton";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, href }) => {
  const { title, price, discountPrice, image, isNew } = product;
  const [isLiked, setIsLiked] = useState(product.isFav);
  const router = useRouter();

  // Calculate discount percentage if needed
  const hasDiscount = discountPrice && discountPrice < price;
  const displayPrice = hasDiscount ? discountPrice : price;
  const discountPercent = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent clicking the card itself if you add a link later
    console.log(`Added ${title} to cart`);
    // Add your context/redux logic here
  };

  const handleToggleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        borderRadius: { xs: 2, sm: 3 },
        boxShadow: "0 2px 8px rgba(34,34,59,0.1)",
        transition: "0.3s",
        position: "relative",
        bgcolor: "#ffffff",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(34,34,59,0.15)",
        },
      }}
    >
      {/* Floating Action Buttons / Badges */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          right: 10,
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        {/* Sale or New Badge */}
        <Box>
          {hasDiscount && (
            <Chip
              label={`-${discountPercent}%`}
              size="small"
              sx={{ fontWeight: "bold", mr: 1, bgcolor: "error.main", color: "#F2E9E4", fontSize: { xs: "10px", sm: "13px" } }}
            />
          )}
          {isNew && !hasDiscount && (
            <Chip
              label="NEW"
              size="small"
              sx={{ fontWeight: "bold", background: "linear-gradient(90deg,#22223B,#4A4E69)", color: "#F2E9E4", fontSize: { xs: "10px", sm: "13px" } }}
            />
          )}
        </Box>

        {/* Favorite Icon */}
        <AnimatedIconButton
          onClick={handleToggleLike}
          sx={{ padding: { xs: 1, sm: 2 } }}
        >
          {isLiked ? (
            <FavoriteIcon sx={{ color: '#F2E9E4', fontSize: { xs: "18px", sm: "20px" } }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#F2E9E4", fontSize: { xs: "18px", sm: "20px" } }} />
          )}
        </AnimatedIconButton>
      </Box>

      {/* Product Image */}
      {/* Note: In production, consider wrapping next/image for better performance */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: { xs: 140, sm: 160, md: 180 },
          width: "100%",
          objectFit: "cover",
          bgcolor: "#f5f5f5",
        }}
      />
      {/* Content */}
      <CardContent sx={{ p: { xs: 1.5, sm: 2 }, pb: { xs: 0.5, sm: 1 } }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          noWrap
          sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" }, fontWeight: 600, color: "#22223B" }}
        >
          {title}
        </Typography>

        {/* Price Section */}
        <Stack direction="row" spacing={0.5} alignItems="center" flexWrap="wrap">
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#22223B", fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}>
            ${displayPrice.toFixed(2)}
          </Typography>

          {hasDiscount && (
            <Typography
              variant="body2"
              color="error"
              sx={{ textDecoration: "line-through", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
            >
              ${price.toFixed(2)}
            </Typography>
          )}
        </Stack>
      </CardContent>

      {/* Footer Actions */}
      <CardActions sx={{ p: { xs: 1, sm: 1.5 }, pt: 0, display: "flex", justifyContent: "space-between", width: "100%", gap: 1 }}>
        <AnimatedButton
          onClick={() => { router.push(href) }}
          sx={{ width: "100%", fontSize: { xs: "12px", sm: "14px" }, paddingY: { xs: "4px", sm: "6px" } }}
        >
          View Product
        </AnimatedButton>
      </CardActions>
    </Card >
  );
};

export default ProductCard;
