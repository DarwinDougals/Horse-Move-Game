    var renderer  =(function(){
        return window.requestAnimationFrame || function(callback){
            setTimeout(callback, 1000/60);
        }
    })();

    var mainEngine = function(){

        console.log('Main engine is not initialised');
    };

      function startGame(func){
       if(typeof func == 'function' ){
           mainEngine = func;
       }
       startLoop();
   }


    function startLoop(){
        mainEngine();
        renderer(startLoop);
    }

