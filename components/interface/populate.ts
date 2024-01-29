import type {ProgrammingStackEnum, ProjectsDevices} from "./pages.ts";

export interface ProjectsDataInterface {
  key: number;
  logo: string;
  title: string;
  devices: {device: ProjectsDevices, id: number}[];
  subHeader: string;
  stack: {language: ProgrammingStackEnum, key: number}[]
}