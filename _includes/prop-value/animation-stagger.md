If the model being animated contains multiple targets, such as text characters or chart bars, they may be [staggered](/concepts/#staggering). Depending upon a chosen order, the first will start immediately. Each subsequent one will start after a defined delay. 

* __Delay:__ The _time_ in seconds to wait for the next target to begin
* __Order:__ Defines which target should start first, which next, and so on.
    * <samp class='string'>'forward'</samp> They are processed in their default order  
    * <samp class='string'>'backward'</samp> Starting with the last one, moving toward the first
    * <samp class='string'>'random'</samp> The targets are randomized 
    * <samp class='string'>'centerOut'</samp> Starting with the target(s) in the middle, working simultaneously toward the ends 
    * <samp class='string'>'outCenter'</samp> Starting at the two ends, working simultaneously toward the middle

The order may be given as <samp class='string'>'f'</samp>, <samp class='string'>'b'</samp>, <samp class='string'>'r'</samp>, <samp class='string'>'c'</samp> or <samp class='string'>'o'</samp> for brevity.

A lone number may be used to define the delay, and the order will defulat to <samp class='string'>'forward'</samp>. Otherwise, an array be provided. e.g. <code>[0.1,'random']</code>

* _default:_ <samp class="number">0</samp>
* _alias:_ <code>stag</code>