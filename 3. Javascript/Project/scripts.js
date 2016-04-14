        //Everything Here works EXCEPT I need to make circles appear too, not just squares
        var clickedTime;
        var createdTime;
        var reactionTime;
        
        Date.now();
        
        
        function makeBox() {

            
            var time = Math.random()*5000;
            setTimeout(function() {
                colors = ["red", "green", "blue", "black"]
                randColor = Math.floor(Math.random()*4)
                randomSize = (Math.floor(Math.random()*200)).toString() + 'px';
                randomLocation = (Math.floor(Math.random()*500)).toString() + 'px';
                document.getElementById("box").style.backgroundColor = colors[randColor];
                if (Math.random() > 0.5){
                    document.getElementById("box").style.borderRadius = randomSize;
                }
                else{
                    document.getElementById("box").style.borderRadius = "0";   
                }
                document.getElementById("box").style.borderRadius = "0";
                document.getElementById("box").style.height = randomSize;
                document.getElementById("box").style.width = randomSize;
                document.getElementById("box").style.top = randomLocation;
                document.getElementById("box").style.left = randomLocation;
                document.getElementById("box").style.display = 'block';
                
                createdTime = Date.now();
            }, time); 
            
            
        }
        
        document.getElementById("box").onclick=function(){
            clickedTime = Date.now();
            
            reactionTime = (clickedTime - createdTime)/1000;
            document.getElementById("time").innerHTML = reactionTime;
            
            this.style.display="none";
            makeBox();
        };
        
        makeBox();
