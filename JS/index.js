
import { RenderHTML } from './render.js';
RenderHTML();

 let button = document.querySelectorAll('button')
 let Space = document.querySelector('.space');
 let ShiftLeft = document.querySelector('.shift-L');
 let ShiftRight = document.querySelector('.shift-R');
 let CtrlLeft = document.querySelector('.ctrl-L');
 let CtrlRight = document.querySelector('.ctrl-R');
 let AltLeft = document.querySelector('.Alt-L');
 let AltRight = document.querySelector('.Alt-R');

 for (let i = 0; i < button.length; i++) {

    
     button[i].setAttribute('keyname', button[i].innerText)
     button[i].setAttribute('LowerCaseName', button[i].innerText.toLowerCase())
    }

    window.addEventListener('keydown', function (evt) {
        
  console.log(evt.code);
        for (let i = 0; i < button.length; i++) {
            
            if (evt.key ==  button[i].getAttribute('keyname') || evt.key == button[i].getAttribute('LowerCaseName')) {
                button[i].classList.add('active')
            }

            // Доп Клавиши
            if (evt.code == 'Space') {
                Space.classList.add('active')
            }
            if (evt.code == 'ShiftLeft') {
                ShiftLeft.classList.add('active')
            }
            if (evt.code == 'ShiftRight') {
                ShiftRight.classList.add('active')
            }
            if (evt.code == 'ControlLeft') {
                CtrlLeft.classList.add('active')
            }
            if (evt.code == 'ControlRight') {
                CtrlRight.classList.add('active')
            }
            if (evt.code == 'AltLeft') {
                AltLeft.classList.add('active')
            }
            if (evt.code == 'AltRight') {
                AltRight.classList.add('active')
            }
            
        }})

        window.addEventListener('keyup', function (evt) {


            
            for (let i = 0; i < button.length; i++) {
                if (evt.key ==  button[i].getAttribute('keyname') || evt.key == button[i].getAttribute('LowerCaseName')) {
                    button[i].classList.remove('active')
                }

                 // Доп Клавиши
                if (evt.code == 'Space') {
                    Space.classList.remove('active')
                }
                if (evt.code == 'ShiftLeft') {
                    ShiftLeft.classList.remove('active')
                }
                if (evt.code == 'ShiftRight') {
                    ShiftRight.classList.remove('active')
                }
                if (evt.code == 'ControlLeft') {
                    CtrlLeft.classList.remove('active')
                }
                if (evt.code == 'ControlRight') {
                    CtrlRight.classList.remove('active')
                }
                if (evt.code == 'AltLeft') {
                    AltLeft.classList.remove('active')
                }
                if (evt.code == 'AltRight') {
                    AltRight.classList.remove('active')
                }

            }})
 



// По клику мыши стили
 button[i].addEventListener('click', function (evt) {
    button[i].className = 'active'
     })