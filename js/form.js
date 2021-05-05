class Form{


    constructor(){


    }

    display(){

        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(150,150);
        var input = createInput("name");
        input.position(170,250);
        var button = createButton("play");
        button.position(220,315);
        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html(" hello "+name)
            greeting.position(250,250);
        })

    }

}
