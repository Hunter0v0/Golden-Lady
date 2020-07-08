var imgs = box1.getElementsByTagName('img');
var lis=box1.getElementsByTagName('li');
var div=document.getElementById('box1');
var btns=box1.getElementsByTagName('button');
console.log(imgs);

var lunbo1=new lunbo(imgs,lis,div,btns,0);

function lunbo(imgs,lis,div,btns,j){
    this.imgs=imgs;
    this.lis=lis;
    this.div=div;
    this.btns=btns;
    this.j=j;
}

lunbo.prototype.init=function(){
    //初始化对象
    this.timer(1);
    this.click();
}
lunbo.prototype.click=function(){
    var obj=this;
    for(var i in this.btns){
        this.btns[i].onclick=function(){
                if(this.innerHTML=="&gt;"){
                //点击的右滚播
                obj.move(1);
                console.log(1);
            }else{
                //左滚播
                obj.move(-1);
                console.log(-1);
            }
        }
        
    }
    for(var i in lis){
        this.lis[i].onclick=function(){
            obj.j=parseInt(this.getAttribute('name'));
            obj.move();
        }
    }
    this.div.onmouseover=function(){
        obj.timer();
    }
    this.div.onmouseout=function(){
        obj.timer(1);
    }
}

lunbo.prototype.move=function(x){
    if(x!==undefined){
        this.j+=x;
        if(this.j==4){
            this.j=0;
        }else if(this.j==-1){
            this.j=3;
        }
    }
    for(var i in imgs){
        this.imgs[i].className="";
        this.lis[i].className="";
    }
    this.imgs[this.j].className="active"
    this.lis[this.j].className="active";
}

lunbo.prototype.timer=function(x){
    var obj=this;
    if(x===undefined){
        clearInterval(obj.dsq);
    }else{
        obj.dsq=setInterval(function(){
            obj.move(1);
        },2000);
    }
}

window.onload=function(){
    lunbo1.init();
}