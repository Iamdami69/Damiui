
## what is this?

Generate soft/beautiful design for your projects

# Installation
`npm i damiUi --save`

Then...

# Usage
```
import { damiUi } from  'damiUi';

damiUi({
  target: '.hasDamiShadow',
  shadowType: '#10',
  borderRadius: '5%',
  touchableOpacityDuration: 100,
});


```

## Options
damiuishadow Currently support 3 options, all of which are listed below

* *shadowType* - accept a string value from *'#0' - '#11'*
* *borderRadius* - _accept type of string (css units)
* *touchableOpacityDuration* - _accept type of number defaults to 0