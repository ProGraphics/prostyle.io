---
layout: post-animation
title: "Layer Motion"
category: gallery
desc: "The items on a layer move relative to the layer. By combining movement of those items with movement of the layer itself you can achieve interesting motion effects."
tags: 
  - text
thumbnail: "layer-motion.png"
story: "gallery/layer-motion.json5"
story2: "gallery/layer-motion-2.json5"
story3: "gallery/layer-motion-3.json5"

---
# Layer Motion

[Layers](/models/#&middot;-layer-item) are items that can be [placed](/concepts/#placement) like any other item. However, layers may have child items whose _placement_ is relative to the layer.  Complex movement can be achieved by moving items on a layer while simultaneously moving the layer itself.

The _first_ story moves a red square around in a _cloverleaf_ pattern. This movement is accomplished with nested layers. The _inner_ layer has a red background and the outer layer is _transparent_. Try changing <samp class="string">"transparent"</samp> to <samp class="string">"blue"</samp> and see what it looks like.

The canvas is using the default _16/9_ [aspect ratio](/models/#frame). To make both layers square, they are sized with x and y values that are multiples of 9 and 16 repectively.

To view just the inner layer's motion, disable the outer layer's motion by changing the rotation from <samp class="number">-360</samp> to <samp class="number">0</samp>.

The inner layer is configured to rotate around a center point by positioning it <samp class="number">-20</samp> percent of the frame size, left of the outer layer's center, and setting the [transform origin](/properties/#transform-origin) 20% to the right. Because _expanded_ properties are relative to the item's top-left position, half of the layer's size is added to the <code>x</code> and <code>y</code> values of the origin. Rotation around the _z_ axis now moves the layer in a wide circle. The outer layer is configured similarly, but with opposite position and origin values.

To make the inner layer a circle instead of a square, add a [corners](/properties/#corners) property with a value of half of <samp class="number">16</samp>, the largest dimension.

{% highlight javascript %}init: {
  size: [9,16],
  corners:8,
  bg: "red",
  pos: -20,
  origin: {x:24.5,y:8, expand:true}
}
{% endhighlight %}


### Three Dimensions

The second story can be viewed by clicking the button labeled __2__ under the editor. It is similar to the first story but moves the inner layer up and down the _z_ axis.


### Spinning Logo

The third story can be viewed by clicking the button labeled __3__ under the editor. It expands upon the second story by rotating the Pro logo in the opposite direction of the wobbling layer it is nested within. It also bounces the <samp class="string">"STYLE"</samp> text on the layer.

