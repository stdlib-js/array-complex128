/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var logEach = require( '@stdlib/console-log-each' );
var Complex128Array = require( './../lib' );

// Create a complex array by specifying a length:
var out = new Complex128Array( 3 );
logEach( '%s', out );

// Create a complex array from an array of complex numbers:
var arr = [
	new Complex128( 1.0, -1.0 ),
	new Complex128( -3.14, 3.14 ),
	new Complex128( 0.5, 0.5 )
];
out = new Complex128Array( arr );
logEach( '%s', out );

// Create a complex array from an interleaved typed array:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr );
logEach( '%s', out );

// Create a complex array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr.buffer );
logEach( '%s', out );

// Create a complex array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr.buffer, 16, 2 );
logEach( '%s', out );
