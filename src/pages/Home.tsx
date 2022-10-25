import React, { useState, useEffect } from 'react';

// @mui material components
import { useMediaQuery, Stack, Box, Typography, useTheme, Divider, Button } from '@mui/material';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

// Contexts
import { usePaletteModeContext } from '../theme/MuiThemeProvider';
// data
import { globalSiteData } from '../hardData/globalSiteData';
import { HomeLayout } from './HomeLayout';
export interface Props {}
export const Home: React.FC<Props> = ({}) => {
  const descSX = {
    textAlign: 'center',
  };

  return (
    <HomeLayout illustration={globalSiteData.mainImg}>
      <Box>
        <Box mb={1} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            {globalSiteData.fullName}
          </Typography>
        </Box>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6">{'Debut Release'}</Typography>
          <img style={{ width: '100%' }} src={'img/mainPuxTiny.jpg'}></img>
        </Stack>

        <Box>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Typography sx={descSX}>{globalSiteData.description['main']}</Typography>
            <Typography sx={descSX}>{globalSiteData.description['fact']}</Typography>
            <Typography sx={descSX}>{globalSiteData.description['style']}</Typography>
          </Stack>
        </Box>
      </Box>

      <Stack direction="column" justifyContent="flex-start" alignItems="stretch" sx={{ mt: 2 }}>
        <Button
          variant="contained"
          href="https://www.youtube.com/channel/UCL56S5Lxy0iysHngLWSFA6g"
          target={'blank'}
        >
          Phil Puxley Music - YouTube Channel
        </Button>
      </Stack>

      <Divider sx={{ my: 4 }} />
      <ImageGallery items={globalSiteData.images} />
      <Divider sx={{ my: 4 }} />

      <Box>
        <Box mb={4} textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            {globalSiteData.careerHighlights.title}
          </Typography>
        </Box>
        <Box>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
            {globalSiteData.careerHighlights.items.map((item) => {
              return <Typography sx={descSX}>{item.name}</Typography>;
            })}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />
      <Box>
        <Box mb={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {globalSiteData.sectionA.title}
          </Typography>
        </Box>
        <Box>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
            {globalSiteData.sectionA.items.map((item) => {
              return <Typography sx={descSX}>{item.name}</Typography>;
            })}
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />
      <Box>
        <Box mb={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {globalSiteData.sectionB.title}
          </Typography>
        </Box>
        <Box>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
            {globalSiteData.sectionB.items.map((item) => {
              return <Typography sx={descSX}>{item.name}</Typography>;
            })}
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />

      <Divider sx={{ my: 4 }} />
      <Box>
        <Box mb={1} textAlign="center">
          <Typography variant="subtitle2">{globalSiteData.contact.title}</Typography>
        </Box>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch">
          <Typography variant="caption" sx={descSX}>
            {globalSiteData.contact.mail}
          </Typography>
          <Typography variant="caption" sx={descSX}>
            {globalSiteData.contact.copyright + new Date().getFullYear()}
          </Typography>
        </Stack>
      </Box>
      <Divider sx={{ my: 4 }} />
    </HomeLayout>
  );
};
