import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import type {ProjectsDataInterface} from "@components/interface";
import {ProgrammingStackEnum, ProjectsDevices} from "@components/interface";


export const whatIDo = [
  'Application Developer',
  'Software Developer',
  'Hardware Engineer',
  'Full Stack Developer',
  'Coding Instructor'
];

export const IntroButtons = [
  {key: 1, icon: <PersonOutlinedIcon/>, content: 'About Me', link: '#about'},
  {key: 2, icon: <WorkOutlineIcon/>, content: 'Portfolio', link: '#portfolio'},
  {key: 3, icon: <EmojiFlagsIcon/>, content: 'Projects', link: '#projects'},
  {key: 4, icon: <MailOutlinedIcon/>, content: 'Contacts', link: '#contacts'},
]

export const ContactData = [
  {key: 1, icon: <EmailIcon fontSize='large'/>, content: 'ekottifiok@gmail.com', link: 'mailto:ekottifiok@gmail.com'},
  {key: 2, icon: <LinkedInIcon fontSize='large'/>, content: 'ekottifiok', link: 'https://www.linkedin.com/in/ekottifiok/'},
  {key: 3, icon: <GitHubIcon fontSize='large'/>, content: 'ekottifiok', link:  'https://github.com/ekottifiok'},
  {key: 4, icon: <XIcon fontSize='large'/>, content: 'Ifiok Ekott', link: 'https://twitter.com/IfiokEkott'},
]

const allDevices = [
  {device: ProjectsDevices.Android, id: 1},
  {device: ProjectsDevices.Ios, id: 2},
  {device: ProjectsDevices.Linux, id: 3},
  {device: ProjectsDevices.MacOS, id: 4},
  {device: ProjectsDevices.Windows, id: 5}
]

export const ProgrammingStack: Record<ProgrammingStackEnum, { image: string, link: string }> = {
  [ProgrammingStackEnum.CSharp]: {image: 'language_logo/csharp.svg', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'},
  [ProgrammingStackEnum.Dart]: {image: 'language_logo/dart.png', link: 'https://dart.dev'},
  [ProgrammingStackEnum.Flutter]: {image: 'language_logo/flutter.png', link: 'https://flutter.dev'},
};

export const ProjectsData: ProjectsDataInterface[] = [
  {
    key: 1,
    logo: 'projects_logo/localsend.png',
    title: 'LocalSend',
    devices: allDevices,
    subHeader: "Sending files over WiFi",
    stack: [
      {language: ProgrammingStackEnum.Dart, key: 1},
      {language: ProgrammingStackEnum.Flutter, key: 2}
    ]
  },
  {
    key: 2,
    logo: 'projects_logo/bunny_communication.png',
    title: 'Bunny Communication',
    devices: [{device: ProjectsDevices.Windows, id: 1}],
    subHeader: "A WhatsApp clone for LAN communication",
    stack: [
      {language: ProgrammingStackEnum.CSharp, key: 1},
    ]
  }
]