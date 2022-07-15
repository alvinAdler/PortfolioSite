import { useState } from 'react'

import "./Projects_master.css"

import Pagination from "./Pagination/Pagination"
import ProjectHolder from "./ProjectHolder/ProjectHolder"

import usePagination from '../../utilities/hooks/usePagination'
import projectsData from '../../utilities/projectsData'

const Projects = () => {

	const [projects, setProjects] = useState(projectsData)

	const projectsPaginator = usePagination(projects, 5)

	return (
		<div className="projects-list">
			{projectsPaginator.paginatedItems.map((project, index) => (
				<ProjectHolder
				key={index}
				projectAbb={project.projectAbb}
				projectTitle={project.projectTitle} 
				projectDesc={project.projectDesc}
				/>
			))}
			<Pagination
			paginator={projectsPaginator}
			itemsLength={projects.length}
			/>
		</div>
	)
}

export default Projects