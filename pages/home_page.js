import { Navbar } from "/components/navbar.js";
import { HomeSection } from "/components/home_section.js";
import { HomeIcons } from "/components/home_icons.js"; 
import { AboutMe } from "/components/about_me.js";
import { Projects } from "/components/projects.js";
import { Blogs } from "/components/blogs.js";


export async function HomePage() {
    try {
        const response = await fetch('/php/get_about_me.php');
        const data = await response.json();

        if (data.error) {
            console.error("Hata:", data.error);
        } else {
            document.getElementById('app').innerHTML = `
                ${HomeSection()}
                ${Navbar()}
                ${AboutMe(data["tech"], data["experience"])}
                ${HomeIcons()}
                ${Projects(data["projects"])}
                ${Blogs(data["blogs"])}
            `;
        }
    } catch (error) {
        console.error("Veri çekilirken hata oluştu:", error);
    }
    
    
}
