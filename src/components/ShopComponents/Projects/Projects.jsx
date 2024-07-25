import './Projects.css'
import ShopFilter from '../ShopFilter/ShopFilter';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../../Db/Db'
import { useState } from 'react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="projects">
      <div className="container">
        <ShopFilter onFilterChange={handleFilterChange} />
        <div className="projects__cards">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              price={project.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;