import {Box, Stack, Typography} from "@mui/material";
import type {ReactNode} from "react";
import type {Parameters} from "@components/interface";

export function Portfolio({upMd}: Parameters): ReactNode {
return (
    <Stack
      direction={upMd ? 'row' : 'column'}
      id='portfolio'
      sx={{justifyContent: 'center', minHeight: '100vh'}}>
      <Box px={2} sx={{display: 'flex', justifyContent: 'center', width: '250px'}}>
        <Typography sx={{fontSize: '3.75rem'}} variant='h2'>
          Portfolio.
        </Typography>
      </Box>
    </Stack>
  )
}