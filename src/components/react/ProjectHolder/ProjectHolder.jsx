import "./ProjectHolder_master.css"

const ProjectHolder = ({projectTitle, projectAbb, projectDesc}) => {
    return (
        <>
        <div className="project-holder">
            <h3>{projectTitle}</h3>
            <span>{projectAbb}</span>
            <p>{projectDesc}</p>
            <button>Read More</button>
        </div>
        <hr className="custom-hr projects-hr"/>
        </>
    )
}

export default ProjectHolder