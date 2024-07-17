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
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `findLastIndex` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'findLastIndex' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.findLastIndex ), true, 'has method' );
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
			return arr.findLastIndex.call( value, predicate );
		};
	}

	function predicate( v ) {
		return ( real( v ) > 0 && imag( v ) < 0 );
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
			return arr.findLastIndex( value );
		};
	}
});

tape( 'the method returns `-1` if operating on an empty complex number array', function test( t ) {
	var arr;
	var idx;

	arr = new Complex128Array();
	idx = arr.findLastIndex( predicate );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();

	function predicate() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the method returns the index of the last element which passes a test', function test( t ) {
	var arr;
	var idx;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0 ] );
	idx = arr.findLastIndex( predicate );

	t.strictEqual( idx, 1, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( real( v ) === -imag( v ) );
	}
});

tape( 'the method returns `-1` if all elements fail a test', function test( t ) {
	var arr;
	var idx;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	idx = arr.findLastIndex( predicate );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( real( v ) === imag( v ) );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var ctx;
	var arr;
	var idx;

	ctx = {
		'count': 0
	};
	arr = new Complex128Array( [ 1.0, -1.0, 2.0, 2.0, 3.0, 3.0 ] );
	idx = arr.findLastIndex( predicate, ctx );

	t.strictEqual( idx, 2, 'returns expected value' );
	t.strictEqual( ctx.count, 1, 'returns expected value' );

	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( imag( v ) === real( v ) );
	}
});
