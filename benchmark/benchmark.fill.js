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

var bench = require( '@stdlib/bench-harness' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var isComplex128Array = require( '@stdlib/assert-is-complex128array' );
var pkg = require( './../package.json' ).name;
var Complex128Array = require( './../lib' );


// MAIN //

bench( pkg+':fill', function benchmark( b ) {
	var values;
	var arr;
	var out;
	var i;

	values = [
		new Complex128( 1.0, 1.0 ),
		new Complex128( 2.0, 2.0 ),
		new Complex128( 3.0, 3.0 )
	];
	arr = new Complex128Array( 5 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.fill( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex128Array( out ) ) {
		b.fail( 'should return a Complex128Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
