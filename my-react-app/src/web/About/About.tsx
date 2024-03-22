import AboutStyles from "./AboutStyles"

export const About = () => {
  const {AboutMeStyle} = AboutStyles()

  return (
    <div>
      <AboutMe AboutMeStyle={AboutMeStyle}/>
      <WorkExperience />
      <PictureMe />
    </div>
  )
}

const AboutMe = ({AboutMeStyle}:{AboutMeStyle: React.CSSProperties}) => {
  return (
    <div style={AboutMeStyle}>
      <div style={{border:"2px solid red"}}>
        <img src={"https://via.placeholder.com/350"} alt="my" />
      </div>
      <div style={{border:"2px solid red"}}>
        <h2>Soy Louis</h2>
        <p>hablo sobre mi, en esta area</p>
      </div>
    </div>
  )
}

const WorkExperience = () => {
  return (
    <div>
      <div>
        Fullstack developer en Novosit
      </div>
      <div>
        Desarrollador Freelancer en upwork
      </div>
      <div>
        Digitador
      </div>
    </div>
  )
}

const PictureMe = () => {
  return (
    <div>
      <img src={"https://via.placeholder.com/600"} alt="my" />
      <img src={"https://via.placeholder.com/300"} alt="my" />
    </div>
  )
}
