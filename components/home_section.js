export function HomeSection(data) {
    return `
        <section id="home">
            <div class="container-lg row">
                <div class="col-11  col-md-6  home-desc">
                    <h1 id="hi" class="animate-left1">${data["header"]}</h1>
                    <h3 id="name" class="animate-left2">${data["name"]}</h3>
                    <p id="description" class="animate-left3">${data["description"]}</p>
                </div>
                <div class="col-11 col-md-5 ratio1-1 mask-img animate-bottom">
                    <img id="personal_image" class="animate-left4" src="${data["img_path"]}" alt="">
                </div>
            </div>
        </section>     
        `;
}