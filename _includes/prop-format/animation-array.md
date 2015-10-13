<p class="b30">
Entries are applied to <code>duration</code>, <code>ease</code>, <code>repeat</code> and <code>stagger</code> in order. Defaults are used for missing entries. The repeat and stagger values can be expressed as a number or an array.
</p>
{% highlight javascript %}anim: [3, "more elastic", 1, 0.5]{% endhighlight %}
{% highlight javascript %}anim: [3, "less curve inout", [1,'yoyo'], [0.5,'random']]{% endhighlight %}