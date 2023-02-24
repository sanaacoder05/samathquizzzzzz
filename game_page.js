document.body.style.backgroundImage = "url('bas.jpg')";
var player_1 = localStorage.getItem("player_1");
var player_2 = localStorage.getItem("player_2");

var score_1 = 0;
var score_2 = 0;

document.getElementById("player1_name").innerHTML=player_1 + ": " ;
document.getElementById("player2_name").innerHTML=player_2 + ": " ;

document.getElementById("player_score1").innerHTML=score_1  ;
document.getElementById("player_score2").innerHTML=score_2  ;

document.getElementById("question").innerHTML="Question Turn : " + player_1 ;
document.getElementById("answer").innerHTML="Answer Turn : " + player_2 ;

function Send(){
    get_value = document.getElementById("ans").value;
    get_value1 = document.getElementById("ans1").value;
    value = parseInt(get_value) * parseInt(get_value1);
     title = "<h2 id ='prossing'> Q."+get_value+" X "+get_value1+"</h2><br><br>";
     input = "Answer <input type = 'text' id = 'input'>";
   button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
    Output = title+input+button;
    document.getElementById("output").innerHTML=Output;
    document.getElementById("ans").value="";
    document.getElementById("ans1").value="";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    box = document.getElementById("input").value;

    if(box == value){
        if(answer_turn == "player1"){
            score_1 += 1 ;
            document.getElementById("player_score1").innerHTML=score_1;
        }

        else{
            score_2 += 1 ;
            document.getElementById("player_score2").innerHTML=score_2; 
        }
    }


    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("question").innerHTML="Question Turn : " + player_2;
        console.log("Question Turn : " + player_2);
    }
    else{
        question_turn = "player1"
        document.getElementById("question").innerHTML="Question Turn : " + player_1;
        console.log("Question Turn : " + player_1); 
    }
  
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("answer").innerHTML="Answer Turn : " + player_2;
        console.log("Question Turn : " + player_2);
    }
    else{
        answer_turn = "player1"
        document.getElementById("answer").innerHTML="Answer Turn : " + player_1;
        console.log("Answer Turn : " + player_1); 
    }  
    document.getElementById("output").innerHTML="";
}