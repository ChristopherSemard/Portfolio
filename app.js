// Switch thème clair / sombre
let root = document.documentElement;
let button = document.querySelector('#darkmode')
let afpa = document.querySelector('#afpa')
let darkmode = 0

button.addEventListener("click", e => {
    if(darkmode == 0){
        root.style.setProperty('--background', '#1C2B3B');
        root.style.setProperty('--background-accent', '#152333');
        root.style.setProperty('--text', '#f4f4f4');
        root.style.setProperty('--modal-background', 'rgba(255,255,255,0.4)');
        afpa.setAttribute('src','./images/afpa2.webp')
        darkmode = 1 ;
    }
    else{
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--background-accent', '#f4f4f4');
        root.style.setProperty('--text', '#141414');
        root.style.setProperty('--modal-background', 'rgba(0,0,0,0.6)');
        afpa.setAttribute('src','./images/afpa.webp')
        darkmode = 0 ;
    }
});


// Modal
let images
let modal = document.querySelector('#modal')
let buttonsOpenModal = document.querySelectorAll('.voir-plus')

const openModal = (event) => {
    let project = event.target.parentNode.parentNode;
    
    while (modal.lastElementChild) {
        modal.removeChild(modal.lastElementChild);
    }
    let modalContent = project.cloneNode(true);
    modalContent.id = "modal-content";
    let closeButton = modalContent.lastElementChild.lastElementChild;
    closeButton.id = "close-modal";
    closeButton.setAttribute("onClick", "closeModal()");
    closeButton.textContent = "Fermer";
    modal.appendChild(modalContent)
    modal.style.display = 'block';  

}

const closeModal = () => {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};


// Slider hover modal

document.addEventListener("mouseover", event => {
    if(event.target.parentNode.parentNode.id == "modal-content"){
        modal = document.querySelector('#modal')
        let images = modal.querySelectorAll('img')
        console.log(images);
        let baseZIndex = 2
        for(let image of images){
            console.log(image);
            image.style.transform = "scale(0.8)";
            image.style.zIndex = "2"
        }
        event.target.style.transform = "scale(1)";
        event.target.style.zIndex = "999"
    }
});