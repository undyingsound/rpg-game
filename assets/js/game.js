
let Characters = {
    'sa': {
        name: 'Stone Cold Steve Austin',
        health: 200,
        attack: 20,
        imageUrl: "assets/images/scsa.jpg",
        counter: 10
    },

    'rr': {
        name: 'Razor Ramon',
        health: 160,
        attack: 16,
        imageUrl: "assets/images/razor.jpg",
        counter: 8
    },
    'ut': {
        name: 'The Undertaker',
        health: 180,
        attack: 18,
        imageUrl: "assets/images/undertaker.jpg",
        counter: 9
    },
    'bs': {
        name: 'The Big Show',
        health: 220,
        attack: 22,
        imageUrl: "assets/images/bigshow.jpg",
        counter: 11

    }

}

let playerChoose;
let enemyChoose;
let deadArray;
enemyCount=3;






//Start Game
$(document).ready(function () {





    //Display Name and Health
    //Steve Austin
    document.querySelector('.sa .card-title').innerText = Characters['sa'].name;
    document.querySelector('.sa .card-text').innerText = Characters['sa'].health;
    //Razor Ramon
    document.querySelector('.rr .card-title').innerText = Characters['rr'].name;
    document.querySelector('.rr .card-text').innerText = Characters['rr'].health;
    //Undertaker
    document.querySelector('.ut .card-title').innerText = Characters['ut'].name;
    document.querySelector('.ut .card-text').innerText = Characters['ut'].health;
    //Big Show
    document.querySelector('.bs .card-title').innerText = Characters['bs'].name;
    document.querySelector('.bs .card-text').innerText = Characters['bs'].health;



    $(".card").click(function () {


        if (playerChoose != null) {
            $(".enemySelect h3").show();
            $(".card.ph.enemy").show();
            enemyChoose = $(this).data("value");
            $(".btn").show();
             $(".enemySpot .card-img-top").attr("src", Characters[enemyChoose].imageUrl);
            document.querySelector('.enemySpot .card-title').innerText = Characters[enemyChoose].name;
            document.querySelector('.enemySpot .card-text').innerText = Characters[enemyChoose].health;
            $(".playerSpot .card-img-top").attr("src", Characters[playerChoose].imageUrl);
            document.querySelector('.playerSpot .card-title').innerText = Characters[playerChoose].name;
            document.querySelector('.playerSpot .card-text').innerText = Characters[playerChoose].health;
            $(".enemySelect h3").hide();
            $(this).detach().appendTo('.daOne');
            $('.player').css('opacity', '.5');
            $('.player').detach().appendTo('.daTwo');
        }
    
    //Select a Character
        if (playerChoose == null) {
            $(".charSelect").hide();
            $(".enemySelect h3").show();
            $(this).css('border', 'solid 2px yellow');
            $(this).css('opacity', '.7');
            $(".card.ph").show();
            playerChoose = $(this).data("value");
            $(this).detach().appendTo('.daOne');
        }
    });


    //Click Attack
    //Display actions in container
    //If the enemy wins, allow restart
    //If player wins, eliminate opponent
    //Player selects new opponent, repeat;
    //If player beats all opponents, Player Wins




    //Store which Character was clicked
    /*
    $('.card.sa').click(function(){
        $(this).data('clicked',true);
    });
    $('.card.ut').click(function(){
        $(this).data('clicked',true);
    });
    $('.card.rr').click(function(){
        $(this).data('clicked',true);
    });
    $('.card.bs').click(function(){
        $(this).data('clicked',true);
    });*/


    //Gray out unselected Opponent



});
