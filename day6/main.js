import { add, square, cube, isEven } from "./utils.js";
console.log(add(10, 20));
console.log(square(10));
console.log(cube(10));
console.log(isEven(10));


import greet from "./greet.js";

console.log(greet("Ayush"));


import { projects } from "./data/projects.js";

console.log(projects);

console.log(projects[0].title);
console.log(projects[1].tech);

import { getFeaturedProjects } from "./utils/projectUtils.js";

const featured = getFeaturedProjects(projects);
console.log(featured);