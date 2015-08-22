<p class="b20" markdown="1">
The expected range of data as an array of two numbers. The bottom number represents _no bar_ and the top number represents a _full-height bar_. Values above the domain have bars rendered proportionately higher, beyond the chart's bounds. Values below the domain are rendered down, below the chart. 
</p>

<p class="b20" markdown="1">
optionally, use a single number may as the top number and the bottom number will be set to <samp class="number">0</samp>.  
</p>

{% highlight javascript %}
{
	domain: 100
}
{% endhighlight %}

{% highlight javascript %}
{
	domain: [-10,10]
}
{% endhighlight %}