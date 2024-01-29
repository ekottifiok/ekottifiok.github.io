import {Box, Link, Stack, Typography} from '@mui/material'
import type {ReactNode} from "react";
import {ContactData} from "@components/populate";
import type {Parameters} from '@components/interface'

export function Contacts({upMd}: Parameters): ReactNode {
  return (
    <Stack id='contact' px={upMd ? 0: 2} sx={{height: '85vh', justifyContent: 'center'}}>
      <Stack direction={upMd ? 'row' : 'column'} gap={8} pl={upMd ? 4 : 0} py={8} sx={{color: 'white'}}>
        <Box px={2} sx={{display: 'flex', justifyContent: 'center', width: '250px'}}>
          <Typography sx={{fontSize: '3.75rem'}} variant='h2'>Contacts.</Typography>
        </Box>
        <Stack gap={1}>
          {ContactData.map((item) => (
            <Stack direction='row' gap={3} key={item.key} sx={{alignItems: 'center'}}>
              {item.icon}
              <Link href={item.link} rel="noopener noreferrer" target="_blank" underline='none'>
                <Typography sx={{color: 'white', fontSize: '20px', lineHeight: '1.5rem'}}>
                  {item.content}
                </Typography>
              </Link>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}