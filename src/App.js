import { Box, Divider, Stack } from '@mui/material'
import AppsBar from './Components/AppsBar';
import SideBar from './Components/SideBar';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Box display='block' maxWidth='100vw' minHeight='100vh'>
        <Box sx={{ display: { xs: 'none', md: 'block' } }} minWidth='18%' minHeight='100%' >
          <Stack direction='row' bgcolor='#ffffff' minHeight='100%'  >
            <Box flex={2} px={0}>
              <SideBar />
            </Box>
            <Box flex={10} px={0} bgcolor='#f0f6f6' minWidth='82%' minHeight='100%' justifyContent='center' alignItems='center'>
              <Stack direction='column' maxWidth='90%' mx='auto' minHeight='100%' >
                <AppsBar />
                <Divider />
                <Content />
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box height='768px' width='1366px' sx={{ display: { xs: 'block', lg: 'none' } }}>
          <Stack direction='row' bgcolor='#ffffff' minHeight='100%'  >
            <Box flex={2} px={0}>
              <SideBar />
            </Box>
            <Box flex={10} px={0} bgcolor='#f0f6f6' minWidth='82%' minHeight='100%' justifyContent='center' alignItems='center'>
              <Stack direction='column' maxWidth='90%' mx='auto' minHeight='100%' >
                <AppsBar />
                <Divider />
                <Content />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default App;