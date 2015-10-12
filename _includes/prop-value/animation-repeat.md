How an animation should be _repeated_. The direction of each iteration may be defined with an optional delay between each.

* __Count:__ The number of times the animation should be repeated. The first iteration is __not__ a repeat. e.g. the animation will occur twice when the _repeat count_ equals _1_.
* __Direction:__ The pattern that the animations should occur.
<samp class='string'>'forward'</samp> indicates that the animation should be repeat exactly as the first iteration, forward only.
<samp class='string'>'yoyo'</samp> indicates that the direction should alternate back and forth.  The ease will be played in reverse when returning.
The values <samp class='string'>'f'</samp> and <samp class='string'>'y'</samp> may be used for brevity.
* __Delay:__ The number of seconds to wait between each iteration.

The count may be given as a lone number, of the count, direction and delay can be given as an array. e.g. <code>[3,'y',0]</code>


* _default:_ <samp class="number">0</samp>
* _alias:_ <code>rep</code>