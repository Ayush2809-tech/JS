import { projects } from "./data/projects.js";

import {
    getFeaturedProjects,
    createProjectHTML
} from "./utils/projectUtils.js";

const container =
    document.getElementById("projectsContainer");

const featured =
    getFeaturedProjects(projects);

container.innerHTML = featured
    .map(project => createProjectHTML(project))
    .join("");