

//Store # for Health
let saHealth = 200
let rrHealth = 180
let utHealth = 180
let bsHealthy = 220


//Store # for Attack Power
let saAttack = 10
let rrAttack = 6
let utAttack = 8
let bsAttack = 12

//Store # for Counter-Attack Power
let saCounter = 20
let rrCounter = 12
let utCounter = 16
let bsCounter = 24

//Start Game
$(document).ready(function(){
//Select a Character
    $(".card").click(function(){
    $(".charSelect").hide();
    $(".enemySelect h3").show();
    });

//Store which Character was clicked
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
});


//Add Border over selected character
    $('.card.sa').click(function() {
      $(this).css('border', 'solid 2px yellow');
      $('card.sa').attr('disabled',true);  
    });
    $('.card.rr').click(function() {
        $(this).css('border', 'solid 2px yellow');
        $('card.sa').attr('disabled',true);  
      });
      $('.card.ut').click(function() {
        $(this).css('border', 'solid 2px yellow');
        $('card.sa').attr('disabled',true);  
      });
      $('.card.bs').click(function() {
        $(this).css('border', 'solid 2px yellow');
        $('card.sa').attr('disabled',true);  
      });
   

          
 




//Select Opponent
//Move Selected Opponent to placeholder area
//Gray out unselected Opponent
//Display Attack Button

//Click Attack
//Display actions in container
//If the enemy wins, allow restart
//If player wins, eliminate opponent
//Player selects new opponent, repeat;
//If player beats all opponents, Player Wins


});
