<p class="b30" markdown="1">
The array may contain a single or multiple shadows. If the first entry is a number, is will be processed as a single shadow. Otherwise, it will be processed as many.

For a single shadow, the entries in order are set to the x, y, blur, color, spread and inset values. Omitted values are set to the defaults.
</p>
{% highlight javascript %}shadow: [1,1,2,"black",2,true]{% endhighlight %}
<p class="b30" markdown="1">
For multiple shadows, each entry describes a shadow as an array, object, or string. Shadows will be rendered in order.
</p>
{% highlight javascript %}shadow: [[0,0,5,"black",2,true],[1,1,2,"black",0,false]]{% endhighlight %}