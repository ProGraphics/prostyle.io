<p class="b20" markdown="1">A relative or absolute path to be prepended to all image paths.  Use this to relocate image assets. For example, this could be used to place the images in an S3 bucket or CDN.</p>

<p class="b20" markdown="1">If a relative path is provided, it will be appended to a global root URL if one is defined at <code>ProStyle.mediaRootUrl</code></p>

* _default value:_ <samp>''</samp>

{% highlight javascript %}{
  canvas:{
    setup:{
      mediaUrl:'https://s3.foo.com/images/'
    }
  }
}{% endhighlight %}