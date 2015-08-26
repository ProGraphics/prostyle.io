<p class="b20" markdown="1">
If <samp class="boolean">true</samp>, the story will restart immediately upon reaching the end of the timeline. If a number is provided, the story will restart after that many seconds.
</p>

* _default value:_ <samp class="boolean">false</samp>

{% highlight javascript %}
{ controllerType: "auto", restart: true }
{% endhighlight %}

{% highlight javascript %}
{ controllerType: "auto", restart: 1.5 }
{% endhighlight %}