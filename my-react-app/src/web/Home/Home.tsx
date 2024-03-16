import { useNavigate } from "react-router-dom";
import { ucHomeStyles, ucProjectDisplayStyles } from "./HomeStyles";
import { ucScrollHover } from "../../designs/hook";
import { ProjectDisplayProps, ucHome } from "./hook";

export const Work = () => {
  const { divStyles, h1Styles, h2Styles, pStyles, divContainer } =
    ucHomeStyles();
  const { projects, projectsInProgres } = ucHome();

  return (
    <div style={divContainer}>
      <div style={divStyles}>
        <h1 style={h1Styles}>
          <span>¡Hola!, Soy Louis</span>
          <span>Ingeniero en sistemas</span>
        </h1>
        <h2 style={h2Styles}>{`<Bienvenido a WakaCode/>`}</h2>
        <p style={pStyles}>
          WakaCode, donde los sueños se convierten en código y la imaginación es
          la brújula que nos guía hacia lo inexplorado.
        </p>
        <ProjectDisplay projects={projects} />
      </div>
      {/* Sección en progreso */}
      <div style={divStyles}>
        <h2 style={h2Styles}>En Progreso</h2>
        <p style={pStyles}>
          Lista de proyectos en curso. Conoce los proyectos que estamos
          desarrollando.
        </p>
        <ProjectDisplay projects={projectsInProgres} />
      </div>
    </div>
  );
};

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects }) => {
  const navigate = useNavigate();

  const { divStyles, projectGrid } = ucProjectDisplayStyles();
  const { hoverCards } = ucScrollHover({
    ulScroolYStyle: undefined,
    ulStyle: undefined,
    fadeUp: "fade-up",
    fadeDown: "fade-down",
  });

  return (
    <div style={divStyles} data-aos={hoverCards} data-aos-duration="1000">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={() => navigate(project.url)}
          style={projectGrid}
          className="Cards"
        >
          <img src={project.img} alt="proyecto" />
          <button className="Button" onClickCapture={() => alert("hola")}>
            Ver más
          </button>
          <p className="Description">Description</p>
        </div>
      ))}
    </div>
  );
};
