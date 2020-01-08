---
title: pathPrefix in Gatsby not working?
date: "2019-07-02T22:12:03.284Z"
description: "pathPrefix in Gatsby not working? Here's one thing you may have missed..."
tags: ["react", "gatsbyjs"]
draft: true
---

Thought I'd save someone else's time who's experiencing this bug:

```
module.exports = {
  pathPrefix: `/your-path-prefix-here`,
  siteMetadata: {
    title: ...
  }
  ...
}
```

Inside the `gatsby-config.js` file, the `pathPrefix` parameter goes outside the `siteMetadata` parameter, not inside. ;)