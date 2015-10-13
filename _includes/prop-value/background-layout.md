<p class="b20" markdown="1">Defines how the image content is extended across the background surface.</p>

<p class="l20 b10" markdown="1"><samp class="string">'cover'</samp> - The image is stretched proportionally, maintaining the aspect ratio, to completely cover the background surface.  If the surface has a different aspect ratio then some of the image will not be visible.</p>
<p class="l20 b10" markdown="1"><samp class="string">'contain'</samp> - The image is stretched proportionally, maintaining the aspect ratio, to cover as much of the background surface as possible.  If the surface has a different aspect ratio then some of the surface will not be covered with the image.</p>
<p class="l20 b10" markdown="1"><samp class="string">'stretch'</samp> - The image is stretched to fit the defined width and height.</p>
<p class="l20 b10" markdown="1"><samp class="string">'stretch-w'</samp> - The image is stretched to fit the defined width. The height will be calculated proportionally using the aspect ratio.</p>
<p class="l20 b20" markdown="1"><samp class="string">'stretch-h'</samp> - The image is stretched to fit the defined height. The width will be calculated proportionally using the aspect ratio.</p>

* _default:_ <samp class="string">'cover'</samp>