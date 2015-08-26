<p class="b20" markdown="1">
As a browser window is resized, it fires a stream of events notifying each interim size. Rendering a ProStyle story is a relatively hefty task. Regenerating the story for every one of the events would require a lot of system resources.  We use a throttle to avoid this.  With throttling, the resize happens only after a period of time has elaspsed after the last resize event.
</p>

<p class="b20" markdown="1">
The value is a number in seconds. A value of <samp>0</samp> results in real-time resizing as the window edge is dragged.
</p>

* _default value:_ <samp class="number">0.01</samp>

{% highlight javascript %}
{ controllerType: "resize", throttleDelay:1 }
{% endhighlight %}
