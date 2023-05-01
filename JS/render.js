

export function RenderHTML() {

// Создаём элементы
let body = document.querySelector('body');
let container = document.createElement('main');
let keyboard = document.createElement('div');
let input = document.createElement('textarea');

let row_One = document.createElement('div');
let row_Two = document.createElement('div');
let row_Tree = document.createElement('div');
let row_Four = document.createElement('div');
let row_Five = document.createElement('div');



// Специальные символы
    let specialKey = ['`', 'Backspace', 'Tab','&bsol;', 'CapsLock',"Enter", 'Shift-L','Shift-R', '↑', 'Ctrl-L', 'Win', 'Alt-l', 'Space', 'Alt-r', 'Win', 'Fn', 'Ctrl-R', '←', '↓', '→']

    // Массив символов для клавишь
     let row_Keycap_One = ['`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
     let row_Keycap_Two = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '&bsol;']
     let row_Keycap_Tree = ['CapsLock','A','S','D','F','G','H','J','K','L',';',"'", "Enter"]
     let row_Keycap_Four = ['Shift-L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift-R', '↑']
     let row_Keycap_Five = ['Ctrl-L', 'Win', 'Alt-l', 'Space', 'Alt-r', 'Win', 'Fn', 'Ctrl-R', '←', '↓', '→']

  

// Функция появления рядов
function renderRow(row, keycap) {
    for (let i = 0; i <= keycap.length - 1; i++) {



        // Дабовление кнопок
        let button = document.createElement('button');
        row.append(button)
         button.innerHTML = keycap[i]
         



        //  Стили для specialKey
         for (let j = 0; j < specialKey.length; j++) {
            
            if (keycap[i] == specialKey[j]) {
                button.className = 'special-key'
             }
              // Доп Клавиши или же Дебаг

             if (keycap[i] == 'Space') {
              
                button.classList.add('space')
             }
             if (keycap[i] == 'Shift-L') {
                button.classList.add('shift-L')
             }if (keycap[i] == 'Shift-R') {
                button.classList.add('shift-R')
             }
             if (keycap[i] == 'Ctrl-L') {
                button.classList.add('ctrl-L')
             }
             if (keycap[i] == 'Ctrl-R') {
                button.classList.add('ctrl-R')
             }
             if (keycap[i] == 'Ctrl-L') {
                button.classList.add('ctrl-L')
             }
             if (keycap[i] == 'Ctrl-R') {
                button.classList.add('ctrl-R')
             }
             if (keycap[i] == 'Alt-l') {
                button.classList.add('Alt-L')
             }
             if (keycap[i] == 'Alt-r') {
                button.classList.add('Alt-R')
             }




           }
        
    } 
}





// Вызываю функцию для каждого массива
renderRow(row_One, row_Keycap_One)
renderRow(row_Two, row_Keycap_Two)
renderRow(row_Tree, row_Keycap_Tree)
renderRow(row_Four, row_Keycap_Four)
renderRow(row_Five, row_Keycap_Five)

// Дабавляю стили
container.className = 'container'
keyboard.className = 'keyboard'
row_Keycap_One.className = 'row'
input.className = 'input'

input.className = 'shift_L'
input.className = 'shift_R'
input.className = 'input'


// Дабавляю HTML
body.append(container)
container.append(input)
container.append(keyboard)

keyboard.append(row_One)
keyboard.append(row_Two)
keyboard.append(row_Tree)
keyboard.append(row_Four)
keyboard.append(row_Five)


 return body
}




  
