<p class="b20" markdown="1">
	The keymap can be changed by associating [Keycodes](http://keycode.info/) with the actions. If an action is included, all of it's default keys will be replaced. It's possible to only override some of the actions, by omitting the others.
</p>

<p class="b20" markdown="1">
A keycode can only trigger one action. If it is associated with multiple, the keycode will trigger the first one found, in this order: next, toggle, play, pause, back, start, end.
</p>

{% highlight javascript %}
{ 
	controllerType: "keyboard",
	keys: {
		play: [13,116],
		pause: [19,27],
		togglePlay: [32],
		back: [8,33,37,38,188],
		playNext: [34,39,40,9],
		start: [36,190],
		end: [35]
	} 
}
{% endhighlight %}
