import React, { useState } from 'react'
import { Box, Avatar, Typography, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SortIcon from '@mui/icons-material/Sort';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PleoLogo from './PleoLogo.jpg'

export default function SideBar() {
    const StyledTab = styled(Tab)({
        minHeight: '10px',
        justifyContent: "flex-start",
        textTransform: 'capitalize'
    })
    const [value, setValue] = useState('2')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box height='100vh' px={1} zIndex={1}>
            {/* Dashboard Title */}
            <Box height='13vh' display='flex' justifyContent='center' alignItems='center'>
                <Box mt={3} component="img" height='120px' alt="Foodie Logo" src={PleoLogo} />
            </Box>
            {/* Dashboard Avatar */}
            <Box height='20vh' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" variant='circular' sx={{ height: '60px', width: '60px' }} />
                <Typography component='h2' variant='h6' my={0.1}>Astria</Typography>
            </Box>
            {/* Dashboard Tab List */}
            <Box height='65vh'>
                <TabContext value={value} >
                    <TabList orientation="vertical" aria-label="Vertical tabs list" onChange={handleChange} textColor='secondary' indicatorColor='secondary'>
                        <StyledTab label="My Cards" icon={<CreditCardIcon />} iconPosition='start' value={'1'} />
                        <StyledTab label="Expenses" icon={<ElectricBoltIcon />} iconPosition='start' value={'2'} />
                        <StyledTab label="Wallet" icon={<AccountBalanceWalletIcon />} iconPosition='start' value={'3'} />
                        <StyledTab label="Manage Team" icon={<GroupsOutlinedIcon />} iconPosition='start' value={'4'} />
                        <StyledTab label="Manage Cards" icon={<CreditScoreIcon />} iconPosition='start' value={'5'} />
                        <StyledTab label="Company Profile" icon={<LocationCityIcon />} iconPosition='start' value={'6'} />
                        <StyledTab label="Manage Categories" icon={<SortIcon />} iconPosition='start' value={'7'} />
                        <StyledTab label="My Profile" icon={<AccountCircleOutlinedIcon />} iconPosition='start' value={'8'} />
                    </TabList>
                    <TabPanel value={'2'}></TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
