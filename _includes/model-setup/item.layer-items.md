<p class="b20" markdown="1">Zero or more child [items](#){:data-toc="items"}. If there is only one item then <code>item</code> may be used instead as a form of [shortcutting](/concepts/#shortcuts).</p>

{% highlight javascript %}
setup: {
  itemType: "layer",
  items: [
    { 
      text: "text one",
      init: { pos: [0,-17] }
    },
    {
      text: "text two",
      init: { pos: [0,17] }
    }
  ]
}
{% endhighlight %}