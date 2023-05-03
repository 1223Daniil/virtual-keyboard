
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
 let Win = document.querySelector('.keycapWin');
 let WinR = document.querySelector('.keycapWin-R');

 let Arrow_Up = document.querySelector('.Arrow-Up');
 let Arrow_Left = document.querySelector('.Arrow-Left');
 let Arrow_Down = document.querySelector('.Arrow-Down');
 let Arrow_Right = document.querySelector('.Arrow-Right');
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
            if (evt.code == 'MetaLeft') {
                Win.classList.add('active')
            }
          

            if (evt.code == 'ArrowUp') {
                Arrow_Up.classList.add('active')
            }
            if (evt.code == 'ArrowLeft') {
                Arrow_Left.classList.add('active')
            }
            if (evt.code == 'ArrowDown') {
                Arrow_Down.classList.add('active')
            }
            if (evt.code == 'ArrowRight') {
                Arrow_Right.classList.add('active')
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
                if (evt.code == 'MetaLeft') {
                    Win.classList.remove('active')
                }
            

                if (evt.code == 'ArrowUp') {
                    Arrow_Up.classList.remove('active')
                }
                if (evt.code == 'ArrowLeft') {
                    Arrow_Left.classList.remove('active')
                }
                if (evt.code == 'ArrowDown') {
                    Arrow_Down.classList.remove('active')
                }
                if (evt.code == 'ArrowRight') {
                    Arrow_Right.classList.remove('active')
                }
                
            }})
 

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('mousedown', function (evt) {
        button[i].classList.add('active')
         })
         button[i].addEventListener('mouseup', function (evt) {
            button[i].classList.remove('active')
             })
}


