let swiper = new Swiper(".container2", {
    spaceBetween:15,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },

    breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 568px
        568: {
            slidesPerView: 2
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 768px
        // Configuración cuando el ancho de la ventana es igual o menor a 968px
        868: {
            slidesPerView: 3
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 968px
    
        // Configuración cuando el ancho de la ventana es igual o menor a 1024px
    
        // Configuración cuando el ancho de la ventana es igual o menor a 1024px
     
    }

    
})

