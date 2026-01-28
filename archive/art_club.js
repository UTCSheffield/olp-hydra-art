setFunction(colors2glsl("#ee7d00,#009bb4,#e0d3e6,#006F81"))
osc(10,-0.1,0.5).colours(1).kaleid(500).modulate(
src(s0)
    .blend(s1, () => Math.sin(time))
    .blend(s2, () => Math.sin(time/(3/2)))
,1)
.blend(src(o0).scale(1.02))
.modulateScale(noise(0.1,0.1), .2)
.out()