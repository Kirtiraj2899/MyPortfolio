import "./Skillsty.css";
const Skills = () => {
  return (
    <div className="container">
         <div className="main-box">
         <h2>Skills</h2>
         <div className="skills">
           <div className="left">
            <div className="skill-box">
                    <span className="title">Java</span>

                    <div className="skill-bar">
                        <span className="skill-per java">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>

            <div className="skill-box">
                    <span className="title">HTML</span>

                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">CSS</span>

                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">90%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>

                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">React.js</span>

                    <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
                
           </div>
           <div className="right">
           <div className="skill-box">
                    <span className="title">Python</span>

                    <div className="skill-bar">
                        <span className="skill-per python">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>

            <div className="skill-box">
                    <span className="title">Bootstrap</span>

                    <div className="skill-bar">
                        <span className="skill-per bootstrap">
                            <span className="tooltip">40%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">SQL</span>

                    <div className="skill-bar">
                        <span className="skill-per sql">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">MySQL</span>

                    <div className="skill-bar">
                        <span className="skill-per sql">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">Git</span>

                    <div className="skill-bar">
                        <span className="skill-per git">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
           </div>
         </div>
        </div>
    </div>
  )
}

export default Skills
