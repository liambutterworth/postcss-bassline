var VerticalRhythm = function( options ) {
	this.baseFontSize   = parseInt( options.baseFontSize, 10 );
	this.baseLineHeight = parseInt( options.baseLineHeight, 10 );
}

VerticalRhythm.prototype['font-size'] = function( targetPx, options ) {
	var targetFontSize = parseInt( targetPx, 10 );
	return `${ targetFontSize / this.baseFontSize }rem`;
},

VerticalRhythm.prototype['line-height'] = function( targetPx, options ) {
	var targetFontSize = parseInt( targetPx, 10 );
	var lineMultiplier = Math.ceil( targetFontSize / baseFontSize );
	return ( ( this.baseLineHeight * lineMultiplier ) * this.baseFontSize ) / targetFontSize;
},

VerticalRhythm.prototype.lines = function( count, subtractPx ) {
	var pixelsToSubtract = subtractPx ? ( parseInt( subtractPx, 10 ) / this.baseFontSize ) : 0;
	return `${ ( count * ( ( this.baseFontSize * this.baseLineHeight ) / this.baseFontSize ) ) - pixelsToSubtract }rem`;
},

module.exports = VerticalRhythm;
