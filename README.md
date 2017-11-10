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


### Font Size

```
font-size( targetFontSize )
```

Returns a calculated `rem` value based on `baseFontSize`, `baseLineHeight` and `targetFontSize`

Params:
* `targetFontSize` should be a pixel value, e.g. `16px`

### Line Height

```
line-height( targetFontSize )
```

returns a line height value based on `baseFontSize`, `baseLineHeight` and `targetFontSize`

Params:
* `targetFontSize` should be a pixel value, e.g. `16px`

### Lines

```
lines( count, subtractPx )
```

returns a `rem` value based on `baseFontSize` and `baseLineHeight` with an optional pixel value cut out based on `subtractPx`

Params:
* `count` should be a number defining how many lines you want the value to total
* `subtractPx` a pixel value to be subtracted from the returned value

## Options

Option           | Type    | Default | Description
---------------- | ------- | ------- | -----------
`baseFontSize`   | String  | `16px`  | a pixel value used to calculate the vertical rhythm
`baseLineHeight` | String  | `1.5`   | a number used to how tall a line should be in the vertical rhythm

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

Use the base font size and line height to define an image height that will line up with the vertical rhythm

```
img {
  height: lines( 10 );
}

```

Outputs:

```
