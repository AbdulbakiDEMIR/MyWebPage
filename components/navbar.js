export function Navbar() {
    return `
        <div id="burger-button" onclick="burgerButtonActive()">
            <div id="burger-button-line1"></div>
            <div id="burger-button-line2"></div>
            <div id="burger-button-line3"></div>
        </div>
        <nav>
            <div class="container-xxl">
                <ul class="nav-list">
                    <li class="animate-top1"><a href="#home" onclick="scrollToSection(event)">Ana Sayfa</a></li>
                    <li class="animate-top2"><a href="#aboutMe" onclick="scrollToSection(event)">Hakkımda</a></li>
                    <li class="animate-top3"><a href="#projects" onclick="scrollToSection(event)">Projeler</a></li>
                </ul>
            </div>
        </nav>`;
                    // <li class="animate-top3"><a onclick="changeUrl('/home')">Projeler</a></li>

}
