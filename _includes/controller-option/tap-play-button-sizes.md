<p class="b20" markdown="1">
The relative sizes of the click areas is defined as three numbers in an array, corresponding to the width of the _back_ tap area, the _toggle_ tap area, and the _next_ tap area. Areas can be omitted by setting the width to 0. For example, to only have _back_ and _next_, use <samp class="number">[50,0,50]</samp>.
</p>

* _default value:_ <samp class="number">[25,50,25]</samp>

{% highlight javascript %}
{ controllerType: "tap", playbuttonSizes: [0,75,25] }
{% endhighlight %}
