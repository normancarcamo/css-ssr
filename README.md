# css-ssr
<div align="center">
  <img  align="center" width="200" height="200" style="margin: auto;display: block;"
    src="https://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_400x400.png">
  <h1 align="center">Hook css for Node.js useful with rhm</h1>
  <h3>A hook for nodejs that lets you import styles when you are compiling webpack from server, it also works with react hot module replacement.</h3>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save css-ssr
```

<h2 align="center">Usage</h2>

Use the hook inside your server entry point.

### import or require in your entrypoint.js (important)

**server.js**
```js
import 'css-ssr'
import express from 'express'
import http from 'http'
// ...
```

**You can also use an object inside package.json with the extensions that you need: (optional)**
```js
{
  "name": "css-ssr",
  "main": "./server.js",
  "config": {
    "css-ssr": {
      "ext": [".css",".styl"]
    }
  }
  // ...
}
```

```bash
By default the hook use these extensions: .css, .styl, .scss, .less
```

<h2 align="center">Maintainers:</h2>

<table>
  <tbody>
    <tr>
      <td>
        <img width="150" height="150"
        src="http://s.gravatar.com/avatar/c3d34f6dbeeef3c39942d0ecb1247228?s=80">
        </br>
        <a href="https://github.com/normancarcamo">Norman Carcamo</a>
      </td>
    </tr>
  <tbody>
</table>
