import { FastPage } from "/components/fast_page.js";
import { ImageAdapter, ImageAdapterLabel } from "/components/image_adapter.js";
import { TextInput } from "/components/input/input.js";



// export function AdminPage() { 
//     const FastPage1 = FastPage(`
//         <form id="deneme_form" class="d-flex justify-content-center align-items-center flex-column">
//             ${TextInput("text", "password2", "col-4 pb-3")}
//             ${TextInput("password", "password1", "col-4 pb-3")}
//             <button class="col-4 btn btn-outline-dark">Submit</button>
//         </form>
        
//         `,"deneme")


//     document.getElementById('app').innerHTML = `
//     <label for="FastPagedeneme">Bura Bas</label>
//     ${FastPage1}
//     `;

//     document.getElementById("deneme_form").addEventListener("submit",(event)=>{
//         event.preventDefault();
//         console.log(event.target[0].value)
//     });
// }

export function AdminPage() { 
    const image_adapter=ImageAdapter("image_adapter"); 


    document.getElementById('app').innerHTML = `
        ${ImageAdapterLabel("image_adapter","Buraya Tıkla", "col-8")}
        ${image_adapter}
    `;

}