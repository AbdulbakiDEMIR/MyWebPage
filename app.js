// app.js

import { Navbar } from "/components/navbar.js";
import { HomeSection } from "/components/home_section.js";
import { HomeIcons } from "/components/home_icons.js"; 
import { AboutMe } from "/components/aboutMe.js";
import { Projects } from "/components/projects.js";
import { PageNotFound } from "/components/404.js";
import { data } from "/data/data.js";

function changeUrl(newPath) {
    history.pushState(null, "", newPath); // URL'yi değiştir
    renderApp(); // URL değiştikten sonra hemen render et
}
window.changeUrl = changeUrl;
// Ana render fonksiyonu
function renderApp() {
    const url = window.location.pathname; // Yeni URL'yi al

    if(url == "/") {
        document.getElementById('app').innerHTML = `
            ${HomeSection()}
            ${Navbar()}
            ${AboutMe(data["tech"], data["experience"])}
            ${HomeIcons()}
            ${Projects(data["projects"])}
        `;
    }
    else{
        document.getElementById('app').innerHTML = `
            ${PageNotFound()}
        `;

    }
}

// Uygulamayı başlatma fonksiyonu
function App() {
    // İlk yüklemede renderApp'i çağır
    renderApp();

    // URL değişikliklerini dinle
    window.addEventListener("popstate", renderApp);
}

// Sayfayı render etme
App();

