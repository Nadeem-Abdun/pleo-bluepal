import { Box, Divider, Stack, Typography } from '@mui/material'
import AppsBar from './Components/AppsBar';
import SideBar from './Components/SideBar';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Box display='block' my='auto' maxWidth='100vw'>
        <Box sx={{ display: { xs: 'none', md: 'block' } }} minWidth='18vw'>
          <Stack direction='row' bgcolor='#ffffff' >
            <Box flex={2} px={0}>
              <SideBar />
            </Box>
            <Box flex={10} px={0} bgcolor='#f0f6f6' minWidth='82vw' justifyContent='center' alignItems='center'>
              <Stack direction='column' maxWidth='90%' mx='auto'>
                <AppsBar />
                <Divider />
                <Content />
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box maxWidth='100vw' sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box display='flex' justifyContent='center' alignItems='center' >
            <Typography component='h2' variant='h2'>🚧⚠️This App is not optimized for mobile view, Please switch to a desktop view.⚠️🚧</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;