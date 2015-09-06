<p class="b20" markdown="1">
The horizontal size of the image as a percentage of the width of the container. The container may be a [page](#){:data-toc="pages"} or a [layer](#){:data-toc="&middot;-layer-item"}. If omitted, the width will be calculated using the <code>height</code> and the image's natural aspect ratio.
</p>

{% highlight javascript %}
{
	width: 75
}
{% endhighlight %}

If both <code>width</code> and <code>height</code> are not provided, the width will be <samp class="number">50</samp> percent and the height will be calculated based on the image's natural aspect ratio.