
var canvas =  document.getElementById('cnv');
var contex = canvas.getContext('2d');
var width = 600,
    height = 600;
canvas.width = width;
canvas.height = height;
canvas.style. backgroundColor = '#D0D0D0';
contex.fillStyle = '#F4F4F4';
contex.strokeStyle = '#A0A0A0';
contex.lineWidth = 4;

function initCanvas(){
    var canvas =  document.getElementById('cnv');
    var contex = canvas.getContext('2d');
    width = 525;
    height = 525;
    canvas.width = width;
    canvas.height = height;
    canvas.style. backgroundColor = '#D0D0D0';
    contex.fillStyle = '#F4F4F4';
    contex.strokeStyle = '#A0A0A0';
    contex.lineWidth = 4;
}

canvas.onclick = function(event){
    contex.clearRect(0 ,0 , width ,height);
    var x = event.pageX,
        y = event.pageY;
    for(i = 0; i < rect.length; i++){
        if(isCursorInRect(x,y,rect[i])){
            rect[i].select();
        }
    }
};

var fillRect = function(x, y, w, h){
    contex.fillRect(x, y, w, h);
};

var drawRect = function(x, y, w, h){
    contex.strokeRect(x, y, w, h);
};
var fillText = function(i, x, y){
    contex.fillStyle = "black";
    contex.font = "30px Arial";
    contex.textAlign = "center";
    contex.fillText(i, x+30, y+39);
    contex.fillStyle = '#F4F4F4';

};



var Rect = function(i, x, y, w, h,xx,yy){
    this.xx = xx;
    this.yy = yy;
    this.i = i;
    this.x = x;
    this.w = w;
    this.h = h;
    this.y = y;
    this.selected = false;
};


Rect.prototype = {
    fillNumber : function(i){
        fillText(i, this.x, this.y)
    },
    draw : function(){
        fillRect(this.x, this.y, this.w, this.h);
    },
    stroke : function(){
        drawRect(this.x, this.y, this.w, this.h);
    },
    select : function(i,rect){
        if(this.selected == true){
            this.selected = !this.selected;
            this.i-=1;
            stepArr.shift();

        } else{
        this.selected = !this.selected;
            this.i=i;
        }
        return this.i;
    }
};

//initialization start
var stepArr =[];
var i = 0, rect = [], y = 5, x = 5, j = 0;

for( ; i < 64; i++){
    if(i%8 == 0 && i!=0){
        y+=65;
        j=0;
    }
    rect.push(new Rect(0, x + j *(60 + 5),y, 60 ,60,0,0));
    j++;
    contex.fillStyle = '#F4F4F4';
}
var iterator=0;

for(i=0;i<8;i++){
    for(j=0;j<8;j++){
        rect[iterator].xx = i;
        rect[iterator].yy = j;
        iterator++;
    }
}
//end

var isCursorInRect = function(x,y,rect){
     if(x > rect.x && x < rect.x + rect.w && y > rect.y && y < rect.y + rect.w){
        return true;
    }
     return false;
};
var xx = [1,2,2,1,-1,-2,-2,-1];
var yy = [-2,-1,1,2,2,1,-1,-2];

var stepRight = function(stepArr,rect,count){
    for(var i = 0; i < 8; i++){
        if((rect.xx == stepArr[stepArr.length-1].xx) && (rect.yy == stepArr[stepArr.length-1].yy)){
            return true;
        }else if((rect.xx + xx[i] == stepArr[1].xx) && (rect.yy + yy[i] == stepArr[1].yy)){
            console.log('right');
            return true;
        }

    }
    return false;


};
