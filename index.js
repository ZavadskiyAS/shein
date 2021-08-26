const arrow = document.querySelector(".uil"),
      box = document.querySelector(".box");

box.addEventListener('click', () =>{
    box.classList.toggle('uil-angle-down');
    box.classList.toggle('uil-angle-up');
    // if(box){
    //     arrow.classList.remove('uil-angle-up');
    //     arrow.classList.add('uil-angle-down')
    // } else {
    //     arrow.classList.remove('uil-angle-up');
    //     arrow.classList.add('uil-angle-down')
    // }
    // if(arrow.classList =  'uil-angle-up'){
    //     arrow.classList.remove('uil-angle-up');
    //     arrow.classList.add('uil-angle-down')
    // } else {
    //     arrow.classList.remove('uil-angle-up');
    //     arrow.classList.add('uil-angle-down')
    // }
})