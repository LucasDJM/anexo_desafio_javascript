

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, url) {
       this.image = image;
       this.title = title;
        this.url = url;
    }    
      
    static Start(arr){
        if(arr && arr.length > 0){
            Carousel._slides = arr;
            Carousel._index = 0;
            Carousel.Show();
            Carousel._interval = setInterval(() => {Carousel.Next();}, 5000)
    }
        else{
            throw"o metodo start precisa de um array com imagens";
        }
    }

    static Next(){
        Carousel._index = (Carousel._index + 1) % Carousel._slides.length;
        Carousel.Show();
    }

    static Prev(){
        Carousel._index = (Carousel._index - 1 + Carousel._slides.length) % Carousel._slides.length;
        Carousel.Show();
    }

    static Show(){
        const slide = Carousel._slides[Carousel._index];
        document.getElementById("image").src = slide.image;
        document.getElementById("title").innerHTML = slide.title;
        document.getElementById("url").href = slide.url;
    }
};
