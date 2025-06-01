import { data } from "/data/nav_data.js";

export function Navbar() {
    
    const navItems = data.map(nav => `
        <li class="${nav.animate}">
            <a href="${nav.href}" onclick="scrollToSection(event)">${nav.header}</a>
        </li>

    `).join('');


    return `
        <div id="burger-button" onclick="burgerButtonActive()">
            <div id="burger-button-line1"></div>
            <div id="burger-button-line2"></div>
            <div id="burger-button-line3"></div>
        </div>
        <nav>
            <div class="container-xxl">
                <ul class="nav-list">
                    ${navItems}
                </ul>
            </div>
        </nav>`;
                    // <li class="animate-top3"><a onclick="changeUrl('/home')">Projeler</a></li>

}
