import {Box, Stack, Typography} from '@mui/material';
import type {ReactNode} from "react";
import type {Parameters} from '@components/interface'

export function Projects({upMd}: Parameters): ReactNode {
  return (
    <Stack
      direction={upMd ? 'row' : 'column'}
      id='projects'
      sx={{backgroundColor: 'white', justifyContent: 'center', minHeight: '100vh'}}>
      <Box px={2} sx={{display: 'flex', justifyContent: 'center', width: '250px'}}>
        <Typography sx={{color: 'black', fontSize: '3.75rem'}} variant='h2'>Projects.</Typography>
      </Box>
    </Stack>
  )
}