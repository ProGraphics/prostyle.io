<p>The ratio between the frame’s width and height. A value of <samp class="number">2</samp> would define a frame that is twice as wide as it is tall. The aspect ratio provides a consistent rectangular shape regardless of how large the frame is scaled within the canvas.</p>

<p class="t20 b20">Some common aspect ratios include:</p>

| Ratio | Value | Description  |
|------:|------:|--------------|
|     1 |     1 | Box          |
|   4/3 |  1.33 | NTSC/PAL TV  |
|  16/9 |  1.77 | High Def TV  |
| 37/20 |  1.85 | Wide Screen  |
| 47/20 |  2.35 | Cinemascope  |

* _default value:_ <samp class="number">1.7777</samp>

<pre data-ace="readonly" style="width:100%;">{
  frame:{
    setup:{
      aspectRatio: 1.3333
    }
  }
}</pre>