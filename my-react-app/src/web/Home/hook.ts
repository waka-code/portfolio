type ProjectProps = {
  url: string;
  img: any;
};

export type ProjectDisplayProps = {
  projects: ProjectProps[];
};

export const ucHome = () => {
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
  return { projects, projectsInProgres };
};
