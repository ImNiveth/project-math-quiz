player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player_1 + " : ";
document.getElementById("player_2").innerHTML = player_2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_Q").innerHTML = "Question Turn - " + player_1;
document.getElementById("player_A").innerHTML = "Answer Turn - " + player_2;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x "+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";  
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){

        if(answer_turn == "player_1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player_1"){
        question_turn = "player_2"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player_2;
    }
    else{
        question_turn = "player_1"
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player_1;
    }
}