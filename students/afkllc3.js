osc(3,0.5,[0,0,2].fast())
  .repeat(3)
  .mask(shape([4,20],0.5,0.2))
.rotate( ({time}) => time%360 ,[30,0])

.modulate(0, 4)
.luma([Math.sin(time),Math.cos(time)].fast(100),[0],100)
.modulate(noise([2,0].fast()))
  .out()