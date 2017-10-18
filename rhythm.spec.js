const assert = require( 'chai' ).assert;
const Rhythm = require( './rhythm' );

const rhythm = new Rhythm({
	baseFontSize:   '16',
	baseLineHeight: '1'
});

describe( 'Rhythm', function() {
	describe( 'round()', function() {
		it( 'should return a number', function() {
			const value = rhythm.round( 0.1234 );
			assert.typeOf( value, 'number' );
		} );

		it( 'should return a number that is no longer than four decimal places', function() {
			const value = rhythm.round( 0.123456789 ).toString().split( '.' ).pop();
			assert.isAtMost( value.length, 4 );
		} );
	} );

	describe( 'font-size()', function() {
		it( 'should return a string', function() {
			const value = rhythm['font-size']( '16px' );
			assert.typeOf( value, 'string' );
		} );

		it( 'should return the correct value', function() {
			const value = rhythm['font-size']( '16px' );
			assert.equal( value, '1rem' );
		} );

		it( 'should be appended with the rem unit', function() {
			const value = rhythm['font-size']( '16px' );
			assert.match( value, /rem$/ );
		} );
	} );

	describe( 'line-height()', function() {
		it( 'should return the correct value', function() {
			const value = rhythm['line-height']( '16px' );
			assert.equal( value, 1 );
		} );

		it( 'should return a number', function() {
			const value = rhythm['line-height']( '16px' );
			assert.typeOf( value, 'number' );
		} );
	} );

	describe( 'lines()', function() {
		it( 'should return a string', function() {
			const value = rhythm.lines( '1' );
			assert.typeOf( value, 'string' );
		} );

		it( 'should return the correct value', function() {
			const value = rhythm.lines( '1' );
			assert.equal( value, '1rem' );
		} );

		it( 'should return a lower value if subtractPx is defined', function() {
			const valueToBeBelow = parseInt( rhythm.lines( '1' ), 10 );
			const valueToCheck   = parseInt( rhythm.lines( '1', '1px' ), 10 );

			assert.isBelow( valueToCheck, valueToBeBelow );
		} );

		it( 'should be appended with the rem unit', function() {
			const value = rhythm.lines( '1' );
			assert.match( value, /rem$/ );
		} );
	} );
} );
