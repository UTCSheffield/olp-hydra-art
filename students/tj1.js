noise(6,.05)
.mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )
.mult(
    noise(9,.03).brightness(1.2).contrast(2)
    .mult( osc(9,0, ()=>Math.sin(time/3)+13 ) )
)
.diff(
    noise(15,.04).brightness(.2).contrast(1.3)
    .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )
    .rotate( ()=>time/33 )
)
.scale( ()=>Math.sin(time/6.2)*.12+.15 )
.modulateScale(
    osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )
    .rotate( ()=>time/25 ).scale(.39).scale(1,.6,1).invert()
    , ()=>Math.sin(time/10.6)*2.10+6  )
.rotate( ()=>time/44 )
.mult( shape(200,.18,.02).scale(2,.12,2) )
.out()