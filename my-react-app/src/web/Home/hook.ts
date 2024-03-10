import { ucTestData } from "../mockup/mockup";

export type ProjectProps = {
  url: string;
  img: any;
};

export type ProjectDisplayProps = {
  projects: ProjectProps[];
};

export const ucHome = () => {
  const { projects, projectsInProgres } = ucTestData();

  return { projects, projectsInProgres };
};
