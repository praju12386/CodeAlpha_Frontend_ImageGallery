// Lightbox Open
function openImage(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

// Lightbox Close
function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Filter Images
function filterImages(category) {

    let images = document.querySelectorAll(".image");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    images.forEach(img => {

        if(category === "all"){
            img.style.display = "block";
        }
        else if(img.classList.contains(category)){
            img.style.display = "block";
        }
        else{
            img.style.display = "none";
        }

    });

}