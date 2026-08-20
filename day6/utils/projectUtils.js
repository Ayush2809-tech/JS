export function getFeaturedProjects(projects){
    return projects.filter(project => project.featured);
}