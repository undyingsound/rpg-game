// Create Characters as Objects
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


//Variables
let playerChoose;
let enemyChoose;
let deadArray;
let enemyCount = 3;


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

            $('.player').css('opacity', '.5');
            $('.player').detach().appendTo('.daTwo');
            $(".enemySpot").show();
            $(".playerSpot").show();
            $(".btn").show();
            $(".actionBox").show();
            $(".enemySelect h3").hide();
            enemyChoose = $(this).data("value");
            $(this).detach().appendTo('.daOne');
            $(".enemySpot .card-img-top").attr("src", Characters[enemyChoose].imageUrl);
            document.querySelector('.enemySpot .card-title').innerText = Characters[enemyChoose].name;
            document.querySelector('.enemySpot .card-text').innerText = Characters[enemyChoose].health;
            $(".playerSpot .card-img-top").attr("src", Characters[playerChoose].imageUrl);
            document.querySelector('.playerSpot .card-title').innerText = Characters[playerChoose].name;
            document.querySelector('.playerSpot .card-text').innerText = Characters[playerChoose].health;
            $(playerChoose).addClass(".hero");
            $(enemyChoose).addClass(".villain");

        }

        //Select a Character
        if (playerChoose == null) {
            $(".charSelect").hide();
            $(".enemySelect h3").show();
            $(this).css('border', 'solid 2px yellow');
            $(this).css('opacity', '.7');
            playerChoose = $(this).data("value");
            $(this).detach().appendTo('.daOne');


        }

    });


    //Click Reset
    $(".rst").click(function () {
        location.reload(true);
    });


    //Click Attack

    $(".atk").click(function () {
        if (playerChoose != null || enemyChoose != null) {
            
            Characters[enemyChoose].health -= Characters[playerChoose].attack;
            console.log(Characters[enemyChoose].health);
            Characters[playerChoose].health -= Characters[enemyChoose].counter;
            console.log(Characters[playerChoose].health);
            document.querySelector('.enemySpot .card-text').innerText = Characters[enemyChoose].health;
            document.querySelector('.playerSpot .card-text').innerText = Characters[playerChoose].health;
            Characters[playerChoose].attack + Characters[playerChoose].attack;
            console.log(Characters[playerChoose].attack += Characters[playerChoose].attack);


        }

        document.querySelector('.actionBox').innerText = "You attacked " + Characters[enemyChoose].name + " for " + Characters[playerChoose].attack + " damage!!" + " You were counter-attacked by " + Characters[enemyChoose].name + " for " + Characters[enemyChoose].counter + " damage! ";

        if (Characters[playerChoose].health <= 0) {
            document.querySelector('.actionBox').innerText = "You were knocked TF out! Hit Restart to Play Again! ";
    
        }
    
        else if (Characters[enemyChoose].health <= 0) {
            document.querySelector('.actionBox').innerText = "You knocked out " + Characters[enemyChoose].name + "! Select a new Enemy!";
            enemyCount--;
            $(".enemySelect h3").show();
            console.log(enemyChoose);
            $(".enemySpot").hide();
            
    
        }




    })

    



    //Display actions in container
    //If the enemy wins, allow restart
    //If player wins, eliminate opponent
    //Player selects new opponent, repeat;
    //If player beats all opponents, Player Wins


    //Gray out unselected Opponent



});
