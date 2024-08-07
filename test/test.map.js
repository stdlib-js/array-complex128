/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var identity = require( '@stdlib/utils-identity-function' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `map` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'map' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.map ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.map.call( value, identity );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 10 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.map( value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty complex number array', function test( t ) {
	var arr;
	var out;

	arr = new Complex128Array();
	out = arr.map( identity );

	t.strictEqual( instanceOf( out, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.end();
});

tape( 'the method returns a new complex number array containing elements which are the result of a callback function', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float64Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0 ] );
	actual = arr.map( scale );

	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.notEqual( actual, arr, 'returns a new instance' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return new Complex128( real( v )*2.0, imag( v )*2.0 );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var expected;
	var actual;
	var arr;
	var ctx;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float64Array( [ 3.0, -3.0, 6.0, -6.0, 9.0, -9.0 ] );
	ctx = {
		'count': 0
	};
	actual = arr.map( scale, ctx );

	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.strictEqual( ctx.count, 3, 'returns expected value' );
	t.end();

	function scale( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return new Complex128( real( v )*3.0, imag( v )*3.0 );
	}
});

tape( 'the method supports a map function which returns a two-element array containing a real and an imaginary component', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float64Array( [ 2.0, -2.0, 4.0, -4.0, 6.0, -6.0 ] );
	actual = arr.map( scale );

	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();

	function scale( v ) {
		return [ real( v )*2.0, imag( v )*2.0 ];
	}
});

tape( 'the method throws an error if provided a map function which does not return a complex number or an array of length 2 containing real and imaginary components', function test( t ) {
	var clbks;
	var arr;
	var i;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	clbks = [
		clbk1,
		clbk2,
		clbk3,
		clbk4,
		clbk5
	];
	for ( i = 0; i < clbks.length; i++ ) {
		t.throws( badValue( clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( clbk ) {
		return function badValue() {
			return arr.map( clbk );
		};
	}

	function clbk1() {
		return 1.0;
	}

	function clbk2() {
		return {};
	}

	function clbk3() {
		return [ 1.0, 2.0, 3.0 ];
	}

	function clbk4() {
		return [];
	}

	function clbk5() {
		return [ 1.0 ];
	}
});
