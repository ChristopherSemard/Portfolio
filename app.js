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

// Ouverture modal
let images
let modal = document.querySelector('#modal')
let buttonsOpenModal = document.querySelectorAll('.voir-plus')

const openModal = (event) => {
    let project = event.target.parentNode.parentNode.parentNode;
    
    while (modal.lastElementChild) {
        modal.removeChild(modal.lastElementChild);
    }
    let modalContent = project.cloneNode(true);
    modalContent.id = "modal-content";
    let closeButton = modalContent.lastElementChild.lastElementChild.lastElementChild;
    closeButton.id = "close-modal";
    closeButton.setAttribute("onClick", "closeModal()");
    closeButton.textContent = "Fermer";
    modal.appendChild(modalContent)
    modal.style.display = 'block';  

}

// Fermeture de la modal
const closeModal = () => {
    modal.style.display = "none";
}

// Fermeture modal quand on clique en dehors
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Accordéon images modal
document.addEventListener("click", event => {
    if(event.target.nodeName == "IMG" && event.target.parentNode.parentNode.id == "modal-content"){
        modal = document.querySelector('#modal')
        let images = modal.querySelectorAll('img')
        for(let image of images){
            image.style.height = "14%";
            image.style.opacity = "0.8"
        }
        event.target.style.height = "70%"
        event.target.style.opacity = "1"
    }
});

// Animation lorsque les projets sont visibles à l'écran
const observerL = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('left-animation');
    }
});
});

let projectsLeft = document.querySelectorAll('.project-left')
for(project of projectsLeft){
    observerL.observe(project);
}

const observerR = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('right-animation');
    }
});
});

let projectsRight = document.querySelectorAll('.project-right')
for(project of projectsRight){
    observerR.observe(project);
}


// Validation formulaire
function validate()
{
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("lastname").value;
    let msgContent = document.getElementById("msg").value;
    let firstNameRGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,100}$/u;
    let lastNameRGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,100}$/u;
    let msgContentRGEX = /^[A-Za-z]{1,500}$/
    let firstNameResult = firstNameRGEX.test(firstName);
    let lastNameResult = lastNameRGEX.test(lastName);
    let msgContentResult = msgContentRGEX.test(msgContent);
    if(firstNameResult == false)
    {
        alert('Prénom invalide');
        return false;
    }
    if(lastNameResult == false)
    {
        alert('Nom invalide');
        return false;
    }
    if(msgContentResult == false)
    {
        alert('Message invalide');
        return false;
    }

    return true;
}

// Menu nav mobile
function navMobile() {
    var x = document.querySelector(".nav-mobile-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
      x.style.display = "flex";
      var allNav = document.querySelectorAll(".nav-mobile-link");
      for(let i = 0 ; i < allNav.length ; i++){
          allNav[i].classList.add(`nav-anim-${i+1}`);
      }
      x.classList.add('nav-mobile-open');
      
    }
  }