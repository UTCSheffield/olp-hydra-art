src(s0)
  .blend(s1, () => Math.sin(time))
  .blend(s2, () => Math.sin(time/(3/2)))
  .scrollX(0.1,0.2)
  .pixelate(9.942, 21.067)
  .kaleid(4)
  .rotate(0.421, 0.127)
  .kaleid(4)
  .out();
