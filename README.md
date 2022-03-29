# Demo
[damiui](https://stackblitz.com/edit/damiui-demo?file=index.js)
## what is this?

Generate soft/beautiful design for your projects

# Installation
`npm i damiUi --save`

Then...

# Usage
```
import { damiUi } from  'damiui';

damiUi({
  target: '.myDiv',
  shadowType: '#10',
  borderRadius: '5%',
  touchableOpacityDuration: 100,
});


```

## Options
damiuishadow Currently support 3 options, all of which are listed below

* *target* - accepts HTML class/id/element *'#myDiv' - 'section'*
* *shadowType* - accept a string value from *'#0' - '#11'*
* *borderRadius* - _accept type of string (css units)
* *touchableOpacityDuration* - _accept type of number defaults to 0
