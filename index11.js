
let btn = document.querySelector('#btn');
let p = document.querySelector('p');
let my_id = document.querySelector('#my_id');

btn.addEventListener('click',()=> {
    let checkbox;
   
        checkbox = document.getElementsByName('ch');
        let str = '';
        for (let i = 0; i < checkbox.length;i++) {
            if(checkbox[i].checked) {
                str += checkbox[i].value + ' ';
            }
            p.textContent = str;
        }
  
});






