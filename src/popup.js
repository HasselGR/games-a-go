import browser from 'webextension-polyfill';

let game2048 = document.getElementById('2048')
let tetris = document.getElementById('tetris')
let minesweeper = document.getElementById('minesweeper')
let spaceinvaders = document.getElementById('space-invaders')

game2048.addEventListener('click', () => {
  window.location.href = '2048.html'
})

tetris.addEventListener('click', () =>{
  window.location.href = 'tetris.html'
})

minesweeper.addEventListener('click', () => {
  window.location.href = 'index.html'
})

spaceinvaders.addEventListener('click', () => {
  window.location.href = 'indexinvaders.html'
})


