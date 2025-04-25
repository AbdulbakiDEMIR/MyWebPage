// var portfolioOwl = $('.selectCarousel1');
// portfolioOwl.owlCarousel({
//     loop:false,
//     autoplay: false,
//     nav:true,
//     dots: true,
//     mouseDrag: true,
//     responsive:{
//         0:{
//             items:1
//         }
//     }
// });
// var categoriesOwl = $('.categories-carousel');
// categoriesOwl.owlCarousel({
//     loop:true,
//     autoplay: true,
//     nav:true,
//     margin:10,
//     dots: true,
//     mouseDrag: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         400:{
//             items:2
//         },
//         800:{
//             items:3
//         },
//         1000:{
//             items:4
//         },
//         1400:{
//             items:5
//         },
//         1800:{
//             items:6
//         }
//     }
// });

// var owl_navIcons = document.querySelectorAll(".owl-nav");
// owl_navIcons.forEach(function(owl_navIcon){
//     var owl_button_left = owl_navIcon.querySelector(".owl-prev span");
//     var owl_button_right = owl_navIcon.querySelector(".owl-next span");
//     owl_button_left.classList.add("material-symbols-outlined");
//     owl_button_left.innerHTML = "arrow_back_ios";
//     owl_button_right.classList.add("material-symbols-outlined");
//     owl_button_right.innerHTML = "arrow_forward_ios";
// });

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

// function changeUrl(event) {
//     // Varsayılan link davranışını engelle
//     event.preventDefault();
    
//     const href = event.target.getAttribute("href");
//     // URL'yi değiştirme (pushState ile yönlendirme yapmadan)
//     history.pushState(null, "", href);

// }


// document.addEventListener("DOMContentLoaded",function(){
//     let haveChild =  document.querySelectorAll(".have-child");
//     for(let i = 0; i< haveChild.length; i++){
//         haveChild[i].addEventListener("click", function (event) {
//             var clickedElement = event.target;
//             console.log(clickedElement,event.target.tagName);
//             // have-child elementinin a etiketine tıklandığında 
//             // başka sayfaya gitmemesi için
//             if (event.target.tagName === "A") {
//                 var href = event.target.getAttribute("href");
//                 if (href === "#") {
//                     event.preventDefault();
//                 }
//             }
//             if(!clickedElement.parentElement.classList.contains("drop-down") && !clickedElement.classList.contains("drop-down")){
                
//                 if(clickedElement.parentElement != haveChild[i]){
//                     haveChild.classList.remove("active");
//                 }
//                 // Tıklanan öğenin bir "have-child" olup olmadığını kontrol et
//                 if (clickedElement.parentElement.classList.contains("have-child")|| clickedElement.classList.contains("have-child")) {
//                     // Tıklanan öğe "have-child" ise, "active" sınıfını ekleyin
//                     clickedElement.parentElement.classList.toggle("active");
//                 }
//             }
//         });
        
//     }
// })


