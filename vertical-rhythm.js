var VerticalRhythm = function( options ) {
	this.baseFontSize   = parseInt( options.baseFontSize, 10 );
	this.baseLineHeight = parseInt( options.baseLineHeight, 10 );
};

VerticalRhythm.prototype.round = function( number ) {
	return Math.round( number * 10000 ) / 10000;
}

VerticalRhythm.prototype['font-size'] = function( targetPx ) {
	var targetFontSize   = parseInt( targetPx, 10 );
	var computedFontSize = targetFontSize / this.baseFontSize;

	return `${ this.round( computedFontSize ) }rem`;
};

VerticalRhythm.prototype['line-height'] = function( targetPx ) {
	var targetFontSize     = parseInt( targetPx, 10 );
	var lineMultiplier     = Math.ceil( targetFontSize / this.baseFontSize );
	var computedLineHeight = ( ( this.baseLineHeight * lineMultiplier ) * this.baseFontSize ) / targetFontSize;

	return this.round( computedLineHeight );
};

VerticalRhythm.prototype.lines = function( count, subtractPx ) {
	var pixelsToSubtract = subtractPx ? ( parseInt( subtractPx, 10 ) / this.baseFontSize ) : 0;
	var computedValue    = ( count * ( ( this.baseFontSize * this.baseLineHeight ) / this.baseFontSize ) ) - pixelsToSubtract;

	return `${ this.round( computedValue ) }rem`;
};

module.exports = VerticalRhythm;
