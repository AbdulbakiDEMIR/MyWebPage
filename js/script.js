
document.addEventListener("DOMContentLoaded",function(){

    // ScrollReveal.debug = true;
    ScrollReveal({ reset: false });
    ScrollReveal().reveal('.animate-top1', { 
        origin:"top",
        distance : "200px",
        duration : 1000,
    });
    ScrollReveal().reveal('.animate-top2', { 
        origin:"top",
        distance : "200px",
        duration : 1000,
        delay: 100
    });
    ScrollReveal().reveal('.animate-top3', { 
        origin:"top",
        distance : "200px",
        duration : 1000,
        delay : 200
    });
    ScrollReveal().reveal('.animate-top4', { 
        origin:"top",
        distance : "200px",
        duration : 1000,
        delay : 300
    });
    ScrollReveal().reveal('.animate-top5', { 
        origin:"top",
        distance : "200px",
        duration : 1000,
        delay : 400
    });
    ScrollReveal().reveal('.animate-bottom', { 
            origin:"bottom",
            distance : "200px",
            duration : 1000,
    });
    ScrollReveal().reveal('.animate-left1', { 
        origin:"left",
        distance : "200px",
        duration : 1000,
    });
    ScrollReveal().reveal('.animate-left2', { 
        origin:"left",
        distance : "200px",
        duration : 1000,
        delay: 100
    });
    ScrollReveal().reveal('.animate-left3', { 
        origin:"left",
        distance : "200px",
        duration : 1000,
        delay: 200 
    });
    ScrollReveal().reveal('.animate-left4', { 
        origin:"left",
        distance : "200px",
        duration : 1000,
        delay: 300
    });
    ScrollReveal().reveal('.animate-right', { 
        origin:"right",
        distance : "100px",
        duration : 1000,
    });



    // Gözlemlenecek olan tüm etiketler
    const targetElements = document.querySelectorAll('.date-content-box');
    // Intersection Observer ayarları
    const observerOptions = {
    root: null, // Sayfa içindeki görünüm penceresi (null, tüm sayfa anlamına gelir)
    threshold: 0.1 // Hedefin %10'u göründüğünde tetiklenir
    };

    // Gözlemcinin callback fonksiyonu
    const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Eğer etiket görünür hale gelirse, 'visible' sınıfını ekle
        entry.target.classList.add('animation-active');
        } 
        // else {
        // // Eğer etiket görünür değilse, 'visible' sınıfını kaldır (opsiyonel)
        // entry.target.classList.remove('visible');
        // }
    });
    };

    // Intersection Observer oluşturulması
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Her bir target etiketi gözlemlemeye başla
    targetElements.forEach(target => observer.observe(target));
    

})



function burgerButtonActive(){
    var burger_line1 = document.getElementById("burger-button-line1");
    var burger_line2 = document.getElementById("burger-button-line2");
    var burger_line3 = document.getElementById("burger-button-line3");
    var burger_ul = document.querySelector("nav");
    
    burger_line1.classList.toggle("burger-button-line1-active");
    burger_line2.classList.toggle("burger-button-line2-active");
    burger_line3.classList.toggle("burger-button-line3-active");
    burger_ul.classList.toggle("nav-active")
}


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (navbar) {  // navbar öğesinin olup olmadığını kontrol et
        if (window.scrollY > document.documentElement.clientHeight / 2) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


function scrollToSection(event) {
    // Varsayılan link davranışını engelle
    event.preventDefault();
    const href = event.target.getAttribute("href");

    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}


function changeUrl(url){
    window.location.pathname = url;
}

function getParams(paramsName){
    const search = window.location.search; // "?id=12"

    const params = new URLSearchParams(search);
    const params_value = params.get(paramsName);

    return params_value;
}


function inputPasswordIcon(id){
    icon=document.getElementById("icon"+id);
    input=document.getElementById(id);
    if(input.type == "text"){
        input.type="password"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }else{
        input.type="text"
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
}

function previewImage(event,id) {
    const file = event.target.files[0]; // Seçilen ilk dosya
    id= id.id;
    console.log(file,id)
    if (file) {
        const previewContainer = document.querySelector('#'+id+'PreviewContainer img');
        previewContainer.src = URL.createObjectURL(file); // Dosyanın geçici URL'sini al

    }
}

function image_adapter_submit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const image_name = formData.get("image_create_name_input");
    const image_file = formData.get("image_create_input");

    console.log(image_name, image_file)

    fetch("/php/upload_image.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}





function image_adapter_value(target,value){
    var image_input = document.getElementById(target);
    image_input.value = value;
    var admin_personal_image = document.getElementById("admin_personal_image");
    admin_personal_image.src=value;   
}


function personal_data_submit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/upload_personal_info.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}

function work_update(event){
    event.preventDefault();
    console.log(event.target)
    const formData = new FormData(event.target);
    fetch("/php/work_update.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        changeUrl( window.location.pathname)
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}

function set_work_update_component(id,name,date,mission,explanation){
    console.log(id,name,date,mission,explanation)
    document.getElementById("work_update_id").value = id;
    document.getElementById("work_company_name_update_input").value = name;
    document.getElementById("work_company_date_update_input").value = date;
    document.getElementById("work_company_mission_update_input").value = mission;
    document.getElementById("work_company_explanation_update_input").value = explanation;
}

function edu_update(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/php/edu_update.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        changeUrl( window.location.pathname)
    })
    .catch(error => {
        console.error("Yükleme sırasında hata oluştu:", error);
    });
}

function set_edu_update_component(id,university,date,department,class_name,note){
    console.log(id,university,date,department,class_name,note)
    document.getElementById("edu_update_id").value = id;
    document.getElementById("edu_university_update_input").value = university;
    document.getElementById("edu_date_update_input").value = date;
    document.getElementById("edu_department_update_input").value = department;
    document.getElementById("edu_class_name_update_input").value = class_name;
    document.getElementById("edu_note_update_input").value = note;
}