import React from 'react'
import { Avatar, Box, Card, Stack, Typography, Chip, Checkbox, Divider } from '@mui/material'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import styled from '@emotion/styled';

export default function Cards(props) {
    const { avatLink, expTitle, descName, chip1, chip2, chip1ico, chip2ico, chip1col, chip2col, price1, price2, price3, pricecol, checkBtn } = props
    const StyledCard = styled(Card)({
        minHeight: '15%',
    })
    return (
        <>
            <StyledCard variant="outlined">
                <Stack direction='row' my={0.5} alignItems='center'>
                    <Box ml={4} flex={1}>
                        <Avatar alt="Amazon" src={avatLink} sx={{ height: '60px', width: '60px' }} />
                    </Box>
                    <Box flex={6.5}>
                        <Stack direction='column' spacing={1} display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h5' fontSize='18px'>{expTitle}</Typography>
                            <Stack direction='row' spacing={3} justifyContent='flex-start' alignItems='center'>
                                <Typography component='h5' fontSize='13px' display='flex' justifyContent='flex-start' alignItems='center' >
                                    <Person2OutlinedIcon fontSize='small' />{descName}
                                </Typography>
                                <Typography component='h5' fontSize='13px' display='flex' justifyContent='flex-start' alignItems='center' >
                                    <CalendarMonthOutlinedIcon fontSize='small' />13 Aug 2016
                                </Typography>
                                <Typography component='h5' fontSize='13px' display='flex' justifyContent='flex-start' alignItems='center' >
                                    <QueryBuilderOutlinedIcon fontSize='small' />21 hours
                                </Typography>
                            </Stack>
                            <Box>{/* Empty Box */}</Box>
                            <Stack direction='row' spacing={3}>
                                <Chip size='small' variant='outlined' color={chip1col} icon={chip1ico} label={chip1} clickable />
                                <Chip size='small' variant='outlined' color={chip2col} icon={chip2ico} label={chip2} clickable />
                            </Stack>
                        </Stack>
                    </Box>
                    <Box flex={3}>
                        <Stack direction='column' spacing={0.5}>
                            <Typography component='h5' variant='body1' color={pricecol} fontWeight={0} >{price1}</Typography>
                            <Typography component='h5' variant='h6' color={pricecol}>{price2}</Typography>
                            <Typography component='h5' variant='body2'>{price3}</Typography>
                        </Stack>
                    </Box>
                    <Divider orientation='vertical' flexItem={true} />
                    <Box flex={1.5} height='107px' display='flex' justifyContent='center' alignItems='center'>
                        <Checkbox icon={checkBtn} checkedIcon={<TurnedInIcon />} aria-label="noted" />
                    </Box>
                </Stack>
            </StyledCard>
        </>
    )
}
