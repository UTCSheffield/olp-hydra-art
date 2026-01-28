gradient([1,2,4])
  .layer(src(o0).luma())
  .modulate(noise(2)).pixelate(20,20)
  .layer(src(o0).luma())
  .blend(
    src(s0)
      .blend(s1, () => Math.sin(time))
      .blend(s2, () => Math.sin(time/(3/2)))
      .modulate(noise(1)))
  .scrollX(0, 0.1)
  .out(o0);
