<p class="b20" markdown="1">
The relative sizes of the rows is defined as two numbers in an array, corresponding to the height of the _play buttons_ row and the height of the _seek_ row. A row can be omitted by setting the height to 0. For example, to only have the _play buttons_ row, use <samp class="number">[100,0]</samp>.
</p>

* _default value:_ <samp class="number">[75,25]</samp>

{% highlight javascript %}
{ controllerType: "tap", rowSizes: [0,100] }
{% endhighlight %}
