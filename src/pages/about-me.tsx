import type {ReactNode} from "react";
import {Box, Stack, Typography} from "@mui/material";
import type {Parameters} from "@components/interface";

export function AboutMe({upMd}: Parameters): ReactNode {
  const aboutMeSpeech = 'I was fascinated by programming when I was at school.' +
    'Together with my computer science teacher, ' +
    'I was allowed to redesign the school website because it was prone to errors at the time. ' +
    'I love developing software and being involved in every step of the process - ' +
    'from conception to active implementation. ' +
    'As the inventor of several open source projects that are actively used, ' +
    'I am happy to contribute to the community and continually expand my knowledge and skills. ' +
    'Many of the software solutions I developed are now in successful use, ' +
    'and I have taken on a leading role in a number of projects.'

  return (
    <Stack id='about'>
      <Stack direction={upMd ? 'row' : 'column'} py={8} sx={{color: 'white'}} >
        <Box px={2} sx={{display: 'flex', justifyContent: 'center', width: '-webkit-fill-available'}}>
          <Typography sx={{fontSize: '3.75rem'}} variant='h2'>About me.</Typography>
        </Box>
        <Stack>
          <Typography sx={{textAlign: 'center'}}>{aboutMeSpeech}</Typography>
        </Stack>
      </Stack>
      <iframe allowFullScreen
              height='650' src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1jSP80qDy9L0LDVYi-xZHh9-Oxbg0tJx3Mz7CqqozSb8&font=Default&lang=en&initial_zoom=2&height=650'
              title='Educational timeline'
              width='100%'/>
    </Stack>

  )
}