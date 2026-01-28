src(o0)
  .blend(
    osc(6, 0.1, 9.5)
      .layer(
        src(s0)
          .blend(s1, () => Math.sin(time))
          .blend(s2, () => Math.sin(time / (3 / 2)))
          .luma()
      )
    .modulate(noise(2))
    .pixelate(250, 400),
  0.01
)
.out(o0);
