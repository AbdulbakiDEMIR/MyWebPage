import { FastPage, FastPageLabel } from "/components/fast_page.js";
import { TextInput } from "/components/input/input.js"

export function ImageAdapter(name) { 
    const create_image = FastPage(`
        ${TextInput("text","image_create_name_input", "mb-2","Resim Adı")}
        ${TextInput("file","image_create_input", "mb-2","Resim")}
        
    `,"create_image", "col-4", "Resim Yükle");
    const create_image_label = FastPageLabel("create_image",`
        <div class="col cursor-pointer">
            <div class="ratio ratio-1x1 bg-white">
                <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                    <i class="fa-solid fa-plus fs-1"></i>
                    <p class="text-center m-0" style="1rem">Yeni Resim Ekle</p>
                </div>
            </div>
            <p class="text-center fw-light text-no-wrap" style="font-size:0.9rem">Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla Buraya Tıkla </p>
        </div>
    `)
    const FastPage1 = FastPage(`
        <div class="row row-cols-6">
            ${create_image_label}
            ${create_image}
        </div>
        `,name, "col-8", "Resim")

    return `
        ${FastPage1}
    `
    

}

export function ImageAdapterLabel(name,content) {
    return `
        ${FastPageLabel(name,content)}
    `
}