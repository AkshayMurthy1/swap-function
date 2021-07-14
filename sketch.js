


function setup(){
 
  a = prompt("Who are you?");
  b = prompt("What is your age?");
  a2 = createButton("Click here to swap");
  }


function draw()
{a2.mousePressed(swap)
}

function swap(){
  [a,b]=[b,a]
  console.log(a,b)
}