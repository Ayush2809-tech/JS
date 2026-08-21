const prices = [100, 250, 50, 400, 200];

const total = prices.reduce(
    (sum, price) => sum + price, 0
);

console.log(total);

const numbers = [10, 20, 30, 40];

const max = numbers.reduce(
    (largest, number) => number > largest ? number : largest, numbers[0]
);

console.log(max);

const numbers1 = [1, 3, 5, 8];

const result = numbers1.some(number1 => number1 % 2 === 0);

console.log(result);



const numbers2 = [2, 4, 6, 8];

const result2 = numbers2.every(number2 => number2 % 2 === 0);

console.log(result2);



const ages = [20, 22, 19, 25, 17];
const under18 = ages.some(age => age < 18);
console.log(under18);

const ages2 = [20, 22, 19, 25, 17];
const adults = ages2.every(age2 => age2 >= 18);
console.log(adults);


const prices3 = [500, 100, 800, 250, 50];
prices3.sort((a, b) => a - b);
console.log(prices3);

prices3.sort((a, b) => b - a);
console.log(prices3);


// sorting objects

const developers = [
    { name: "Ayush", age: 20 },
    { name: "Rahul", age: 22 },
    { name: "Aman", age: 19 }
];

developers.sort((a, b) => a.age - b.age);
console.log(developers);

developers.sort((a, b) => b.age - a.age);
console.log(developers);


//task 4
const projects = [
    { title: "Portfolio", stars: 120 },
    { title: "Weather App", stars: 80 },
    { title: "Admission System", stars: 200 },
    { title: "Todo App", stars: 50 }
];

projects.sort((a, b) => a.stars - b.stars);

console.log("Ascending:");
console.log(
    projects.map(project => `${project.title} - ${project.stars}`)
);

projects.sort((a, b) => b.stars - a.stars);

console.log("Descending:");
console.log(
    projects.map(project => `${project.title} - ${project.stars}`)
);

// task 5

const developer = {
    name: "Ayush",
    profile: {
        github: "Ayush2809-tech"
    }
};
console.log(developer.profile?.github);
console.log(developer.profile?.linkedin);
console.log(developer.profile?.instagram);


//task 6
const user = {
    name: "Ayush",
    email: null,
    city: "Greater Noida"
};

const email = user.email ?? "No email provided";
const phone = user.phone ?? "No phone provided";
const city = user.city ?? "Unknown city";

console.log(email);
console.log(phone);
console.log(city);

console.log("----------------- Day 7  final mini task --------------------------");


const projects4 = [
    {
        title: "Portfolio",
        tech: "React",
        stars: 120,
        featured: true
    },
    {
        title: "Admission System",
        tech: "Django",
        stars: 200,
        featured: true
    },
    {
        title: "Weather App",
        tech: "JavaScript",
        stars: 80,
        featured: false
    },
    {
        title: "Todo App",
        tech: "JavaScript",
        stars: 50,
        featured: false
    }
];

const featured = projects4.filter(project => project.featured);
console.log(featured);

projects4.sort((a, b) => b.stars - a.stars);
console.log("Highest to lowest");
console.log(projects4.map(project4 => `
    ${project4.title} - ${project4.tech} - ${project4.stars}`));

const tstars = projects4.reduce(
    (sum, project) => sum + project.stars,
    0);
console.log("Total Stars: ", tstars);


const developer4 = {
    name: "Ayush",
    social: {
        github: "Ayush2809-tech"
    }
};

console.log(developer4.social?.linkedin ?? "LinkedIn not Available");
console.log(developer4.social?.linkedin);
console.log(developer4.social?.github);