import { Navbar } from "/components/navbar.js";
import { HomeSection } from "/components/home_section.js";
import { HomeIcons } from "/components/home_icons.js"; 
import { AboutMe } from "/components/about_me.js";
import { Projects } from "/components/projects.js";
import { Blogs } from "/components/blogs.js";


export function HomePage(data) {
    document.getElementById('app').innerHTML = `
        ${HomeSection()}
        ${Navbar()}
        ${AboutMe(data["tech"], data["experience"])}
        ${HomeIcons()}
        ${Projects(data["projects"])}
        ${Blogs(data["blogs"])}
    `;

}
