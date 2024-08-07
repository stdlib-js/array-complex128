/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var proxyquire = require( 'proxyquire' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isFunction = require( '@stdlib/assert-is-function' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a `from` method for creating a complex number array from an array-like object or iterable', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( Complex128Array, 'from' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.from ), true, 'has method' );

	arr = Complex128Array.from( [] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns an instance' );

	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a constructor', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			return Complex128Array.from.call( value, [] );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex array constructor', function test( t ) {
	var values;
	var i;

	values = [
		Complex128,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from.call( value, [] );
		};
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk() {
		return [ 1.0, 1.0 ];
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object (callback, thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value, clbk, {} );
		};
	}

	function clbk() {
		return [ 1.0, 1.0 ];
	}
});

tape( 'the method throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			return Complex128Array.from( [], value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			return Complex128Array.from( [], value, {} );
		};
	}
});

tape( 'the method returns a complex number array', function test( t ) {
	var arr;
	var z;
	var v;

	// Generic array:
	arr = Complex128Array.from( [] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Generic array containing complex numbers:
	arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex128( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex128Array.from( [ z, 1.0 ] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex128( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex128Array.from( [ 1.0, z ] );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Typed array:
	arr = Complex128Array.from( new Float64Array( 0 ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Float64Array( [ 1.0, 1.0 ] ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Complex typed array:
	arr = Complex128Array.from( new Complex64Array( 0 ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex64Array( [ 1.0, 1.0 ] ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( 0 ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( [ 1.0, 1.0 ] ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();

	function valueOf( z ) {
		return function valueOf() {
			return realf( z );
		};
	}
});

tape( 'the method returns a complex number array (iterable)', function test( t ) {
	var Complex128Array;
	var iter1;
	var iter2;
	var arr;
	var v;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	iter1 = {
		'next': next1,
		'i': 0,
		'N': 4
	};
	arr = Complex128Array.from( createIterable( iter1 ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter1.N, 'returns expected value' );

	iter2 = {
		'next': next2,
		'i': 0,
		'N': 4
	};
	arr = Complex128Array.from( createIterable( iter2 ) );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter2.N, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next1() {
		iter1.i += 1;
		if ( iter1.i <= iter1.N ) {
			return {
				'value': [ 1.0, 1.0 ]
			};
		}
		return {
			'done': true
		};
	}

	function next2() {
		iter2.i += 1;
		if ( iter2.i <= iter2.N ) {
			return {
				'value': new Complex128( 1.0, 1.0 )
			};
		}
		return {
			'done': true
		};
	}
});

tape( 'the method supports providing a "map" function which is invoked for each source element', function test( t ) {
	var arr;
	var z;
	var v;

	// Generic array:
	arr = Complex128Array.from( [], clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( [ 1.0, 2.0, 3.0, 4.0 ], clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Generic array containing complex numbers:
	arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ], clbk2 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ], clbk3a );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex128( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex128Array.from( [ z, 1.0 ], clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex128( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = Complex128Array.from( [ 1.0, z ], clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Typed array:
	arr = Complex128Array.from( new Float64Array( 0 ), clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Float64Array( [ 1.0, 1.0 ] ), clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Complex typed array:
	arr = Complex128Array.from( new Complex64Array( 0 ), clbk3a );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex64Array( [ 1.0, 1.0 ] ), clbk3a );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = Complex128Array.from( new Complex64Array( 0 ), clbk3b );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex64Array( [ 1.0, 1.0 ] ), clbk3b );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( 0 ), clbk4a );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( [ 1.0, 1.0 ] ), clbk4a );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( 0 ), clbk4b );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = Complex128Array.from( new Complex128Array( [ 1.0, 1.0 ] ), clbk4b );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();

	function valueOf( z ) {
		return function valueOf() {
			return realf( z );
		};
	}

	function clbk1( v ) {
		return v;
	}

	function clbk2() {
		return [ 1.0, 1.0 ];
	}

	function clbk3a( v ) {
		return new Complex128( realf(v)*2.0, imagf(v)*2.0 );
	}

	function clbk3b( v ) {
		return [ realf(v)*2.0, imagf(v)*2.0 ];
	}

	function clbk4a( v ) {
		return new Complex128( real(v)*2.0, imag(v)*2.0 );
	}

	function clbk4b( v ) {
		return [ real(v)*2.0, imag(v)*2.0 ];
	}
});

tape( 'the method supports providing a "map" function which is invoked for each iterated value', function test( t ) {
	var Complex128Array;
	var iter1;
	var iter2;
	var arr;
	var v;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	iter1 = {
		'next': next1,
		'i': 0,
		'N': 4
	};
	arr = Complex128Array.from( createIterable( iter1 ), clbk1 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter1.N, 'returns expected value' );

	iter2 = {
		'next': next2,
		'i': 0,
		'N': 4
	};
	arr = Complex128Array.from( createIterable( iter2 ), clbk2 );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter2.N, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next1() {
		iter1.i += 1;
		if ( iter1.i <= iter1.N ) {
			return {
				'value': [ 1.0, 1.0 ]
			};
		}
		return {
			'done': true
		};
	}

	function clbk1( v ) {
		v[ 0 ] += 1.0;
		v[ 1 ] += 1.0;
		return v;
	}

	function next2() {
		iter2.i += 1;
		if ( iter2.i <= iter2.N ) {
			return {
				'value': new Complex128( 1.0, 1.0 )
			};
		}
		return {
			'done': true
		};
	}

	function clbk2( v ) {
		return new Complex128( real(v)*2.0, imag(v)*2.0 );
	}
});

tape( 'the method supports providing a `this` context for a provided map function', function test( t ) {
	var arr;
	var ctx;

	ctx = {
		'count': 0
	};
	arr = Complex128Array.from( [ 1.0, 2.0, 3.0, 4.0 ], clbk1, ctx );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	ctx = {
		'count': 0
	};
	arr = [ new Complex128( 1.0, 1.0 ), new Complex128( -1.0, -1.0 ) ];
	arr = Complex128Array.from( arr, clbk2, ctx );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );
	t.strictEqual( ctx.count, 2, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}

	function clbk2( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return new Complex128( real(v)*2.0, imag(v)*2.0 );
	}
});

tape( 'the method supports providing a `this` context for a provided map function (iterable)', function test( t ) {
	var Complex128Array;
	var iter;
	var ctx;
	var arr;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	iter = {
		'next': next,
		'i': 0,
		'N': 4
	};
	ctx = {
		'count': 0
	};

	arr = Complex128Array.from( createIterable( iter ), clbk, ctx );
	t.strictEqual( arr instanceof Complex128Array, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next() {
		iter.i += 1;
		if ( iter.i <= iter.N ) {
			return {
				'value': [ 1.0, 1.0 ]
			};
		}
		return {
			'done': true
		};
	}

	function clbk( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		v[ 0 ] += 1.0;
		v[ 1 ] += 1.0;
		return v;
	}
});

tape( 'the method throws an error if provided a generic array-like object having an odd length', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3 ],
		new Float64Array( [ 1, 2, 3 ] ),
		{
			'length': 3,
			'0': 1,
			'1': 2,
			'2': 3
		},
		[ new Complex128( 1.0, 1.0 ), 1.0, 1.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array-like object having a length equal to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}
});

tape( 'the method throws an error if provided a generic array-like object having an odd length (clbk)', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3 ],
		new Float64Array( [ 1, 2, 3 ] ),
		{
			'length': 3,
			'0': 1,
			'1': 2,
			'2': 3
		},
		[ new Complex128( 1.0, 1.0 ), 1.0, 1.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array-like object having a length equal to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk() {
		return [ 1.0, 1.0 ];
	}
});

tape( 'the method throws an error if provided a non-iterable object (non-ES2015+)', function test( t ) {
	var Complex128Array;
	var values;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport
	});

	values = [
		{},
		{
			'0': 1,
			'1': 2,
			'2': 3
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the method throws an error if provided a non-iterable object (ES2015+)', function test( t ) {
	var Complex128Array;
	var values;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{},
		{
			'0': 1,
			'1': 2,
			'2': 3
		},
		{
			'__SYMBOL_ITERATOR__': null
		},
		{
			'__SYMBOL_ITERATOR__': 'beep'
		},
		{
			'__SYMBOL_ITERATOR__': nonIterable1
		},
		{
			'__SYMBOL_ITERATOR__': nonIterable2
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function nonIterable1() {
		return null;
	}

	function nonIterable2() {
		return {};
	}
});

tape( 'the method throws an error if provided an iterable object which does not return complex numbers or arrays of real and imaginary components', function test( t ) {
	var Complex128Array;
	var values;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': 1.0
		};
	}

	function next2() {
		return {
			'value': '1.0 + 1.0i'
		};
	}
});

tape( 'the method throws an error if provided an iterable object which does not return an array-like object containing at least two elements', function test( t ) {
	var Complex128Array;
	var values;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Complex128Array.from( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': []
		};
	}

	function next2() {
		return {
			'value': [ 1.0 ]
		};
	}
});

tape( 'the method throws an error if provided a complex number source array and a "map" function which does not return complex numbers or arrays of real and imaginary components (collection)', function test( t ) {
	var values;
	var clbks;
	var i;

	values = [
		[ new Complex128( 1.0, 1.0 ) ],
		[ new Complex128( 1.0, 1.0 ), new Complex128( -1.0, -1.0 ) ]
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk1() {
		return 1.0;
	}

	function clbk2() {
		return {};
	}
});

tape( 'the method throws an error if provided a complex number source array and a "map" function which does not return an array containing at least two elements (collection)', function test( t ) {
	var values;
	var clbks;
	var i;

	values = [
		[ new Complex128( 1.0, 1.0 ) ],
		[ new Complex128( 1.0, 1.0 ), new Complex128( -1.0, -1.0 ) ]
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk1() {
		return [];
	}

	function clbk2() {
		return [ 1.0 ];
	}
});

tape( 'the method throws an error if provided a complex number source array and a "map" function which does not return complex numbers or arrays of real and imaginary components (complex array)', function test( t ) {
	var values;
	var clbks;
	var i;

	values = [
		new Complex128Array( [ 1.0, 1.0 ] ),
		new Complex128Array( [ 1.0, 1.0, -1.0, -1.0 ] )
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk1() {
		return 1.0;
	}

	function clbk2() {
		return {};
	}
});

tape( 'the method throws an error if provided a complex number source array and a "map" function which does not return an array containing at least two elements (complex array)', function test( t ) {
	var values;
	var clbks;
	var i;

	values = [
		new Complex128Array( [ 1.0, 1.0 ] ),
		new Complex128Array( [ 1.0, 1.0, -1.0, -1.0 ] )
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function clbk1() {
		return [];
	}

	function clbk2() {
		return [ 1.0 ];
	}
});

tape( 'the method throws an error if provided a "map" function which does not return complex numbers or arrays of real and imaginary components (iterable)', function test( t ) {
	var Complex128Array;
	var values;
	var clbks;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': [ 1.0, 1.0 ]
		};
	}

	function clbk1() {
		return 1.0;
	}

	function next2() {
		return {
			'value': new Complex128( 1.0, 1.0 )
		};
	}

	function clbk2() {
		return '1.0 - 1.0j';
	}
});

tape( 'the method throws an error if provided a "map" function which does not return an array containing at least two elements (iterable)', function test( t ) {
	var Complex128Array;
	var values;
	var clbks;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert-has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol-iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	clbks = [
		clbk1,
		clbk2
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i], clbks[i] ), TypeError, 'throws an error when provided callback '+i );
	}
	t.end();

	function badValue( value, clbk ) {
		return function badValue() {
			return Complex128Array.from( value, clbk );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': [ 1.0, 1.0 ]
		};
	}

	function clbk1() {
		return [];
	}

	function next2() {
		return {
			'value': new Complex128( 1.0, 1.0 )
		};
	}

	function clbk2() {
		return [ 1.0 ];
	}
});
