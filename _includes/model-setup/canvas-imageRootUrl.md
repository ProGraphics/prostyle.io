A relative or absolute path prepended to all image paths.  Use this to relocate all image assets. For example, this could be used to place the images in an S3 bucket or CDN.

_default value:_ <samp>''</samp>

<pre data-ace="readonly" style="width:100%;">{
  canvas:{
    setup:{
      imageRootUrl:'https://s3.foo.com/images/'
    }
  }
}</pre>