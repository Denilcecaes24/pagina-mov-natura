let swiper2 = new Swiper(".container3", {
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
     

        568: {
            slidesPerView: 2
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 768px
        768: {
            slidesPerView: 3
        },
        // Configuración cuando el ancho de la ventana es igual o menor a 968px
    
        // Configuración cuando el ancho de la ventana es igual o menor a 1024px
        1024: {
            slidesPerView: 4
        }
    }

})