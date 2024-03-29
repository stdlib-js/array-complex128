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
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `subarray` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'subarray' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.subarray ), true, 'has method' );
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
			return arr.subarray.call( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not an integer', function test( t ) {
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
			return arr.subarray( value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
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
			return arr.subarray( 0, value );
		};
	}
});

tape( 'the method returns empty array if operating on an empty complex number array', function test( t ) {
	var arr;
	var out;

	arr = new Complex128Array();
	out = arr.subarray();

	t.strictEqual( out.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();
});

tape( 'if called without arguments, the method returns a view containing the same elements as the original array', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	actual = arr.subarray();

	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if called with one argument, the method returns a view containing elements starting from a specified beginning index (inclusive)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	expected = new Float64Array( [ 2.0, -2.0, 3.0, -3.0 ] );
	actual = arr.subarray( 1 );

	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'if provided two arguments, the method returns a view containing elements starting from a specified beginning index (inclusive) and ending at a specified stop index (exclusive)', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
	expected = new Float64Array( [ 2.0, -2.0, 3.0, -3.0 ] );
	actual = arr.subarray( 1, 3 );

	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method resolves negative indices relative to the last element', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );

	expected = new Float64Array( [ 2.0, -2.0, 3.0, -3.0 ] );
	actual = arr.subarray( -3, -1 );
	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	expected = new Float64Array( [ 1.0, -1.0, 2.0, -2.0 ] );
	actual = arr.subarray( -30, -2 );
	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty view if a resolved beginning index exceeds a resolved ending index', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
	expected = new Float64Array( [] );
	actual = arr.subarray( 2, 0 );

	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty view if a resolved beginning index exceeds the maximum array index', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
	expected = new Float64Array( [] );
	actual = arr.subarray( 5 );

	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns an empty view if a resolved ending index is less than or equal to zero', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ] );
	expected = new Float64Array( [] );

	actual = arr.subarray( 2, -8 );
	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	actual = arr.subarray( 1, 0 );
	t.strictEqual( actual.buffer, arr.buffer, 'returns expected value' );
	t.strictEqual( instanceOf( actual, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( actual.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );
	t.end();
});
