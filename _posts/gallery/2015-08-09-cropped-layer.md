---
layout: post-animation
title: "Cropped Layer"
category: gallery
meta_teaser: "This Pro Style example uses non-moving text on the page and the same text on a cropped layer. The text on the layer is moved in the opposite direction as the layer, so it appears not to move relative to the other text. This provides an illusion of a see-through dot."
teaser: "This Pro Style example uses non-moving text on the page and the same text on a cropped layer. The text on the layer is moved in the opposite direction as the layer, so it appears not to move relative to the other text. This provides an illusion of a see-through dot."
tags: 
  - text
thumbnail: "layer-cropping.png"
story: "gallery/cropped-layer.json5"
story2: "gallery/cropped-layer-2.json5"
story3: "gallery/cropped-layer-3.json5"

---
# Cropped Layer

Layer cropping is an advanced technique which makes it look like there is a see-through moving item.  However, it is an illusion.  The moving item is a [layer](/models/#&middot;-layer-item) with it's own content.  The layer contains a text item that matches the one on the page, differing only by color.

Whenever the layer is repositioned, the text within the layer is also repositioned, but with _exactly the opposite_ values. So, the text in the layer appears to not move at all _relative to the page_. The layer has it's [crop](/properties/#crop) property set to <samp class="boolean">true</samp>, so the text outside the layer is not visible.

Try changing the <samp class="string">"Cropped Layer"</samp> text items in both places to different values and see what it looks like.    


### Classes

Since both the layer and the text in the layer are animating to and from the same values, [classes](/properties/#class) are used, which avoids duplication and simplifies changes.


### Bouncy Spot

The second story can be viewed by clicking the button labeled __2__ under the editor. It extends the first story, moving the layer in _two_ dimensions, with a bounce [ease](/properties/#animation).


### Magnifying Lens

The third story can be viewed by clicking the button labeled __3__ under the editor. It makes some relatively minor changes to the second story to make it look like a magnifying lens.

__Note:__ The text on the page is made blurry by setting the color to transparent, but with a drop shadow.  Microsoft's Internet Explorer and Edge browsers have a bug which doesn't support this.  To see the effect, use any other browser.