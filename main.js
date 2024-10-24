let headingElement = document.getElementById("heading");
let imageElement = document.getElementById("image");
let button = document.getElementById("changeButton");

let headings = [ "Hyundai","TaTa","Maruti","Benz","Mahindra"];

let images = [
    "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fhyundai%2Fcreta%2Fhyundai-creta.jpg%3Fv%3D92&w=3840&q=75",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-E-Class-091020241348.jpg&w=350&h=251&q=90&c=1",
    "https://imgd.aeplcdn.com/600x337/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80"
];


button.addEventListener("click", () => {
    // Change heading randomly
    let randomHeading = headings[Math.floor(Math.random() * headings.length)];
    headingElement.textContent = randomHeading;

    // Change image randomly
    let randomImage = images[Math.floor(Math.random() * images.length)];
    imageElement.src = randomImage;
});
