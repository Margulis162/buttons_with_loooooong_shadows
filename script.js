// vars
const btns = document.getElementsByClassName("btn");


// f(x)

// randomizer
function rand_gen(min, max){
    num = Math.floor(Math.random()*(max - min + 1) + min);
    }

// long shadow f(x)
function long_shadow(){
    let shadow = "";
    for(let i = 0; i < 1100; i++){
        shadow += `${i}px ${i}px ${3}px rgb(50, 50, 50),`
    }
    console.log(shadow);
    shadow = shadow.slice(0, -1);

    for(btn of btns){
        btn.style.boxShadow = shadow; 
    }
}


// flow
long_shadow();