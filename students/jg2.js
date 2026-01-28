osc(4, 0.123, 0.8)
  .color(Math.sin(time), Math.sin(time), Math.sin(time))
  .rotate(0.30, 0.1)
  .pixelate(2, 20)
  .modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))
  .invert()
  .out(o0);
