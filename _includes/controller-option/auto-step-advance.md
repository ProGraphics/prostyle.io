<p class="b20" markdown="1">
If <samp class="boolean">true</samp>, the story will start playing the next step immediately upon reaching the end of a step. If a number is provided, the story will start the next step after that many seconds.
</p>

* _default value:_ <samp class="boolean">false</samp>

{% highlight javascript %}
{ controllerType: "auto", stepAdvance: true }
{% endhighlight %}

{% highlight javascript %}
{ controllerType: "auto", stepAdvance: 1.5 }
{% endhighlight %}

<p class="b20">
The delay can optionally be overridden on the step object using an <code>autoAdvanceDelay</code> entry.
</p>