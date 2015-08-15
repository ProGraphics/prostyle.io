By default, the <code>x</code> and <code>y</code> values are percentages of the _item's_ dimensions. Setting <code>expand</code> to <samp class="boolean">true</samp> changes it so they are percentages of the _container's_ dimensions, usually the _page_.
<br><br>
Expanded origins are percentages of the container's dimensions, but they are _relative to the top-left corner of the item_, not the item's center. To make it look right, You may need to compensate by adding half of the item's percentage-based width and height to the <code>x</code> and <code>y</code> values.
<br><br>
<code>expand</code> has no effect on the <code>z</code> value, which is always based on the _container's_ dimensions.

* _default:_ <samp class="boolean">false</samp>