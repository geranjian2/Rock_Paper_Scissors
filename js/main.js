import { GamerOperations } from './game/GameOperations.js';

function main() {
    let gamerOperations = new GamerOperations();




    let btnModal = document.querySelector('#btn-modal');
    let overlay = document.querySelector('.overlay');
    let modal = document.querySelector('.modal');
    btnModal.addEventListener('click', () => {
        document.getElementById('overlay').classList.add('is-visible');
        document.getElementById('modal').classList.add('is-visible');
    })
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
    });


}
main();