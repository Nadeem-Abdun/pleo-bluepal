import React from 'react'
import { Typography, Box, InputBase, Stack, Chip, styled, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import IosShareIcon from '@mui/icons-material/IosShare';
import SortIcon from '@mui/icons-material/Sort';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function AppsBar() {
  const SearchBar = styled('div')({
    color: '#f0f6f6',
    borderRadius: 8,
    width: '15%',
    height: '75%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })

  return (
    <>
      <Box minHeight='15%' mt={2}>
        <Box height='10%' display='flex' justifyContent='flex-start' alignItems='flex-end' mx={2} mt={1}>
          <Typography component='h1' fontSize='26px' >Expenses</Typography>
        </Box>
        <Stack height='5%' mb={2} direction='row' justifyContent='space-between' alignItems='center' mx={2}>
          <Typography component='h6' variant='body2'>Wallet balance <b> 71.180,00 kr</b></Typography>
          <SearchBar><SearchIcon sx={{ color: '#727485' }} fontSize='small' /><InputBase placeholder='Search in activity' fullWidth /></SearchBar>
          <Chip icon={<IosShareIcon fontSize='small' />} size='medium' label="Export" sx={{ bgcolor: '#e1e1e6' }} clickable />
          <Stack direction='row' spacing={0.5}>
            <Typography component='body1' fontSize='13px' m='auto' textAlign='start'>Filter</Typography>
            <IconButton aria-label="sort" sx={{ bgcolor: '#e1e1e6' }}>
              <SortIcon fontSize='small' />
            </IconButton>
            <IconButton aria-label="help" sx={{ bgcolor: '#e1e1e6' }}>
              <HelpCenterIcon fontSize='small' />
            </IconButton>
            <IconButton aria-label="account" sx={{ bgcolor: '#e1e1e6' }}>
              <AccountCircleOutlinedIcon fontSize='small' />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}
