document.addEventListener('DOMContentLoaded',function(){

var box = [];

var generate = document.getElementById('generate');
generate.addEventListener('click',function(){
        var d = new Die();
        box.push(d);
        
  });
 rolling = document.addEventListener('click',function(){
        var i;
     for (i = 0; i < box.length; i++) {
         box[i].roll();
     }
    });

var container = document.createElement('div');
var rolling = document.getElementById('rolling');
 

function Die () {
    var existingDice = document.getElementsByClassName('dice').length;

    this.div = document.createElement('div');
    this.div.className = 'dice'; 
    container.appendChild(this.div);
    this.div.innerHTML = this.value;
    document.body.appendChild(container);
    this.div.addEventListener('dblclick',this.removeDie.bind(this));
    
}
 Die.prototype.roll = function(){
     this.value = Math.ceil(Math.random() * 6);
      this.div.innerHTML = this.value;         
 }
Die.prototype.removeDie = function(){
    this.div.remove();

        var index = box.indexOf(this);
        box.splice(index,1);
}
    
   

    





});













