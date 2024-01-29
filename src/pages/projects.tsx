import {Box, Button, Link, Stack, Typography} from '@mui/material';
import type {ReactNode} from "react";
import type {Parameters} from '@components/interface'
import {ProgrammingStack, ProjectsData} from "@components/populate";

export function Projects({upMd}: Parameters): ReactNode {
  return (
    <Stack
      direction={upMd ? 'row' : 'column'}
      gap={8}
      id='projects' px={3} py={8}
      sx={{justifyContent: 'flex-start', minHeight: '100vh'}}>
      <Box px={2} sx={{display: 'flex', justifyContent: 'center', width: '250px'}}>
        <Typography sx={{fontSize: '3.75rem'}} variant='h2'>Projects.</Typography>
      </Box>
      <Stack gap={3} sx={{width: '100%'}}>
        {ProjectsData.map(({key, logo, devices, subHeader, stack, title}) => (
          <Stack direction='row' key={key} p={2} sx={{
            alignItems: 'center', backgroundColor: 'white',
            borderRadius: '4px', height: '157px'
          }}>
            <img alt={title} src={logo} style={{height: "125px", width: "125px"}}/>
            <Stack gap={1} sx={{justifyContent: 'center'}}>
              <Typography variant='h3'>{title}</Typography>
              <Typography>{subHeader}</Typography>
              <Stack direction='row' gap={1}>
                {devices.map(({device, id}) => (
                  <Box key={id} px={1} sx={{backgroundColor: '#01579b', borderRadius: '4px'}}>
                    <Typography sx={{color: 'white', fontSize: '12px'}}>
                      {device}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
            <Stack direction='row' gap={9} sx={{
              width: '100%',
              /* animation properties */
              mozTransform: 'translateX(100%)',
              webkitTransform: 'translateX(100%)',
              transform: 'translateX(100%)',
              mozAnimation: "my-animation 15s linear infinite",
              webkitAnimation: 'my-animation 15s linear infinite',
              animation: 'my-animation 15s linear infinite',
            }}>
              {stack.map((item) => {
                const stackDetails = ProgrammingStack[item.language]
                return (
                  <Link href={stackDetails.link} key={item.key}>
                    <img
                      alt={`${item.language} logo`}
                      src={stackDetails.image}
                      style={{height: '50px'}}
                    />
                  </Link>
                )
              })}
            </Stack>
            <Button color="success" variant="contained">
              <Typography>Open</Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}