var time = 0;
var bg;
var speed = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  let fov = 50.0;
  perspective(PI * fov / 180.0, width/height, 0.1, 2000);
}

function draw() {
  background(46, 40, 54);
  if (time > 270 && time <= 300) {
    ambientLight(0, 0, 0);
    pointLight(155, 155, 55, 100, -100, 300);
  } else {
    ambientLight(20, 20, 70); 
    directionalLight(255, 175, 255, 10, 20, -5);
  }
  // set light position
  time += 0.1;
  if (time > 80 && time < 98) {
    speed += 0.5;
  } else if (time > 210 && time < 245) {
    speed += 0.5;
  } else if (time > 245 && time < 270) {
    speed += 1;
  } else if (time > 270) {
    speed += 1;
  }
  //time = 279;
  noStroke();  // do not draw polygon outlines  
  let delta = 25;
  scene1();
  scene2();
  scene3();
  scene4();
  scene5();
  scene6();
  scene7();
  scene8();
  scene9();
  scene10();
  scene11();
}

function scene1() {
  if (time <= 5) {
    camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
    push();
    //spaceship(0, -70, 0, 1, 12);

    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene2() {
  if (time > 5 && time <= 70) {
    camera(0, 0, 204 - (time * 0.5), 0, 0, 0, 0, 1, 0);
    push();

    duck(-42 + (time * 0.5), 20, 90, 0.3, 90);

    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene3() {
  if (time > 70  && time <= 80) {
    camera(-3, 30, 130 - (time * 0.5), 0, 20, 0, 0, 1, 0);
    push();

    duck(-2.5, 32, 70, 0.3, 0);

    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene4() {
  if (time > 80 && time <= 98) {
    camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
    push();

    grapes(-2, -10 + (speed/2), 75, 0.12, 0 + (speed/2));
    duck(-2.5, 32, 70, 0.3, 0);


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene5() {
  if (time > 98 && time <= 108) {
    camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
    push();

    grapes(-2, 41, 75, 0.12, 10);
    duck(-2.5, 32, 70, 0.3, 0);


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene6() {
  if (time > 108 && time <= 128) {
    camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
    push();

    grapes(-2, 41, 75, 0.12, 10);
    if (time > 120 && time < 124) {
      duck(-2.5, 32, 70, 0.3, 40);
    } else if (time > 112 && time < 116) {
      duck(-2.5, 32, 70, 0.3, 40);
    } else if (time > 116 && time < 120) {
      duck(-2.5, 32, 70, 0.3, -40);
    } else if (time > 108 && time < 112) {
      duck(-2.5, 32, 70, 0.3, -40);
    } else {
      duck(-2.5, 32, 70, 0.3, 0);
    }


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene7() {
  if (time > 128 && time <= 155) {
    camera(-3, 40, 120 - (time/4), 0, 60, 0, 0, 1, 0);
    push();

    grapes(-2, 44, 75, 0.12, 10);
    duck(-2.5, 35, 70, 0.3, 0);


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene8() {
  if (time > 155 && time <= 190) {
    push();

    if (time > 155 && time < 160) {
      camera(-3, 28, 80, 0, 25, 0, 0, 1, 0);
      angryDuck(-2.5, 32, 70, 0.3, 0);
    } else if (time > 160 && time < 164) {
      camera(-3, 40, 80, 0, 35, 0, 0, 1, 0);
      angryDuck(-2.5, 34, 70, 0.3, 0);
      grapes(-2, 42, 75, 0.12, 10);
    } else if (time > 164 && time < 168) {
      camera(-3, 28, 80, 0, 25, 0, 0, 1, 0);
      angryDuck(-2.5, 32, 70, 0.3, 35);
    } else if (time > 168 && time < 172) {
      camera(-3, 40, 80, 0, 35, 0, 0, 1, 0);
      angryDuck(-2.5, 34, 70, 0.3, 0);
      grapes(-2, 42, 75, 0.12, 10);
    } else if (time > 172 && time < 176) {
      camera(-3, 28, 80, 0, 25, 0, 0, 1, 0);
      angryDuck(-2.5, 32, 70, 0.3, 35);
    } else if (time > 180 && time < 190){
      camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
      angryDuck(-2.5, 32, 70, 0.3, 35);
      grapes(-2, 41, 75, 0.12, 10);
      push();
      fill(255, 0, 0);
      translate(5, 20, 30);
      box(2, 5, 2);
      translate(0, 5);
      box(2, 2, 2);
      pop();
    } else {
      camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
      angryDuck(-2.5, 32, 70, 0.3, 35);
      grapes(-2, 41, 75, 0.12, 10);
    }

    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene9() {
  if (time > 190 && time <= 210) {
    camera(-3, 30, 135, 0, 20, 0, 0, 1, 0);
    push();

    speed += 0.5;
    grapes(-2, 41, 75, 0.12, 10);
    angryDuck(-2.5, 32, 70, 0.3, -35);
    alienBeam(0, 1, radians(2 * speed));


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene10() {
  if (time > 210 && time <= 217) {
    camera(-3, 30, 135 - (time * 0.19), 0, 20, 0, 0, 1, 0);
    push();

    grapes(-2, 41, 75, 0.12, 10);
    angryDuck(-2.5, 32, 70, 0.3, -35);
    alienBeam(0, 1, radians(2 * speed));


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }

  if (time > 217 && time <= 245) {
    if (time > 217 && time <= 221) {
      camera(-3, 30, 93, 0, 20, 0, 0, 1, 0);
    } else {
      camera(-3, 30 - (time * 0.3), 93, 0 + (time * 0.3), 20 - (time * 0.3), 0, 0, 1, 0);
    }
    push();

    grapes(-2, 41, 75, 0.12, 10);
    angryDuck(-2.5, 32, 70, 0.3, -35);
    alienBeam(-2, 1, radians(2 * speed));
    spaceship(40, -50, 30, 1, 0);


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }

  if (time > 245 && time <= 270) {
    camera(-3, -43.5, 93 + (time * 0.5) + 2, 73.5, -53.5, 0, 0, 1, 0);
    push();
    spaceship(-200 + speed, -50, 30, 1, 0);


    //forest
    tree(25, -20, 3, 1);
    tree(100, 10, 3, 0.5);
    tree(80, -20, 3, 1);
    tree(0, 10, 3, 0.5);
    tree(-20, -20, 3, 1);
    tree(-100, 10, 3, 0.5);
    tree(-70, -20, 3, 1);
    tree(15, -20, -30, 1);
    tree(90, 10, -30, 0.5);
    tree(70, -20, -30, 1);
    tree(-65, 10, -30, 0.5);
    tree(-10, -20, -30, 1);
    tree(-90, 10, -30, 0.5);
    tree(-70, -20, -30, 1);
    tree(-100, -20, -30, 1);
    tree(45, -20, 100, 1);
    tree(35, 10, 200, 0.5);
    tree(-40, -20, 100, 1);
    tree(-50, -30, -100, 1.5);
    grass(50);
    pop();
  }
}

function scene11() {
  if (time > 270 && time <= 300) {
    camera(0, 0, 100 + (speed), 0, 0, 0, 0, 1, 0);
    push();
    spaceship(0, 0, -200, 1, 0);
    grass(50)
    fill(255, 195, 0);
    translate(0, 50, -400);
    ambientLight(0);
    emissiveMaterial(255, 195, 0);
    sphere(100);
    pop();
  }
}

function duck(Tx, Ty, Tz, s, r) {
  push();
  translate(Tx, Ty, Tz);
  scale(s);
  rotateY(radians(r));
  //duck body
  fill(255, 194, 51);
  push();
  translate(0, 0, 0);
  box(18, 18, 24);
  pop();
  
  //duck head
  push();
  translate(0, -16);
  box(12, 18, 12);
  pop();
  
  //duck hairs
  fill(0, 0, 0);
  push();
  translate(0, -27);
  rotateZ(radians(140));
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  push();
  translate(1, -27);
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  push();
  translate(2, -27);
  rotateZ(radians(-140));
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  //duck wings
  fill(255, 194, 51);
  push();
  translate(-10, 0);
  box(3, 12, 18);
  pop();
  
  push();
  translate(10, 0);
  box(3, 12, 18);
  pop();

  //duck bill
  fill(245, 101, 61);
  push();
  translate(0, -16, 7.5);
  box(12, 6, 3);
  pop();
  
  //eyes
  fill(0, 0, 0);
  push();
  translate(-4, -22, 6);
  rotateX(radians(90));
  cylinder(1.25, 1.25);
  pop();
  
  push();
  translate(4, -22, 6);
  rotateX(radians(90));
  cylinder(1.25, 1.25);
  pop();


  //duck right leg
  push();
  translate(0, 5);
  fill(245, 101, 61);
  push();
  translate(-6, 14);
  box(3, 20, 3);
  pop();
  
  //duck feet
  push();
  translate(-6, 21, 1);
  scale(1.5);
  box(9, 3, 6);
  pop();
  pop();

  //duck left leg
  push();
  translate(0, 5);
  fill(245, 101, 61);
  push();
  translate(6, 14);
  box(3, 20, 3);
  pop();
  
  push();
  translate(6, 21, 1);
  scale(1.5);
  box(9, 3, 6);
  pop();

  pop();
  
  pop();
}

function grass(Ty) {
  push();
  fill(144, 250, 93);
  push();
  translate(0, Ty, 0);
  box(600, 5, 600);
  pop();
  pop();
}

function tree(Tx, Ty, Tz, s) {
  push();
  fill(104, 252, 93);
  scale(s);
  push();
  translate(Tx, Ty, Tz);
  rotateX(radians(180));
  cone(20, 70);
  pop();
  
  fill(81, 39, 21);
  push();
  translate(Tx, Ty + 50, Tz);
  box(10, 70, 10);
  pop();
  pop();
}

function spaceship(Tx, Ty, Tz, s, r) {
  push();

  translate(Tx, Ty, Tz);
  scale(s);
  rotateX(r);

  fill(75, 75, 75);
  push();
  ellipsoid(25, 5);
  pop();

  fill(255, 255, 0);
  push();
  translate(0, -5);
  ellipsoid(12, 7);
  pop();

  push();
  translate(15, -3);
  sphere(3);
  pop();

  push();
  translate(-15, -3);
  sphere(3);
  pop();

  push();
  translate(10, -3, 10);
  sphere(3);
  pop();

  push();
  translate(-10, -3, 10);
  sphere(3);
  pop();

  push();
  translate(10, -3, -10);
  sphere(3);
  pop();

  push();
  translate(-10, -3, -10);
  sphere(3);
  pop();

  pop();
}

function grapes(Tx, Ty, Tz, s, r) {
  push();

  fill(255, 0, 255);
  translate(Tx, Ty, Tz);
  scale(s);
  rotate(r);

  push();
  translate(10, 10);
  sphere(5);
  pop();

  push();
  translate(5, 5);
  sphere(5);
  pop();

  push();
  translate(12, 5);
  sphere(5);
  pop();

  push();
  translate(19, 5);
  sphere(5);
  pop();

  push();
  translate(16, 10);
  sphere(5);
  pop();

  push();
  translate(13, 15);
  sphere(5);
  pop();

  pop();
}

function angryDuck(Tx, Ty, Tz, s, r) {
  push();
  translate(Tx, Ty, Tz);
  scale(s);
  rotateY(radians(0));
  //duck body
  fill(255, 194, 51);
  push();
  translate(0, 0, 0);
  box(18, 18, 24);
  pop();
  
  //duck head
  push();
  translate(0, -16);
  box(12, 18, 12);
  pop();
  
  //duck hairs
  fill(0, 0, 0);
  push();
  translate(0, -27);
  rotateZ(radians(140));
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  push();
  translate(1, -27);
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  push();
  translate(2, -27);
  rotateZ(radians(-140));
  scale(1, 3, 1);
  box(0.5, 3, 0.5);
  pop();
  
  //duck wings
  fill(255, 194, 51);
  push();
  translate(-10, 0);
  box(3, 12, 18);
  pop();
  
  push();
  translate(10, 0);
  box(3, 12, 18);
  pop();

  //duck bill
  fill(245, 101, 61);
  push();
  translate(0, -16, 7.5);
  box(12, 6, 3);
  pop();
  
  //eyes
  fill(0, 0, 0);
  push();
  translate(-4, -22, 6);
  rotateX(radians(90));
  cylinder(1.25, 1.25);
  pop();
  
  push();
  translate(4, -22, 6);
  rotateX(radians(90));
  cylinder(1.25, 1.25);
  pop();

  push();
  translate(-4, -24, 6);
  rotate(r);
  box(5, 2, 0.5);
  pop();

  push();
  translate(4, -24, 6);
  rotate(-r);
  box(5, 2, 0.5);
  pop();


  //duck right leg
  push();
  translate(0, 5);
  fill(245, 101, 61);
  push();
  translate(-6, 14);
  box(3, 20, 3);
  pop();
  
  //duck feet
  push();
  translate(-6, 21, 1);
  scale(1.5);
  box(9, 3, 6);
  pop();
  pop();

  //duck left leg
  push();
  translate(0, 5);
  fill(245, 101, 61);
  push();
  translate(6, 14);
  box(3, 20, 3);
  pop();
  
  push();
  translate(6, 21, 1);
  scale(1.5);
  box(9, 3, 6);
  pop();

  pop();
  
  pop();
}

function alienBeam(Ty, s, r) {
  push();

  translate(5, Ty, 58);
  rotateZ(217);
  rotateY(r);
  scale(s);
  push();
  fill(144, 255, 13, 100);
  cone(40, 90);
  pop();

  pop();
}