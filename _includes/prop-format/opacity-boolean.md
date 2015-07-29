<p class="b30" markdown="1">
Setting the opacity to either true or false results in a percentage value of 100 being applied. The reasoning is that setting a value of false could be interpreted as turning the opacity property off, as in remove any prior opacity value.  Setting the opacity to true is almost nonsensical. The only thing is could reasonably mean is make it completely opaque.
</p>
{% highlight javascript %}opacity: false{% endhighlight %}
{% highlight javascript %}opacity: true{% endhighlight %}