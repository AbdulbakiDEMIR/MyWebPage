export function HomeSection() {
    return `
        <section id="home">
            <div class="container-lg row">
                <div class="col-11  col-md-6  home-desc">
                    <h1 id="hi" class="animate-left1"></h1>
                    <h3 id="name" class="animate-left2"></h3>
                    <p id="description" class="animate-left3"></p>
                </div>
                <div class="col-11 col-md-5 ratio1-1 mask-img animate-bottom">
                    <img id="personal_image" class="animate-left4" alt="">
                </div>
            </div>
        </section>
        <div class="d-none">
            ${loadPersonalInfo()}
        </div>        
        `;
}