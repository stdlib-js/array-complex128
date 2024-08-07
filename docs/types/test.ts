/*
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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Complex128 = require( '@stdlib/complex-float64-ctor' );
import ArrayBuffer = require( '@stdlib/array-buffer' );
import real = require( '@stdlib/complex-float64-real' );
import imag = require( '@stdlib/complex-float64-imag' );
import Complex128Array = require( './index' );

/**
* Callback function.
*
* @private
* @param v - input value
* @returns output value
*/
function clbk( v: Complex128 ): Complex128 {
	return new Complex128( real( v ) * 2.0, imag( v ) * 2.0 );
}


// TESTS //

// The function returns a complex number array...
{
	new Complex128Array(); // $ExpectType Complex128Array
	Complex128Array(); // $ExpectType Complex128Array
	new Complex128Array( 2 ); // $ExpectType Complex128Array
	Complex128Array( 2 ); // $ExpectType Complex128Array
	new Complex128Array( [ 1.0, -1.0 ] ); // $ExpectType Complex128Array
	Complex128Array( [ 1.0, -1.0 ] ); // $ExpectType Complex128Array

	const buf = new ArrayBuffer( 16 );
	new Complex128Array( buf ); // $ExpectType Complex128Array
	Complex128Array( buf ); // $ExpectType Complex128Array
	new Complex128Array( buf, 8 ); // $ExpectType Complex128Array
	Complex128Array( buf, 8 ); // $ExpectType Complex128Array
	new Complex128Array( buf, 8, 2 ); // $ExpectType Complex128Array
	Complex128Array( buf, 8, 2 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument that is not a number, typed array, array-like object, or array buffer...
{
	new Complex128Array( true ); // $ExpectError
	new Complex128Array( false ); // $ExpectError
	new Complex128Array( null ); // $ExpectError
	new Complex128Array( 'abc' ); // $ExpectError
	new Complex128Array( {} ); // $ExpectError
	new Complex128Array( ( x: number ): number => x ); // $ExpectError

	Complex128Array( true ); // $ExpectError
	Complex128Array( false ); // $ExpectError
	Complex128Array( null ); // $ExpectError
	Complex128Array( 'abc' ); // $ExpectError
	Complex128Array( {} ); // $ExpectError
	Complex128Array( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new Complex128Array( buf, true ); // $ExpectError
	new Complex128Array( buf, false ); // $ExpectError
	new Complex128Array( buf, null ); // $ExpectError
	new Complex128Array( buf, 'abc' ); // $ExpectError
	new Complex128Array( buf, {} ); // $ExpectError
	new Complex128Array( buf, ( x: number ): number => x ); // $ExpectError

	Complex128Array( buf, true ); // $ExpectError
	Complex128Array( buf, false ); // $ExpectError
	Complex128Array( buf, null ); // $ExpectError
	Complex128Array( buf, 'abc' ); // $ExpectError
	Complex128Array( buf, {} ); // $ExpectError
	Complex128Array( buf, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new Complex128Array( buf, 8, true ); // $ExpectError
	new Complex128Array( buf, 8, false ); // $ExpectError
	new Complex128Array( buf, 8, null ); // $ExpectError
	new Complex128Array( buf, 8, 'abc' ); // $ExpectError
	new Complex128Array( buf, 8, {} ); // $ExpectError
	new Complex128Array( buf, 8, ( x: number ): number => x ); // $ExpectError

	Complex128Array( buf, 8, true ); // $ExpectError
	Complex128Array( buf, 8, false ); // $ExpectError
	Complex128Array( buf, 8, null ); // $ExpectError
	Complex128Array( buf, 8, 'abc' ); // $ExpectError
	Complex128Array( buf, 8, {} ); // $ExpectError
	Complex128Array( buf, 8, ( x: number ): number => x ); // $ExpectError
}

// The `from` method returns a complex number array...
{
	Complex128Array.from( [ 1.0, 1.0 ] ); // $ExpectType Complex128Array
	Complex128Array.from( [ 1.0, 1.0 ], ( x: number ): number => x * x ); // $ExpectType Complex128Array
	Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ], clbk, {} ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `from` method is provided a first argument which is not array-like or iterable...
{
	Complex128Array.from( true ); // $ExpectError
	Complex128Array.from( false ); // $ExpectError
	Complex128Array.from( 123 ); // $ExpectError
	Complex128Array.from( null ); // $ExpectError
	Complex128Array.from( {} ); // $ExpectError

	Complex128Array.from( true, clbk ); // $ExpectError
	Complex128Array.from( false, clbk ); // $ExpectError
	Complex128Array.from( 123, clbk ); // $ExpectError
	Complex128Array.from( null, clbk ); // $ExpectError
	Complex128Array.from( {}, clbk ); // $ExpectError

	Complex128Array.from( true, clbk, {} ); // $ExpectError
	Complex128Array.from( false, clbk, {} ); // $ExpectError
	Complex128Array.from( 123, clbk, {} ); // $ExpectError
	Complex128Array.from( null, clbk, {} ); // $ExpectError
	Complex128Array.from( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `from` method is provided a second argument which is not a function with a supported signature...
{
	Complex128Array.from( [ 1, 1 ], true ); // $ExpectError
	Complex128Array.from( [ 1, 1 ], false ); // $ExpectError
	Complex128Array.from( [ 1, 1 ], 123 ); // $ExpectError
	Complex128Array.from( [ 1, 1 ], null ); // $ExpectError
	Complex128Array.from( [ 1, 1 ], {} ); // $ExpectError
}

// The `of` method returns a complex number array...
{
	Complex128Array.of( 1.0, 1.0, 1.0, 1.0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `of` method is provided arguments that are not numbers...
{
	Complex128Array.of( 'abc', 'def' ); // $ExpectError
	Complex128Array.of( true, false ); // $ExpectError
	Complex128Array.of( {}, [] ); // $ExpectError
	Complex128Array.of( null, null ); // $ExpectError
}
