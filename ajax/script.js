const dog = document.querySelector(".dogss");

function addD() {
    const promise = fetch("https://dog.ceo/api/breeds/image/random");
    promise 
        .then(function(response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function(processingPromise) {
            const img = document.createElement("img");
            img.src = processingPromise.message;
            img.alt = "Cutie dog";
            dog.appendChild(img);
        });
}

document.querySelector(".button").addEventListener("click", addD);