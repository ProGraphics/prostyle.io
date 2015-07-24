<p class="b20" markdown="1">Defines the amount of space injected between the frame and the area used by [flows](#){:data-toc="flow"} when it _in frame_.  The value represents a percentage of the canvas width or height depending upon the configured aspect ratio of the frame and the actual aspect ratio of the canvas.  Valid values range from <samp class="number">0</samp> to <samp class="number">50</samp>, although a value of _50_ (50% on each side) would shrink the flows down to nothing.</p>

* _default value:_ <samp class="number">0</samp>

<pre data-ace="readonly" style="width:100%;">{
  frame:{
    setup:{
      padding:10
    }
  }
}</pre>