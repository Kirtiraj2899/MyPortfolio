import "./Projectsty.css";

const Projects = () => {
    return (
      <section className="projects">
        <h2 className="title">Projects</h2>
        <div className="project-list">
         
            <div className="card">
             <img src="../img/Dairyimg.jpeg" alt="Dairy Image" />
              <div className="card__content">
                <p className="card__title">Dairy Distribution Management System:</p>
                <p className="card__description">Developed a comprehensive online platform using Angular for the frontend and Firebase for the backend to automate and optimize the dairy distribution process. Key features include user registration and login, order and product management, real-time stock monitoring, data analytics for informed decision-making, automated invoicing and payments, and reporting functionalities. Integrated security measures for data protection and designed a scalable, user-friendly interface to support future business growth. The system enhanced operational efficiency, reduced wastage, and contributed to environmental sustainability.</p>
              </div>
            </div>

            <div className="card">
             <img src="../img/examimg.avif" alt="Dairy Image" />
              <div className="card__content">
                <p className="card__title">Online Examination Portal :</p>
                <p className="card__description">Developed a robust online examination portal to streamline and optimize the testing process. Built with HTML, CSS, JavaScript on the frontend and JAVA, SQL on the backend, the platform offers features like secure user registration and login, exam scheduling, question management, real-time monitoring, and automated grading. It includes data analytics for performance tracking and report generation, enabling educators to make data-driven decisions. Integrated security measures to ensure data integrity and privacy, while designing a user-friendly, scalable interface that supports a seamless examination experience. The system increased operational efficiency, minimized manual errors, and provided a reliable solution for online assessments.</p>
              </div>
            </div>

            <div className="card">
             <img src="../img/CarRentalimg.jpeg" alt="Dairy Image" />
              <div className="card__content">
                <p className="card__title">Online Car Rental System :</p>
                <p className="card__description">Developed an efficient online car rental system designed to streamline booking and management processes. Built with HTML, CSS, JavaScript for the frontend and SQL for the backend, the platform enables secure user registration, real-time vehicle availability tracking, and reservation management. Key features include automated invoicing, payment processing, GPS-enabled vehicle tracking, and comprehensive reporting to assist in fleet management and data-driven decision-making. The system incorporates robust security for data protection and a scalable, user-friendly interface to support future business expansion. This solution improved operational efficiency, reduced administrative workload, and enhanced user experience in the car rental process.</p>
              </div>
            </div>
          
        </div>
      </section>
    );
  };
  
  export default Projects;
  