# postcss-bassline

A PostCSS plugin for managing vertical rhythm with injected functions

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
      baseLineHeight: '1.25',
    }),
  ],
};
```

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
