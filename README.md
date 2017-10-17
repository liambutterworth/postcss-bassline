## Installation

```
$ npm install postcss-bassline --save-dev
```

## Usage

```
module.exports = {
  plugins: [
    require('postcss-bassline')({
      baseFontSize: '16px',
      baseLineHeight: '1.5',
    }),
  ],
};
```

## Functions

```
font-size( targetFontSize )
```

Returns a calculated `rem` based on `baseFontSize`, `baseLineHeight` and `targetFontSize`

Params:
* `targetFontSize` should be a pixel value, e.g. `16px`

```
line-height( targetFontSize )
```

returns a line height based on `baseFontSize`, `baseLineHeight` and `targetFontSize`

Params:
* `targetFontSize` should be a pixel value, e.g. `16px`

```
lines( count, subtractPx )
```

returns an `rem` value based on `baseFontSize` and `baseLineHeight` with an optional pixel value cut out based on `subtractPx`

Params:
* `count` should be an integer defining how many lines you want the value to total
* `subtractPx` a pixel value to be subtracted from the returned value

## Options

Option           | Type    | Default | Description
---------------- | ------- | ------- | -----------
`baseFontSize`   | String  | `16px`  | Font size used to calculate the vertical rhythm, appended with px
`baseLineHeight` | String  | `1.5`   | Line height used to calculate the vertical rhythm

## Examples

Set font size and relative line height for `h1` based on the base font size and line height defined in `postcss.config.js`

```
h1 {
  font-size: font-size( 48px );
  line-height: line-height( 48px );
}
```

Outputs:

```
h1 {
  font-size: 1.6875rem;
  line-height: 1.1852;
}
```

Use the base font size and line height to defined an image height that will line up with the vertical rhythm

```
img {
  height: lines( 10 );
}

```

Outputs:

```
img {
  height: 10rem;
}
```

Create a div with a bottom padding and a 5px border that sticks to the vertical rhythm (the 5px will be cut away from the padding rem value)

```
div {
  padding-bottom: lines( 4, 5px );
  border-bottom: 5px;
}
```

Outputs:

```
div {
  padding-bottom: 3.6875rem
  border-bottom: 5px;
}
```
