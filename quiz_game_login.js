function addPlayer(){
    player_1 = document.getElementById("Player1_Name_Input").value;
    player_2 = document.getElementById("Player2_Name_Input").value;

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location = "quiz_game_page.html";
}