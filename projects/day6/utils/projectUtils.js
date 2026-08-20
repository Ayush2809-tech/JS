export function getFeaturedProjects(projects) {
    return projects.filter(project => project.featured);
}

export function createProjectHTML(project) {
    return `
        <div class="card p-3 mb-3">
            <h3>${project.title}</h3>
            <p>Built with ${project.tech}</p>
        </div>
    `;
}