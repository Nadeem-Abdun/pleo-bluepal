import React from 'react'
import { Typography, Box, InputBase, Stack, Chip, styled, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import IosShareIcon from '@mui/icons-material/IosShare';
import SortIcon from '@mui/icons-material/Sort';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function AppsBar() {
  const SearchBar = styled('div')({
    backgroundColor: 'white',
    borderRadius: 8,
    width: '15%',
    height: '75%',
    display: 'flex',
    justifyContent: 'space-between',
  })

  return (
    <>
      <Box height='10vh' display='flex' justifyContent='flex-start' alignItems='flex-end' mx={2}>
        <Typography component='h1' variant='h4' >Expenses</Typography>
      </Box>
      <Stack height='5vh' mb={2} direction='row' justifyContent='space-between' alignItems='center' mx={2}>
        <Typography component='h6' variant='body2'>Wallet balance <b> 71.180,00 kr</b></Typography>
        <SearchBar><SearchIcon /><InputBase placeholder='Search in activity' fullWidth /></SearchBar>
        <Chip icon={<IosShareIcon />} label="Export" />
        <Stack direction='row'>
          <Typography component='body1' variant='body2' m='auto' textAlign='start'>Filter</Typography>
          <IconButton aria-label="sort">
            <SortIcon />
          </IconButton>
          <IconButton aria-label="help">
            <HelpCenterIcon />
          </IconButton>
          <IconButton aria-label="account">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  )
}
