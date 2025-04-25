import { Navbar } from "/components/admin/navbar.js";
import { HomeSection } from "/components/admin/home_section.js";
import { HomeIcons } from "/components/admin/home_icons.js"; 
import { AboutMe } from "/components/admin/about_me.js";
import { Projects } from "/components/admin/projects.js";
import { Blogs } from "/components/admin/blogs.js";


export function AdminHomePage(data) {
    document.getElementById('app').innerHTML = `
        ${HomeSection()}
        ${Navbar()}
        ${AboutMe(data["tech"], data["experience"])}
        ${HomeIcons()}
        ${Projects(data["projects"])}
        ${Blogs(data["blogs"])}
    `;

}
