import {Box, IconButton, Stack} from "@mui/material";
import type {ReactNode} from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import {useResponsive} from "@components/hooks";
import {AboutMe, Intro, Footer, Portfolio, Contacts, Projects} from "./pages";

export function App(): ReactNode {
  const upMd = useResponsive('up', 'md')
  return (
    <Box sx={{backgroundColor: 'rgb(8, 103, 136)'}}>
      <Stack p={1} sx={{flexDirection: 'row-reverse', zIndex: 1, height: '10vh'}}>
        <IconButton>
          <ReplayIcon fontSize='large' sx={{color: 'white'}}/>
        </IconButton>
      </Stack>
      <Intro upMd={upMd}/>
      <AboutMe upMd={upMd}/>
      <Portfolio upMd={upMd}/>
      <Projects upMd={upMd}/>
      <Contacts upMd={upMd}/>
      <Footer/>
    </Box>
  )
}