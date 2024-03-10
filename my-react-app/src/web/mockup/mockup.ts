import { ProjectProps } from "../Home/hook";

export const ucTestData = () => {
  //Home
  const projects: ProjectProps[] = [
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/350",
    },
  ];

  const projectsInProgres: ProjectProps[] = [
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/500",
    },
    {
      url: "/SinRutas",
      img: "https://via.placeholder.com/500",
    },
  ];
  //footer
  const social = [
    {
      name: "GitHub",
      url: "",
    },
    {
      name: "LinkedIn",
      url: "",
    },
    {
      name: "instagram",
      url: "",
    },
  ];
  return { social, projects, projectsInProgres };
};
