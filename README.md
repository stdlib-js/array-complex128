<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Complex128Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 128-bit complex number array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-complex128
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
```

<a name="constructor"></a>

#### Complex128Array()

Creates a 128-bit complex number array.

```javascript
var arr = new Complex128Array();
// returns <Complex128Array>
```

#### Complex128Array( length )

Creates a 128-bit complex number array having a specified `length`.

```javascript
var arr = new Complex128Array( 10 );
// returns <Complex128Array>

var len = arr.length;
// returns 10
```

#### Complex128Array( complexarray )

Creates a 128-bit complex number array from another complex number array.

```javascript
var arr1 = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Complex128Array>

var arr2 = new Complex128Array( arr1 );
// returns <Complex128Array>

var len = arr2.length;
// returns 2
```

#### Complex128Array( typedarray )

Creates a 128-bit complex number array from a [typed array][@stdlib/array/typed] containing interleaved real and imaginary components.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var buf = new Float64Array( [ 1.0, -1.0, 2.0, -2.0 ] ); // [ re, im, re, im ]
// returns <Float64Array>[ 1.0, -1.0, 2.0, -2.0 ]

var arr = new Complex128Array( buf );
// returns <Complex128Array>

var len = arr.length;
// returns 2
```

#### Complex128Array( obj )

Creates a 128-bit complex number array from an array-like object or iterable.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// From an array of interleaved real and imaginary components:
var arr1 = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0 ] );
// returns <Complex128Array>

var len = arr1.length;
// returns 2

// From an array containing complex numbers:
var buf = [ new Complex128( 1.0, -1.0 ), new Complex128( 2.0, -2.0 ) ];
var arr2 = new Complex128Array( buf );

len = arr2.length;
// returns 2
```

#### Complex128Array( buffer\[, byteOffset\[, length]] )

Returns a 128-bit complex number array view of an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
var buf = new ArrayBuffer( 480 );

var arr1 = new Complex128Array( buf );
// returns <Complex128Array>

var len = arr1.length;
// returns 30

var arr2 = new Complex128Array( buf, 16 );
// returns <Complex128Array>

len = arr2.length;
// returns 29

var arr3 = new Complex128Array( buf, 16, 20 );
// returns <Complex128Array>

len = arr3.length;
// returns 20
```

* * *

### Properties

<a name="static-prop-bytes-per-element"></a>

#### Complex128Array.BYTES_PER_ELEMENT

Static property returning the size (in bytes) of each array element.

```javascript
var nbytes = Complex128Array.BYTES_PER_ELEMENT;
// returns 16
```

<a name="static-prop-name"></a>

#### Complex128Array.name

Static property returning the constructor name.

```javascript
var str = Complex128Array.name;
// returns 'Complex128Array'
```

<a name="prop-buffer"></a>

#### Complex128Array.prototype.buffer

Pointer to the underlying data buffer.

```javascript
var arr = new Complex128Array( 2 );
// returns <Complex128Array>

var buf = arr.buffer;
// returns <ArrayBuffer>
```

<a name="prop-byte-length"></a>

#### Complex128Array.prototype.byteLength

Size (in bytes) of the array.

```javascript
var arr = new Complex128Array( 10 );
// returns <Complex128Array>

var nbytes = arr.byteLength;
// returns 160
```

<a name="prop-byte-offset"></a>

#### Complex128Array.prototype.byteOffset

Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var arr = new Complex128Array( 10 );
// returns <Complex128Array>

var offset = arr.byteOffset;
// returns 0

var buf = new ArrayBuffer( 480 );
arr = new Complex128Array( buf, 128 );
// returns <Complex128Array>

offset = arr.byteOffset;
// returns 128
```

<a name="prop-bytes-per-element"></a>

#### Complex128Array.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element.

```javascript
var arr = new Complex128Array( 10 );
// returns <Complex128Array>

var nbytes = arr.BYTES_PER_ELEMENT;
// returns 16
```

<a name="prop-length"></a>

#### Complex128Array.prototype.length

Number of array elements.

```javascript
var arr = new Complex128Array( 10 );
// returns <Complex128Array>

var len = arr.length;
// returns 10
```

* * *

### Methods

<a name="static-method-from"></a>

#### Complex128Array.from( src\[, clbk\[, thisArg]] )

Creates a new 128-bit complex number array from an array-like object or an iterable.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Create an array from interleaved real and imaginary components:
var arr = Complex128Array.from( [ 1.0, -1.0 ] );
// returns <Complex128Array>

var len = arr.length;
// returns 1

// Create an array from an array of complex numbers:
arr = Complex128Array.from( [ new Complex128( 1.0, -1.0 ) ] );
// returns <Complex128Array>

len = arr.length;
// returns 1
```

The iterator returned by an iterable must return either a complex number or an array-like object containing a real and imaginary component.

```javascript
var ITERATOR_SYMBOL = require( '@stdlib/symbol-iterator' );
var Float64Array = require( '@stdlib/array-float64' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var iter;
var arr;
var len;
var re;
var im;
var z;

// Define a function which returns an iterator protocol-compliant object...
function iterable() {
    var buf = new Float64Array( 2 );
    var i = 0;
    return {
        'next': next
    };

    function next() {
        i += 1;
        if ( i < 3 ) {
            // Reuse allocated memory...
            buf[ 0 ] = i;
            buf[ 1 ] = -i;
            return {
                'value': buf
            };
        }
        return {
            'done': true
        };
    }
}

if ( ITERATOR_SYMBOL === null ) {
    console.error( 'Environment does not support iterables.' );
} else {
    // Create an iterable:
    iter = {};
    iter[ ITERATOR_SYMBOL ] = iterable;

    // Generate a complex number array:
    arr = Complex128Array.from( iter );
    // returns <Complex128Array>

    len = arr.length;
    // returns 2

    z = arr.get( 0 );
    // returns <Complex128>

    re = real( z );
    // returns 1.0

    im = imag( z );
    // returns -1.0
}
```

To invoke a function for each `src` value, provide a callback function. If `src` is an iterable or an array-like object containing complex numbers, the callback must return either a complex number

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function map( z ) {
    return new Complex128( real(z)*2.0, imag(z)*2.0 );
}

// Create a source array:
var src = [ new Complex128( 1.0, -1.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex128Array.from( src, map );
// returns <Complex128Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0
```

or an array-like object containing real and imaginary components

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

// Return a callback which reuses allocated memory...
function mapFcn() {
    var buf = new Float64Array( 2 );
    return map;

    function map( z ) {
        buf[ 0 ] = real( z ) * 2.0;
        buf[ 1 ] = imag( z ) * 2.0;
        return buf;
    }
}

// Create a source array:
var src = [ new Complex128( 1.0, -1.0 ), new Complex128( 2.0, -2.0 ) ];

// Create a new complex number array by scaling the source array:
var arr = Complex128Array.from( src, mapFcn() );
// returns <Complex128Array>

var len = arr.length;
// returns 2

var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0

z = arr.get( 1 );
// returns <Complex128>

re = real( z );
// returns 4.0

im = imag( z );
// returns -4.0
```

If `src` is an array-like object containing interleaved real and imaginary components, the callback is invoked for each component and should return the transformed component value.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function map( v ) {
    return v * 2.0;
}

// Create a source array:
var src = new Float64Array( [ 1.0, -1.0 ] );

// Create a new complex number array by scaling the source array:
var arr = Complex128Array.from( src, map );
// returns <Complex128Array>

var len = arr.length;
// returns 1

var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0
```

A callback function is provided two arguments:

-   **value**: source value.
-   **index**: source index.

To set the callback execution context, provide a `thisArg`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function map( z ) {
    this.count += 1;
    return new Complex128( real(z)*2.0, imag(z)*2.0 );
}

// Create a source array:
var src = [ new Complex128( 1.0, -1.0 ), new Complex128( 1.0, -1.0 ) ];

// Define an execution context:
var ctx = {
    'count': 0
};

// Create a new complex number array by scaling the source array:
var arr = Complex128Array.from( src, map, ctx );
// returns <Complex128Array>

var len = arr.length;
// returns 2

var n = ctx.count;
// returns 2
```

<a name="static-method-of"></a>

#### Complex128Array.of( element0\[, element1\[, ...elementN]] )

Creates a new 128-bit complex number array from a variable number of arguments.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = Complex128Array.of( 1.0, -1.0, 2.0, -2.0 );
// returns <Complex128Array>

var len = arr.length;
// returns 2

var z1 = new Complex128( 1.0, -1.0 );
var z2 = new Complex128( 2.0, -2.0 );

arr = Complex128Array.of( z1, z2 );
// returns <Complex128Array>

len = arr.length;
// returns 2
```

<a name="method-at"></a>

#### Complex128Array.prototype.at( i )

Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer positions.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Set the first, second, and last elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 9.0, -9.0 ], 9 );

// Get the first element:
var z = arr.at( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -1.0

// Get the last element:
z = arr.at( -1 );
// returns <Complex128>

re = real( z );
// returns 9.0

im = imag( z );
// returns -9.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Complex128Array( 10 );

var z = arr.at( 100 );
// returns undefined

z = arr.at( -100 );
// returns undefined
```

<a name="method-copy-within"></a>

#### Complex128Array.prototype.copyWithin( target, start\[, end] )

Copies a sequence of elements within the array starting at `start` and ending at `end` (non-inclusive) to the position starting at `target`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 4 );

// Set the array elements:
arr.set( new Complex128( 1.0, -1.0 ), 0 );
arr.set( new Complex128( 2.0, -2.0 ), 1 );
arr.set( new Complex128( 3.0, -3.0 ), 2 );
arr.set( new Complex128( 4.0, -4.0 ), 3 );

// Get the first array element:
var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -1.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns -2.0

// Copy the last two elements to the first two elements:
arr.copyWithin( 0, 2 );

// Get the first array element:
z = arr.get( 0 );
// returns <Complex128>

re = real( z );
// returns 3.0

im = imag( z );
// returns -3.0

// Get the second array element:
z = arr.get( 1 );
// returns <Complex128>

re = real( z );
// returns 4.0

im = imag( z );
// returns -4.0
```

By default, `end` equals the number of array elements (i.e., one more than the last array index). To limit the sequence length, provide an `end` argument.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 4 );

// Set the array elements:
arr.set( new Complex128( 1.0, -1.0 ), 0 );
arr.set( new Complex128( 2.0, -2.0 ), 1 );
arr.set( new Complex128( 3.0, -3.0 ), 2 );
arr.set( new Complex128( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex128>

re = real( z );
// returns 4.0

im = imag( z );
// returns -4.0

// Copy the first two elements to the last two elements:
arr.copyWithin( 2, 0, 2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns -2.0
```

When a `target`, `start`, and/or `end` index is negative, the respective index is determined relative to the last array element. The following example achieves the same behavior as the previous example:

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 4 );

// Set the array elements:
arr.set( new Complex128( 1.0, -1.0 ), 0 );
arr.set( new Complex128( 2.0, -2.0 ), 1 );
arr.set( new Complex128( 3.0, -3.0 ), 2 );
arr.set( new Complex128( 4.0, -4.0 ), 3 );

// Get the third array element:
var z = arr.get( 2 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns -3.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex128>

re = real( z );
// returns 4.0

im = imag( z );
// returns -4.0

// Copy the first two elements to the last two elements using negative indices:
arr.copyWithin( -2, -4, -2 );

// Get the third array element:
z = arr.get( 2 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns -1.0

// Get the last array element:
z = arr.get( 3 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns -2.0
```

<a name="method-entries"></a>

#### Complex128Array.prototype.entries()

Returns an iterator for iterating over array key-value pairs.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = [
    new Complex128( 1.0, -1.0 ),
    new Complex128( 2.0, -2.0 ),
    new Complex128( 3.0, -3.0 )
];
arr = new Complex128Array( arr );

// Create an iterator:
var it = arr.entries();

// Iterate over the key-value pairs...
var v = it.next().value;
// returns [ 0, <Complex128> ]

var re = real( v[ 1 ] );
// returns 1.0

var im = imag( v[ 1 ] );
// returns -1.0

v = it.next().value;
// returns [ 1, <Complex128> ]

re = real( v[ 1 ] );
// returns 2.0

im = imag( v[ 1 ] );
// returns -2.0

v = it.next().value;
// returns [ 2, <Complex128> ]

re = real( v[ 1 ] );
// returns 3.0

im = imag( v[ 1 ] );
// returns -3.0

var bool = it.next().done;
// returns true
```

<a name="method-every"></a>

#### Complex128Array.prototype.every( predicate\[, thisArg] )

Returns a boolean indicating whether all elements pass a test.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

// Check whether all elements pass a test:
var bool = arr.every( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var bool = arr.every( predicate, context );
// returns true

var count = context.count;
// returns 3
```

<a name="method-fill"></a>

#### Complex128Array.prototype.fill( value\[, start\[, end]] )

Returns a modified typed array filled with a fill value.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 3 );

// Set all elements to the same value:
arr.fill( new Complex128( 1.0, 1.0 ) );

var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 1.0

z = arr.get( 2 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns 1.0

// Fill all elements starting from the second element:
arr.fill( new Complex128( 2.0, 2.0 ), 1 );

z = arr.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns 2.0

z = arr.get( 2 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns 2.0

// Fill all elements from first element until the second-to-last element:
arr.fill( new Complex128( 3.0, 3.0 ), 0, 2 );

z = arr.get( 0 );
// returns <Complex128>

re = real( z );
// returns 3.0

im = imag( z );
// returns 3.0

z = arr.get( 1 );
// returns <Complex128>

re = real( z );
// returns 3.0

im = imag( z );
// returns 3.0
```

When a `start` and/or `end` index is negative, the respective index is determined relative to the last array element.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 3 );

// Set all array elements, except the last element, to the same value:
arr.fill( new Complex128( 1.0, 1.0 ), 0, -1 );

var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 1.0

z = arr.get( arr.length - 1 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

<a name="method-filter"></a>

#### Complex128Array.prototype.filter( predicate\[, thisArg] )

Returns a new array containing the elements of an array which pass a test implemented by a predicate function.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var out = arr.filter( predicate );
// returns <Complex128Array>

var len = out.length;
// returns 1

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns 2.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.filter( predicate, context );
// returns <Complex128Array>

var len = out.length;
// returns 2

var count = context.count;
// returns 3
```

<a name="method-find"></a>

#### Complex128Array.prototype.find( predicate\[, thisArg] )

Returns the first element in an array for which a predicate function returns a truthy value.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.find( predicate );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 1.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.find( predicate, context );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns 2.0

var count = context.count;
// returns 2
```

<a name="method-find-index"></a>

#### Complex128Array.prototype.findIndex( predicate\[, thisArg] )

Returns the index of the first element in an array for which a predicate function returns a truthy value.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var idx = arr.findIndex( predicate );
// returns 2
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findIndex( predicate, context );
// returns -1

var count = context.count;
// returns 3
```

<a name="method-find-last"></a>

#### Complex128Array.prototype.findLast( predicate\[, thisArg] )

Returns the last element in an array for which a predicate function returns a truthy value.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.findLast( predicate );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 3.0
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var z = arr.findLast( predicate, context );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns 2.0

var count = context.count;
// returns 2
```

<a name="method-find-last-index"></a>

#### Complex128Array.prototype.findLastIndex( predicate\[, thisArg] )

Returns the index of the last element in an array for which a predicate function returns a truthy value.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findLastIndex( predicate );
// returns 1
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( i >= 0 && real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var idx = arr.findLastIndex( predicate, context );
// returns -1

var count = context.count;
// returns 3
```

<a name="method-for-each"></a>

#### Complex128Array.prototype.forEach( callbackFn\[, thisArg] )

Invokes a function once for each array element.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

function log( v, i ) {
    console.log( '%s: %s', i, v.toString() );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

arr.forEach( log );
/* =>
    0: 1 + 1i
    1: 2 + 2i
    2: 3 + 3i
*/
```

The invoked function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

function fcn( v, i ) {
    this.count += 1;
    console.log( '%s: %s', i, v.toString() );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

arr.forEach( fcn, context );
/* =>
    0: 1 + 1i
    1: 2 + 2i
    2: 3 + 3i
*/

var count = context.count;
// returns 3
```

<a name="method-get"></a>

#### Complex128Array.prototype.get( i )

Returns an array element located at position (index) `i`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Set the first element:
arr.set( [ 1.0, -1.0 ], 0 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -1.0
```

If provided an out-of-bounds index, the method returns `undefined`.

```javascript
var arr = new Complex128Array( 10 );

var z = arr.get( 100 );
// returns undefined
```

<a name="method-includes"></a>

#### Complex128Array.prototype.includes( searchElement\[, fromIndex] )

Returns a boolean indicating whether an array includes a provided value.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 5.0, -5.0 ], 4 );

var bool = arr.includes( new Complex128( 3.0, -3.0 ) );
// returns true

bool = arr.includes( new Complex128( 3.0, -3.0 ), 3 );
// returns false

bool = arr.includes( new Complex128( 4.0, -4.0 ), -3 );
// returns true
```

<a name="method-index-of"></a>

#### Complex128Array.prototype.indexOf( searchElement\[, fromIndex] )

Returns the first index at which a given element can be found.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 2.0, -2.0 ], 4 );

var idx = arr.indexOf( new Complex128( 3.0, -3.0 ) );
// returns 2

idx = arr.indexOf( new Complex128( 2.0, -2.0 ), 2 );
// returns 4

idx = arr.indexOf( new Complex128( 4.0, -4.0 ), -3 );
// returns 3
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var idx = arr.indexOf( new Complex128( 3.0, -3.0 ) );
// returns -1

idx = arr.indexOf( new Complex128( 1.0, -1.0 ), 1 );
// returns -1
```

<a name="method-join"></a>

#### Complex128Array.prototype.join( \[separator] )

Returns a new string by concatenating all array elements.

```javascript
var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.join();
// returns '1 + 1i,2 - 2i,3 + 3i'
```

By default, the method separates serialized array elements with a comma. To use an alternative separator, provide a `separator` string.

```javascript
var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.join( '/' );
// returns '1 + 1i/2 - 2i/3 + 3i'
```

<a name="method-keys"></a>

#### Complex128Array.prototype.keys()

Returns an iterator for iterating over each index key in a typed array.

```javascript
var arr = new Complex128Array( 2 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var iter = arr.keys();

var v = iter.next().value;
// returns 0

v = iter.next().value;
// returns 1

var bool = iter.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

<a name="method-last-index-of"></a>

#### Complex128Array.prototype.lastIndexOf( searchElement\[, fromIndex] )

Returns the last index at which a given element can be found.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );
arr.set( [ 4.0, -4.0 ], 3 );
arr.set( [ 2.0, -2.0 ], 4 );

var idx = arr.lastIndexOf( new Complex128( 3.0, -3.0 ) );
// returns 2

idx = arr.lastIndexOf( new Complex128( 2.0, -2.0 ), 2 );
// returns 1

idx = arr.lastIndexOf( new Complex128( 4.0, -4.0 ), -1 );
// returns 3
```

If `searchElement` is not present in the array, the method returns `-1`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 5 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var idx = arr.lastIndexOf( new Complex128( 3.0, -3.0 ) );
// returns -1

idx = arr.lastIndexOf( new Complex128( 2.0, -2.0 ), 0 );
// returns -1
```

<a name="method-map"></a>

#### Complex128Array.prototype.map( callbackFn\[, thisArg] )

Returns a new array with each element being the result of a provided callback function.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function scale( v ) {
    return new Complex128( 2.0*real( v ), 2.0*imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var out = arr.map( scale );
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0
```

The callback function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function scale( v ) {
    this.count += 1;
    return new Complex128( 2.0*real( v ), 2.0*imag( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.map( scale, context );
// returns <Complex128Array>

var count = context.count;
// returns 3
```

<a name="method-reduce"></a>

#### Complex128Array.prototype.reduce( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in order, passing in the return value from the calculation on the preceding element and returning the accumulated result upon completion.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var cadd = require( '@stdlib/complex-float64-base-add' );

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.reduce( cadd );
// returns <Complex128>

var re = real( z );
// returns 6.0

var im = imag( z );
// returns 6.0
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the first element in the array and passes the second array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the first array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
var real = require( '@stdlib/complex-float64-real' );

function reducer( acc, v ) {
    acc += real( v );
    return acc;
}

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.reduce( reducer, 0.0 );
// returns 6.0
```

<a name="method-reduce-right"></a>

#### Complex128Array.prototype.reduceRight( reducerFn\[, initialValue] )

Applies a provided callback function to each element of the array, in reverse order, passing in the return value from the calculation on the following element and returning the accumulated result upon completion.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var cadd = require( '@stdlib/complex-float64-base-add' );

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.reduceRight( cadd );
// returns <Complex128>

var re = real( z );
// returns 6.0

var im = imag( z );
// returns 6.0
```

The reducer function is provided four arguments:

-   **acc**: accumulated result.
-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

By default, the function initializes the accumulated result to the last element in the array and passes the second-last array element as `value` during the first invocation of the provided callback. To begin accumulation from a different starting value and pass in the last array element as `value` during the first invocation of the provided callback, provide an `initialValue` argument.

```javascript
var real = require( '@stdlib/complex-float64-real' );

function reducer( acc, v ) {
    acc += real( v );
    return acc;
}

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var z = arr.reduceRight( reducer, 0.0 );
// returns 6.0
```

<a name="method-reverse"></a>

#### Complex128Array.prototype.reverse()

Reverses an array in-place.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.reverse();
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 3.0

z = out.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns 2.0

z = out.get( 2 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns 1.0
```

<a name="method-set"></a>

#### Complex128Array.prototype.set( z\[, i] )

Sets one or more array elements.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Get the first element:
var z = arr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 0.0

var im = imag( z );
// returns 0.0

// Set the first element:
arr.set( new Complex128( 1.0, -1.0 ) );

// Get the first element:
z = arr.get( 0 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns -1.0
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Get the fifth element:
var z = arr.get( 4 );
// returns <Complex128>

var re = real( z );
// returns 0.0

var im = imag( z );
// returns 0.0

// Set the fifth element:
arr.set( new Complex128( 1.0, -1.0 ), 4 );

// Get the fifth element:
z = arr.get( 4 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns -1.0
```

In addition to providing a complex number, to set one or more array elements, provide an array-like object containing either complex numbers

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Define an array of complex numbers:
var buf = [
    new Complex128( 1.0, -1.0 ),
    new Complex128( 2.0, -2.0 ),
    new Complex128( 3.0, -3.0 )
];

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0
```

or interleaved real and imaginary components

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 10 );

// Define an interleaved array of real and imaginary components:
var buf = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );

// Set the fifth, sixth, and seventh elements:
arr.set( buf, 4 );

// Get the sixth element:
var z = arr.get( 5 );
// returns <Complex128>

var re = real( z );
// returns 2.0

var im = imag( z );
// returns -2.0
```

A few notes:

-   If `i` is out-of-bounds, the method throws an error.
-   If a target array cannot accommodate all values (i.e., the length of source array plus `i` exceeds the target array length), the method throws an error.
-   If provided a [typed array][@stdlib/array/typed] which shares an [`ArrayBuffer`][@stdlib/array/buffer] with the target array, the method will intelligently copy the source range to the destination range.

<a name="method-slice"></a>

#### Complex128Array.prototype.slice( \[start\[, end]] )

Copies a portion of a typed array to a new typed array.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var out = arr.slice();
// returns <Complex128Array>

var len = out.length;
// returns 4

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0

z = out.get( len-1 );
// returns <Complex128>

re = real( z );
// returns 7.0

im = imag( z );
// returns 8.0
```

By default, the method returns a typed array beginning with the first array element. To specify an alternative array index at which to begin, provide a `start` index (inclusive).

```javascript
var imag = require( '@stdlib/complex-float64-imag' );
var real = require( '@stdlib/complex-float64-real' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var out = arr.slice( 1 );
// returns <Complex128Array>

var len = out.length;
// returns 3

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0
```

By default, the method returns a typed array which includes all array elements after `start`. To limit the number of array elements after `start`, provide an `end` index (exclusive).

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var out = arr.slice( 1, -1 );
// returns <Complex128Array>

var len = out.length;
// returns 2

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0

z = out.get( len-1 );
// returns <Complex128>

re = real( z );
// returns 5.0

im = imag( z );
// returns 6.0
```

<a name="method-some"></a>

#### Complex128Array.prototype.some( predicate\[, thisArg] )

Returns a boolean indicating whether at least one element passes a test.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v ) {
    return ( real( v ) === imag( v ) );
}

var arr = new Complex128Array( 3 );

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

// Check whether at least one element passes a test:
var bool = arr.some( predicate );
// returns true
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the array on which this method was called.

To set the function execution context, provide a `thisArg`.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function predicate( v, i ) {
    this.count += 1;
    return ( imag( v ) === real( v ) );
}

var arr = new Complex128Array( 3 );

var context = {
    'count': 0
};

// Set the first three elements:
arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, -3.0 ], 2 );

var bool = arr.some( predicate, context );
// returns true

var count = context.count;
// returns 2
```

<a name="method-sort"></a>

#### Complex128Array.prototype.sort( compareFcn )

Sorts an array in-place.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function compare( a, b ) {
    var re1;
    var re2;
    var im1;
    var im2;
    re1 = real( a );
    re2 = real( b );
    if ( re1 < re2 ) {
        return -1;
    }
    if ( re1 > re2 ) {
        return 1;
    }
    im1 = imag( a );
    im2 = imag( b );
    if ( im1 < im2 ) {
        return -1;
    }
    if ( im1 > im2 ) {
        return 1;
    }
    return 0;
}

var arr = new Complex128Array( 3 );

arr.set( [ 3.0, -3.0 ], 0 );
arr.set( [ 1.0, -1.0 ], 1 );
arr.set( [ 2.0, -2.0 ], 2 );

var out = arr.sort( compare );
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -1.0

z = out.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns -2.0

z = out.get( 2 );
// returns <Complex128>

re = real( z );
// returns 3.0

im = imag( z );
// returns -3.0
```

The `compareFcn` determines the order of the elements. The function is called with the following arguments:

-   **a**: the first element for comparison.
-   **b**: the second element for comparison.

The function should return a number where:

-   a negative value indicates that `a` should come before `b`.
-   a positive value indicates that `a` should come after `b`.
-   zero or `NaN` indicates that `a` and `b` are considered equal.

In contrast to real numbers, one cannot define a default order relation which is compatible with multiplication. Accordingly, users **must** explicitly provide a `compareFcn` argument and are thus responsible for specifying a complex number ordering.

<a name="method-subarray"></a>

#### Complex128Array.prototype.subarray( \[begin\[, end]] )

Creates a new typed array view over the same underlying [`ArrayBuffer`][@stdlib/array/buffer] and with the same underlying data type as the host array.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray();
// returns <Complex128Array>

var len = subarr.length;
// returns 4

var z = subarr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0

z = subarr.get( len-1 );
// returns <Complex128>

re = real( z );
// returns 7.0

im = imag( z );
// returns 8.0
```

By default, the method creates a typed array view beginning with the first array element. To specify an alternative array index at which to begin, provide a `begin` index (inclusive).

```javascript
var imag = require( '@stdlib/complex-float64-imag' );
var real = require( '@stdlib/complex-float64-real' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray( 1 );
// returns <Complex128Array>

var len = subarr.length;
// returns 3

var z = subarr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0
```

By default, the method creates a typed array view which includes all array elements after `begin`. To limit the number of array elements after `begin`, provide an `end` index (exclusive).

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var subarr = arr.subarray( 1, -1 );
// returns <Complex128Array>

var len = subarr.length;
// returns 2

var z = subarr.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0

z = subarr.get( len-1 );
// returns <Complex128>

re = real( z );
// returns 5.0

im = imag( z );
// returns 6.0
```

<a name="method-to-locale-string"></a>

#### Complex128Array.prototype.toLocaleString( \[locales\[, options]] )

Serializes an array as a locale-specific string.

```javascript
var arr = new Complex128Array( 2 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );

var str = arr.toLocaleString();
// returns '1 + 1i,2 + 2i'
```

The method supports the following arguments:

-   **locales**: a string with a BCP 47 language tag or an array of such strings.
-   **options**: configuration properties.

<a name="method-to-reversed"></a>

#### Complex128Array.prototype.toReversed()

Returns a new typed array containing the elements in reversed order.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var out = arr.toReversed();
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 3.0

z = out.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns 2.0

z = out.get( 2 );
// returns <Complex128>

re = real( z );
// returns 1.0

im = imag( z );
// returns 1.0
```

<a name="method-to-sorted"></a>

#### Complex128Array.prototype.toSorted( compareFcn )

Returns a new typed array containing the elements in sorted order.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

function compare( a, b ) {
    var re1;
    var re2;
    var im1;
    var im2;
    re1 = real( a );
    re2 = real( b );
    if ( re1 < re2 ) {
        return -1;
    }
    if ( re1 > re2 ) {
        return 1;
    }
    im1 = imag( a );
    im2 = imag( b );
    if ( im1 < im2 ) {
        return -1;
    }
    if ( im1 > im2 ) {
        return 1;
    }
    return 0;
}

var arr = new Complex128Array( 3 );

arr.set( [ 3.0, -3.0 ], 0 );
arr.set( [ 1.0, -1.0 ], 1 );
arr.set( [ 2.0, -2.0 ], 2 );

var out = arr.toSorted( compare );
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns -1.0

z = out.get( 1 );
// returns <Complex128>

re = real( z );
// returns 2.0

im = imag( z );
// returns -2.0

z = out.get( 2 );
// returns <Complex128>

re = real( z );
// returns 3.0

im = imag( z );
// returns -3.0
```

The `compareFcn` determines the order of the elements. The function is called with the following arguments:

-   **a**: the first element for comparison.
-   **b**: the second element for comparison.

The function should return a number where:

-   a negative value indicates that `a` should come before `b`.
-   a positive value indicates that `a` should come after `b`.
-   zero or `NaN` indicates that `a` and `b` are considered equal.

In contrast to real numbers, one cannot define a default order relation which is compatible with multiplication. Accordingly, users **must** explicitly provide a `compareFcn` argument and are thus responsible for specifying a complex number ordering.

<a name="method-to-string"></a>

#### Complex128Array.prototype.toString()

Serializes an array as a string.

```javascript
var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 2 );

var str = arr.toString();
// returns '1 + 1i,2 - 2i,3 + 3i'
```

<a name="method-values"></a>

#### Complex128Array.prototype.values()

Returns an iterator for iterating over each value in a typed array.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var arr = new Complex128Array( 2 );

arr.set( [ 1.0, -1.0 ], 0 );
arr.set( [ 2.0, -2.0 ], 1 );

var iter = arr.values();

var v = iter.next().value;
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns -1.0

v = iter.next().value;
// returns <Complex128>

re = real( v );
// returns 2.0

im = imag( v );
// returns -2.0

var bool = iter.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

<a name="method-with"></a>

#### Complex128Array.prototype.with( index, value )

Returns a new typed array with the element at a provided index replaced with a provided value.

```javascript
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var arr = new Complex128Array( 3 );

arr.set( [ 1.0, 1.0 ], 0 );
arr.set( [ 2.0, 2.0 ], 1 );
arr.set( [ 3.0, 3.0 ], 1 );

var out = arr.with( 0, new Complex128( 4.0, 4.0 ) );
// returns <Complex128Array>

var z = out.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 4.0

var im = imag( z );
// returns 4.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   While a `Complex128Array` _strives_ to maintain (but does not **guarantee**) consistency with [typed arrays][@stdlib/array/typed], significant deviations from ECMAScript-defined [typed array][@stdlib/array/typed] behavior are as follows:

    -   The constructor does **not** require the `new` operator.
    -   The constructor and associated methods support a broader variety of input argument types in order to better accommodate complex number input.
    -   Accessing array elements using bracket syntax (e.g., `Z[i]`) is **not** supported. Instead, one **must** use the `.get()` method which returns a value compatible with complex number output.
    -   The `set` method has extended behavior in order to support complex numbers.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Float64Array = require( '@stdlib/array-float64' );
var logEach = require( '@stdlib/console-log-each' );
var Complex128Array = require( '@stdlib/array-complex128' );

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-complex64`][@stdlib/array/complex64]</span><span class="delimiter">: </span><span class="description">Complex64Array.</span>
-   <span class="package-name">[`@stdlib/complex-cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex-float64/ctor`][@stdlib/complex/float64/ctor]</span><span class="delimiter">: </span><span class="description">128-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-complex128.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-complex128

[test-image]: https://github.com/stdlib-js/array-complex128/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-complex128/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-complex128/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-complex128?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-complex128.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-complex128/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-complex128/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-complex128/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-complex128/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-complex128/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-complex128/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-complex128/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-complex128/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-complex128/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

<!-- <related-links> -->

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx

<!-- </related-links> -->

</section>

<!-- /.links -->
