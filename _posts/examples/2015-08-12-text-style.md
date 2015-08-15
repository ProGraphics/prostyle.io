---
layout: post-animation
title: "Changing Text Styles"
category: examples
desc: "Text Styling can be changed at any time in the timeline, but the style will change instantly."
tags: 
  - text
  - textStyle
story: "examples/text-style.json5"
---
# Changing Text Style

The style of text can be changed at any time with the [textStyle](/properties/#text-style) property. However, the value cannot be animated over a [duration](/properties/#animation).  The value will change instantly.

This demonstration has one [script](/concepts/#scripts) with seven _actions_.  The actions run in order, one after the other. Each action waits for a one second [delay](/properties/#delay) before running.