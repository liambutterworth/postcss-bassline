module.exports = {
	fontsize: function( targetPx, options ) {
		const targetFontSize = parseInt( targetPx, 10 );
		const baseFontSize   = parseInt( options.baseFontSize, 10 );

		return `${ targetFontSize / baseFontSize }rem`;
	},

	lineheight: function( targetPx, options ) {
		const targetFontSize = parseInt( targetPx, 10 );
		const baseFontSize   = parseInt( options.baseFontSize, 10 );
		const baseLineHeight = parseInt( options.baseFontSize, 10 );
		const lineMultiplier = Math.ceil( targetFontSize / baseFontSize );

		return ( ( baseLineHeight * lineMultiplier ) * baseFontSize ) / targetFontSize;
	},

	lines: function( count, subtractPx, options ) {
		const baseFontSize     = parseInt( options.baseFontSize, 10 );
		const baseLineHeight   = parseInt( options.baseLineHeight, 10 );
		const pixelsToSubtract = subtractPx ? ( parseInt( subtractPx, 10 ) / baseFontSize ) : 0;

		return `${ ( count * ( ( baseFontSize * baseLineHeight ) / baseFontSize ) ) - pixelsToSubtract }rem`;
	},
};
