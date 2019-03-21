# material-tooltip
Material design tooltip component using CSS and pure Javascript

### Demo Tooltip:
![Tooltip Demo](https://raw.githubusercontent.com/Rahul-Sagore/material-tooltip/master/demo/material-tooltip-demo-1.gif)

### Insatallation and Usage

**Using NPM:**
```bash
npm install material-tooltip --save
```


**Using Source files:**
Include CSS file:
```html
<link rel="stylesheet" type="text/css" href="/src/material-tooltip.css">
```

Include JS file before the end of body tag:
```html
<script type="text/javascript" src="/src/material-tooltip.js"></script>
```
**Note:** Add correct source path of the files

Then add the tooltip meta and class on element, on which you want to display tooltip:
```html
<i class="material-icons md-tooltip" data-m-tooltip="This is a tooltip content!">pets</i>
```
**Note:** Make sure to add `md-tooltip` class, and `data-m-tooltip` with tooltip content.

By default tooltip will gets displayed on bottom.

To change the position, add following classes on `.md-tooltip` level: `md-tooltip--top`, `md-tooltip--left`, `md-tooltip--right` for respective position.
