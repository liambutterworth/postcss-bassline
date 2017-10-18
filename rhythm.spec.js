const assert = require( 'chai' ).assert;
const Rhythm = require( './rhythm.js' );

const rhythm = new Rhythm({
	baseFontSize:   '16',
	baseLineHeight: '1'
});

describe( 'Rhythm', function() {
	describe( 'round()', function() {
		it ( 'should return a number that is no longer than four decimal places', function() {
			const value = rhythm.round( 0.123456789 ).toString().split( '.' ).pop();
			assert.isAtMost( value.length, 4 );
		} );
	} );

	describe( 'font-size()', function() {
		it( 'should return a string', function() {
			const value = rhythm['font-size']( '16px' );
			assert.typeOf( value, 'string' );
		} );
	} );

	describe( 'line-height()', function() {
		it( 'should return a number', function() {
			const value = rhythm['line-height']( '16px' );
			assert.typeOf( value, 'number' );
		} );
	} );

	describe( 'lines()', function() {
		it ( 'should return a string', function() {
			const value = rhythm.lines( '1' );
			assert.typeOf( value, 'string' );
		} );
	} );
} );
