noise(6,.05)
.mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )
.mult(
    noise(9,.03).brightness(1.2).contrast(2)
    .mult( osc(67,0, ()=>Math.sin(time/67)+13 ) )
)
.diff(
    noise(30,.04).brightness(.2).contrast(1.3)
    .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )
    .rotate( ()=>time/66 )
)
.scale( ()=>Math.sin(time/6.2)*.67+.15 )
.modulateScale(
    osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )
    .rotate( ()=>time/25 ).scale(.39).scale(2,.12,1).invert()
    , ()=>Math.sin(time/10.6)*2.10+6  )
.rotate( ()=>time/67 )
.mult( shape(100,18,.01).scale(67,67,67) )
.out()