const hosun = () => {
    const contents = document.querySelector(".contents");
    if(!contents){
        return false;
    }
    const box = document.querySelector(".box");
    const pics = contents.querySelector(".pics");
    const click = contents.querySelector(".click");

    pics.addEventListener('click',(e) => {
        console.log('click')
        box.classList.toggle('open')
        click.classList.toggle('close');
    })
    
}

const height = () =>{
    const btn = document.querySelector('.top');
    let doc = document.documentElement;
    window.addEventListener('scroll',() =>{
       
        if(window.scrollY > 500) {
            btn.classList.add('visible')
        }else{
            btn.classList.remove('visible')
        }
    })

    return false
}



const MobileM = () => {
    const ham = document.querySelector('.ham_menu');
    const close = document.querySelector('.close_menu');
    const dimm = document.querySelector('.dimm');
    const gnb = document.querySelector('.gnb');

    console.log(dimm)
    
    ham.addEventListener('click', (e) =>{
        e.currentTarget.classList.add('open');
        let status = e.currentTarget.classList.contains('open')
        if(status) {
            gnb.style.display = 'block';
            gnb.style.color = 'blue'
            dimm.style.display='block'
            close.style.display='block'
        }
    })

    close.addEventListener('click', (e) => {
        close.classList.remove('open')
        dimm.style.display = 'none'
        gnb.style.display = 'none'
    })

}


height();
hosun();
MobileM();
