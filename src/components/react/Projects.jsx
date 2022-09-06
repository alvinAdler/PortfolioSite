import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import "./Projects_master.css"

import Pagination from "./Pagination/Pagination"
import ProjectHolder from "./ProjectHolder/ProjectHolder"

import usePagination from '../../utilities/hooks/usePagination'
import projectsData from '../../utilities/projectsData'

const Projects = () => {

	const [projects, setProjects] = useState(projectsData)

	const projectsPaginator = usePagination(projects, 5)

	const handleOnChange = (token) => {
		console.log("Everything is ready")
	}

	return (
		<div className="projects-list">
			{projectsPaginator.paginatedItems.map((project, index) => (
				<ProjectHolder
				key={index}
				projectAbb={project.projectAbb}
				projectTitle={project.projectTitle} 
				projectDesc={project.projectDesc}
				projectDetails={project.projectDetails}
				/>
			))}
			<Pagination
			paginator={projectsPaginator}
			itemsLength={projects.length}
			/>
			<ReCAPTCHA
			sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
			onChange={handleOnChange}
			/>
		</div>
	)
}

export default Projects