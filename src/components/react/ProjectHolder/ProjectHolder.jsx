import "./ProjectHolder_master.css"

const ProjectHolder = ({projectTitle, projectAbb, projectDesc, projectDetails}) => {
    return (
        <>
        <div className="project-holder">
            <h3>{projectTitle}</h3>
            <span>{projectAbb}</span>
            <p>{projectDesc}</p>
            <div>
                {projectDetails["youtube"] !== null && 
                <a className="button-youtube" href={projectDetails["youtube"]}> Watch live demo</a>
                }

                {projectDetails["github"] !== null &&
                <a className="button-github" href={projectDetails["github"]}> Source code</a>
                }
            </div>
        </div>
        <hr className="custom-hr projects-hr"/>
        </>
    )
}

export default ProjectHolder