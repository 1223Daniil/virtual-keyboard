
import { RenderHTML } from './render.js';
RenderHTML();

 let button = document.querySelectorAll('button')


 for (let i = 0; i < button.length; i++) {


     button[i].setAttribute('keyname', button[i].innerText)
     button[i].setAttribute('LowerCaseName', button[i].innerText.toLowerCase())
    }

    window.addEventListener('keydown', function (evt) {
        for (let i = 0; i < button.length; i++) {
            if (evt.key ==  button[i].getAttribute('keyname') || evt.key == button[i].getAttribute('LowerCaseName')) {
                button[i].classList.add('active')
            }
            
        }})

        window.addEventListener('keyup', function (evt) {
            for (let i = 0; i < button.length; i++) {
                if (evt.key ==  button[i].getAttribute('keyname') || evt.key == button[i].getAttribute('LowerCaseName')) {
                    button[i].classList.remove('active')
                }
                
            }})
 



// По клику мыши стили
//  button[i].addEventListener('click', function (evt) {
//     button[i].className = 'active'
//      })