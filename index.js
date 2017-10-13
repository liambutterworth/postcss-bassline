var postcss  = require( 'postcss' );
var baseline = require( './baseline' );

var defaults = {
	baseFontSize:   '16px',
	baseLineHeight: '1.5',
};

module.exports = postcss.plugin( 'bassline', function( options ) {
	function getParams( string, text ) {
		return string.match( /\(([^)]+)\)/ )[1]
			.replace( /["'\s]/g, "" )
			.trim()
			.split( ',' )
			.push( options );
	}

	return function( css ) {
		options = Object.assign( {}, defaults, options );


		css.walkRules( function( rule ) {
			rule.walkDecls( function( decl, i ) {
				var value         = decl.value;
				var functionNames = Object.keys( baseline );
				var regexSplit    = new RegExp( "((?:" + functionNames.join( '|' ) + ")\\(.*?\\))", 'g' );
				var regexTest     = new RegExp( functionNames.join( '|' ), 'g' );

				if ( regexTest.test( value ) ) {
					console.log( value.split( regexSplit ) );
				}

				//"lines( 5, 5px  ) 0 0 fontsize( 10, 10px  )".split(/((?:fontsize|lineheight|lines)\(.*?\))/g)
			} );
		} );
	}
} );
