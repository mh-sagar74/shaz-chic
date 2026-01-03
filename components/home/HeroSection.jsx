"use client";

import { useState, useEffect } from "react";
import { Box, Container, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HERO_IMAGES } from "@/app/utils/constants";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [HERO_IMAGES.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "#F2E9E4",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" disableGutters={isMobile}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
            borderRadius: { xs: 0, md: "12px" },
            overflow: "hidden",
            my: { xs: 0, md: 3 },
          }}
        >
          {/* Slides Container */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {HERO_IMAGES.map((slide, index) => (
              <Box
                key={slide.id}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: currentSlide === index ? 1 : 0,
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  transition: "all 0.6s ease-in-out",
                  bgcolor: slide.bgcolor,
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={slide.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Gradient overlay for better readability */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Previous Button */}
          <IconButton
            onClick={goToPrevious}
            sx={{
              position: "absolute",
              left: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              color: "#22223B",
              width: { xs: 36, md: 48 },
              height: { xs: 36, md: 48 },
              zIndex: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={goToNext}
            sx={{
              position: "absolute",
              right: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              color: "#22223B",
              width: { xs: 36, md: 48 },
              height: { xs: 36, md: 48 },
              zIndex: 2,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 1)",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
          </IconButton>

          {/* Dots Navigation */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 12, md: 20 },
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: { xs: 1, md: 1.5 },
              zIndex: 2,
            }}
          >
            {HERO_IMAGES.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToSlide(index)}
                sx={{
                  width: { xs: 8, md: 10 },
                  height: { xs: 8, md: 10 },
                  borderRadius: "50%",
                  bgcolor:
                    currentSlide === index
                      ? "#F2E9E4"
                      : "rgba(242, 233, 228, 0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: currentSlide === index ? "2px solid #C9ADA7" : "none",
                  transform: currentSlide === index ? "scale(1.2)" : "scale(1)",
                  "&:hover": {
                    bgcolor: "#F2E9E4",
                    transform: "scale(1.2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
