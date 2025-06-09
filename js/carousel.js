

//carousel

//Array storage class
let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) throw "O método Start precisa de um array com imagens";
        Carousel._slides = arr;
        Carousel._index = 0;
        Carousel.Show();
        Carousel._interval = setInterval(() => Carousel.Next(), 5000);
    }

    static Next() {
        Carousel._index = (Carousel._index + 1) % Carousel._slides.length;
        Carousel.Show();
        Carousel.RestartInterval();
    }

    static Prev() {
        Carousel._index = (Carousel._index - 1 + Carousel._slides.length) % Carousel._slides.length;
        Carousel.Show();
        Carousel.RestartInterval();
    }

    static Show() {
        const slide = Carousel._slides[Carousel._index];
        document.getElementById("image").src = slide.image;
        document.getElementById("title").innerText = slide.title;
        document.getElementById("url").href = slide.url;

        Carousel.UpdateIndicators();
    }

    static RestartInterval() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => Carousel.Next(), 5000);
    }

    static UpdateIndicators() {
        const indicatorContainer = document.getElementById("carousel-indicators");
        indicatorContainer.innerHTML = ""; // limpa
    
        Carousel._slides.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.className = i === Carousel._index ? "active" : "";
            dot.addEventListener("click", () => {
                Carousel._index = i;
                Carousel.Show();
                Carousel.RestartInterval();
            });
            indicatorContainer.appendChild(dot);
        });
    }
    
}
