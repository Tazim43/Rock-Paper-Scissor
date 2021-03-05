// main function starts from here
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = botChoiceElement(botChoiceFinder());
    var result = winnerFinder(humanChoice, botChoice);
    var message = finalMessage(result);
    rpsFrontEnd(humanChoice,botChoice,message);
    // 1=win | 0=lost | 2= tied
    function rpsFrontEnd(humanChoice,botChoice,message){
        var images = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissor': document.getElementById('scissor').src
        };
    
        // let's remove all images 
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();
    
        // now let's put new images and result
    
        var humanDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        
        // 3div first for human choice
        //second for message and third for bot choice
        humanDiv.innerHTML='<h2 style="color:#355de0">YOU</h2><img class="human-choice" src="'+images[humanChoice]+'">';
        messageDiv.innerHTML='<h1 '+'style="color:'+message['color']+'"'+'>'+message['message']+'</h1>';
        botDiv.innerHTML='<h2 style="color:#f33e3e">BOT</h2><img class="bot-choice" src="'+images[botChoice]+'">';
        document.getElementById('game-area').appendChild(humanDiv);
        document.getElementById('game-area').appendChild(messageDiv);
        document.getElementById('game-area').appendChild(botDiv);
    
    }
    
}
// main function ends here

// Generate a number between 0,1and 2;
function botChoiceFinder(){
    return Math.floor(Math.random()*3);
}

function botChoiceElement(num){
    return ['rock','paper','scissor'][num];
}
// This will find the winner
function winnerFinder(hc, bc){
    var resultDatabase = {
        'rock':{'paper':1, 'scissor':0, 'rock':2},
        'paper':{'paper':2, 'rock':0, 'scissor':1},
        'scissor':{'scissor':2, 'paper':0, 'rock':1}
    };

    var humanScore = resultDatabase[bc][hc];
    return humanScore;
    // return the score 0=lost, 1=win , 2=tied.
}

// final message finder

function finalMessage(score){
    if(score===0){
        return {'message':'You Lost','color':'red'};
    }
    else if(score===1){
        return {'message':'You Win','color':'green'};
    }else if(score===2){
        return {'message':'You Tied','color':'#d1b010'};
    }
}

