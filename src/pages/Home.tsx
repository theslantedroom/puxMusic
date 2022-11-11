import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

// @mui material components
import {
  Stack,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

// Contexts
import { usePaletteModeContext } from '../theme/MuiThemeProvider';
// data
import { globalSiteData } from '../hardData/globalSiteData';
import { HomeLayout } from './HomeLayout';
import { colors } from '../theme/palettes/colors';
export interface Props {}
export const Home: React.FC<Props> = ({}) => {
  const { togglePaletteMode } = usePaletteModeContext();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  const descSX = {
    textAlign: 'center',
  };

  return (
    <HomeLayout illustration={globalSiteData.mainImg}>
      <Box>
        <Typography
          onClick={togglePaletteMode}
          sx={{ cursor: 'pointer' }}
          variant="h4"
          textAlign="center"
          fontWeight="bold"
        >
          {globalSiteData.fullName}
        </Typography>

        <Typography variant="h6" sx={{ my: 1 }} textAlign="center">
          {'Debut Release'}
        </Typography>
        <Box sx={{ my: 2 }}>
          <img style={{ width: '100%' }} src={'img/mainPuxTiny.jpg'} />
        </Box>

        <Box>
          <Stack justifyContent="center" alignItems="center" spacing={2}>
            <Typography sx={descSX}>{globalSiteData.description['main']}</Typography>
            <Typography sx={descSX}>{globalSiteData.description['fact']}</Typography>
            <Typography sx={descSX}>{globalSiteData.description['style']}</Typography>
          </Stack>
        </Box>
      </Box>
      {isLg ? null : (
        <Box sx={{ width: '100%', pt: 2 }}>
          <LiteYouTubeEmbed id="56feCXQrFYA" title="Pux" />
        </Box>
      )}
      <Button
        fullWidth
        variant="contained"
        href="https://www.youtube.com/channel/UCL56S5Lxy0iysHngLWSFA6g"
        target={'blank'}
        sx={{ my: 2 }}
        startIcon={<YouTubeIcon sx={{ fill: 'red', mx: 1, transform: 'scale(1.8)' }} />}
      >
        Phil Puxley Music
      </Button>

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
              return (
                <Typography key={item.name} sx={descSX}>
                  {item.name}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      {/* Section A */}
      <Box>
        <Box mb={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {globalSiteData.sectionA.title}
          </Typography>

          <Typography variant="caption">{globalSiteData.sectionA.genre}</Typography>
        </Box>
        <Box>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
            {globalSiteData.sectionA.items.map((item) => {
              return (
                <Typography key={item.name} sx={descSX}>
                  {item.name}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      {/* Section B */}
      {/* <Box>
        <Box mb={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {globalSiteData.sectionB.title}
          </Typography>
          <Typography variant="caption">{globalSiteData.sectionB.genre}</Typography>
        </Box>
        <Box>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
            {globalSiteData.sectionB.items.map((item) => {
              return (
                <Typography key={item.name} sx={descSX}>
                  {item.name}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Box> */}
      {/* <Divider sx={{ my: 4 }} /> */}
      <Box>
        <Box mb={1} textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            {globalSiteData.contact.title}
          </Typography>
        </Box>
        <Stack direction="column" justifyContent="flex-start" alignItems="stretch">
          <Typography variant="body2" sx={descSX}>
            {globalSiteData.contact.mail}
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="stretch">
            <IconButton>
              <FacebookIcon sx={{ fill: colors.facebook }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ fill: colors.facebook }} />
            </IconButton>
          </Stack>
          <Typography variant="caption" sx={{ ...descSX, paddingBottom: 5 }}>
            {globalSiteData.contact.copyright + new Date().getFullYear()}
          </Typography>
        </Stack>
      </Box>
    </HomeLayout>
  );
};
