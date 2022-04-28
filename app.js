let root = document.documentElement;
let button = document.querySelector('#darkmode')
let darkmode = 0

button.addEventListener("click", e => {
    if(darkmode == 0){
        root.style.setProperty('--background', '#1C2B3B');
        root.style.setProperty('--background-accent', '#152333');
        root.style.setProperty('--text', '#f4f4f4');
        darkmode = 1 ;
    }
    else{
        root.style.setProperty('--background', '#FFFFFF');
        root.style.setProperty('--background-accent', '#f4f4f4');
        root.style.setProperty('--text', '#141414');
        darkmode = 0 ;

    }
    
});