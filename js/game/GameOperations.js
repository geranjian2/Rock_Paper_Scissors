import { rock } from './Rock.js';
import { paper } from './Paper.js';
import { scissors } from './Scissor.js';
import { objects, players, messages } from './enums/enums.js';
class GamerOperations {

    circleHtml;
    gameHtml;
    playerHtml;
    pickObject;
    points = 0;
    youPicked;
    oppenentObject;
    constructor() {
        document.querySelector('.animation').classList.remove('animated-image');
        this.circleHtml = document.querySelector('.circles-elements');
        this.gameHtml = document.querySelector('.game-result');
        this.oppenentObject = document.querySelector('.opponent');
        this.playerHtml = document.querySelector('.player');
        this.circleHtml.innerHTML = this.figureTriangule() + this.templateCircle(paper) +
            this.templateCircle(scissors) +
            this.templateCircle(rock);
        this.selectObject();
        this.reset();
    }
    reset() {
        let resetButton = document.querySelector('#reset');
        let t = this;
        resetButton.addEventListener('click', function() {
            t.gameHtml.classList.add('hidden');
            // console.log(this.gameHtml);
            t.circleHtml.closest('.game-initial').classList.remove('hidden');
        })
    }
    selectObject() {
        [...this.circleHtml.getElementsByTagName("div")].map(itemGame => {
            itemGame.addEventListener("click", (e) => {
                const player = document.querySelector('.player');

                this.youPicked = itemGame.getAttribute('data-type');
                switch (itemGame.getAttribute('data-type')) {
                    case objects.PAPER:
                        player.innerHTML = this.templateCircleGame(paper, players.YOU);
                        break;

                    case objects.SCISSORS:
                        player.innerHTML = this.templateCircleGame(scissors, players.YOU);
                        break;

                    case objects.ROCK:
                        player.innerHTML = this.templateCircleGame(rock, players.YOU);
                        break;
                }
                itemGame.closest('.game-initial').classList.add('hidden');
                this.gameHtml.querySelector('h2').innerHTML = messages.INITIAL;
                this.gameHtml.classList.remove('hidden');
                this.randomObject();
            });
        });
    }

    templateCircle(objectType) {
        return `<div class="circle-component ${objectType.classHtml}" data-type="${objectType.type}">
        <img class="img-fluid" src="${objectType.image}"  alt="">
        </div>`;
    }
    selectUser(type) {

    }
    templateCircleGame(objectType, user) {
        return `<div class="${objectType.classHtml} circle-component xl-circle-component">
                <img class="img-fluid" src="${objectType.image}" alt="">
            </div><h3>${user}</h3>`;
    }
    figureTriangule() {
        return '<span class="line"></span>';
    }
    randomObject() {
        let started, duration, desired, itemObject;
        let listCircles = [this.templateCircleGame(rock, players.OPONENT), this.templateCircleGame(paper, players.OPONENT), this.templateCircleGame(scissors, players.OPONENT)];
        let listCirclesObject = [rock, paper, scissors];
        duration = 2000;
        desired = '50';
        started = new Date().getTime();
        var t = this;
        let animationTimer = setInterval(function() {
            if (new Date().getTime() - started > duration) {
                clearInterval(animationTimer);
                t.validateGame(itemObject);
            } else {
                let random = Math.floor(Math.random() * 3);
                document.querySelector('.opponent').innerHTML = listCircles[random];
                itemObject = listCirclesObject[random];

            }
        }, 100);
    }
    validateGame(randomOpponent) {
        let message;
        let pointsHtml = document.querySelector('#points');

        if (randomOpponent.type == this.youPicked) {
            message = messages.DRAW;
        } else {

            switch (randomOpponent.type) {
                case objects.ROCK:
                    if (this.youPicked == objects.PAPER) {
                        message = messages.WINNER;
                        this.points++;
                    }
                    if (this.youPicked == objects.SCISSORS) {
                        message = messages.LOSE;
                        this.points--;
                    }
                    break;
                case objects.PAPER:
                    if (this.youPicked == objects.SCISSORS) {
                        message = messages.WINNER;
                        this.points++;
                    }
                    if (this.youPicked == objects.ROCK) {
                        message = messages.LOSE;
                        this.points--;
                    }
                    break;
                case objects.SCISSORS:
                    if (this.youPicked == objects.ROCK) {
                        message = messages.WINNER;
                        this.points++;
                    }
                    if (this.youPicked == objects.PAPER) {
                        message = messages.LOSE;
                        this.points--;
                    }
                    break;
            };
            if (message == messages.WINNER) {
                this.playerHtml.querySelector('div').classList.add('animated-image');
            } else {
                this.oppenentObject.querySelector('div').classList.add('animated-image');
            }
        }

        this.gameHtml.querySelector('h2').innerHTML = message;
        pointsHtml.querySelector('span').innerHTML = this.points;

    }
}
export {
    GamerOperations
}