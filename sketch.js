function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
 
}

function draw() {
  background("black"); 
  translate(200,200) 
  var hr = hour()
  var mn = minute()
  var sec = second()

 var scAngle = map(sec,0,60,0,360)
 var mnAngle = map(mn,0,60,0,360)
 var hrAngle = map(hr%12,0,12,0,360)

 push()
 rotate(scAngle)
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
 pop()
 stroke(255,0,0)
 strokeWeight(10)
 noFill()
 arc(0,0,300,300,0,scAngle)

 push()
 rotate(mnAngle)
 stroke(0,128,0)
 strokeWeight(7)
 line(0,0,75,0)
 pop()
 stroke(0,128,0)
 strokeWeight(10)
 noFill()
 arc(0,0,280,280,0,mnAngle)

 push()
 rotate(hrAngle)
 stroke(0,0,255)
 strokeWeight(7)
 line(0,0,50,0)
 pop()
 stroke(0,0,255)
 strokeWeight(10)
 noFill()
 arc(0,0,260,260,0,hrAngle)



  //arcs for minue and hours 280,260
 //minutes line 75
//hours line 50
}