<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Complex128Array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

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

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex128Array = require( '@stdlib/array-complex128' );

var arr;
var out;

// Create a complex array by specifying a length:
out = new Complex128Array( 3 );
console.log( out );

// Create a complex array from an array of complex numbers:
arr = [
    new Complex128( 1.0, -1.0 ),
    new Complex128( -3.14, 3.14 ),
    new Complex128( 0.5, 0.5 )
];
out = new Complex128Array( arr );
console.log( out );

// Create a complex array from an interleaved typed array:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr );
console.log( out );

// Create a complex array from an array buffer:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr.buffer );
console.log( out );

// Create a complex array from an array buffer view:
arr = new Float64Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] );
out = new Complex128Array( arr.buffer, 16, 2 );
console.log( out );
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

-   [`@stdlib/array/complex64`][@stdlib/array/complex64]: complex64Array.
-   [`@stdlib/complex/cmplx`][@stdlib/complex/cmplx]: create a complex number.
-   [`@stdlib/complex/float64`][@stdlib/complex/float64]: 128-bit complex number.

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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-complex128.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-complex128

[test-image]: https://github.com/stdlib-js/array-complex128/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array-complex128/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-complex128/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-complex128?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-complex128.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-complex128/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-complex128/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64

<!-- </related-links> -->

</section>

<!-- /.links -->
