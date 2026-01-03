'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link'; // Import NextLink for client-side navigation
import Typography from '@mui/material/Typography';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'; // Rename to avoid conflict
import MuiLink from '@mui/material/Link'; // Rename to avoid conflict
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/material';

// Custom Link Component to use Next.js routing with MUI styling
const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink component={NextLink} ref={ref} {...props} />;
});

export default function Breadcrumbs() {
  const pathname = usePathname();
  // Get all path segments, filtering out empty strings (like from the starting '/')
  const pathSegments = pathname.split('/').filter(segment => segment);

  // 🛑 Condition to hide on the home page (where pathSegments is empty)
  if (pathSegments.length === 0) {
    return null;
  }

  // Generate Breadcrumbs
  let currentPath = '';
  const breadcrumbs = pathSegments.map((segment) => {
    currentPath += `/${segment}`;

    // Simple path formatting (e.g., "material-ui" -> "Material Ui")
    const label = segment.replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    return {
      href: currentPath,
      label: label,
    };
  });

  return (
    // Style the container to appear under the Navbar
    <Box sx={{ padding: '16px 24px', backgroundColor: '#F2E9E4', borderBottom: '1px solid #e0e0e0' }}>
      <MuiBreadcrumbs aria-label="breadcrumb">

        {/* Home Link: Always the first breadcrumb */}
        <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>

        {/* Dynamic Links */}
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          if (isLast) {
            // Last item is the current page, render as text/Typography
            return (
              <Typography
                key={crumb.href}
                sx={{
                  color: 'text.primary',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {crumb.label}
              </Typography>
            );
          }

          // Other items are links
          return (
            <Link
              key={crumb.href}
              underline="hover"
              color="inherit"
              href={crumb.href}
            >
              {crumb.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}
