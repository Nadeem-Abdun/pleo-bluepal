import React from 'react'
import Cards from './Cards'
import { Stack } from '@mui/material'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Content() {
  return (
    <>
      <Stack spacing={1} mx={2} my={1}>
        <Cards avatLink='https://material-ui.com/static/images/avatar/4.jpg' expTitle='Amazon' descName='Niccolo Perra' chip1='Select a Category' chip2='Add note' chip1ico={<FormatListBulletedOutlinedIcon />} chip2ico={<NoteAltIcon />} chip1col='default' chip2col='primary' price1='Refunded' price2='200 $' price3='300,00 kr' pricecol='green' checkBtn={<BookmarkIcon/>} />

        <Cards avatLink='https://material-ui.com/static/images/avatar/6.jpg' expTitle='Starbucks' descName='Lily Dawson' chip1='Meals and drinks' chip2='Note added' chip1ico={<FastfoodIcon />} chip2ico={<CheckBoxOutlinedIcon />} chip1col='success' chip2col='default' price1='' price2='150 $' price3='Pending' pricecol='default' checkBtn={<BookmarkBorderIcon/>} />

        <Cards avatLink='https://material-ui.com/static/images/avatar/2.jpg' expTitle='PVR Cinemas' descName='Stacy Armijo' chip1='Entertainment' chip2='Note added' chip1ico={<VideocamIcon />} chip2ico={<CheckBoxOutlinedIcon />} chip1col='secondary' chip2col='default' price1='' price2='280 $' price3='Pending' pricecol='default' checkBtn={<BookmarkBorderIcon/>} />

        <Cards avatLink='https://material-ui.com/static/images/avatar/5.jpg' expTitle='Overheats PS3 Gamezone' descName='Dominique' chip1='Entertainment' chip2='Add note' chip1ico={<VideocamIcon />} chip2ico={<NoteAltIcon />} chip1col='secondary' chip2col='primary' price1='' price2='150 $' price3='120,00 kr' pricecol='default' checkBtn={<BookmarkBorderIcon/>} />
      </Stack>
    </>
  )
}
