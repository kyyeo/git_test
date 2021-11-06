# Diary of a nascent web developer

Fri 08 Oct 2021 12:09:47 PM +08
## upgraded to markdown, instead of plain text
* ~~strikethrough~~
* [Link to GitHub markdown syntax](https://guides.github.com/features/mastering-markdown/#syntax)
* [More formatting help](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* blockquote
> testing a blockquote line 1
> blockquote line 2
* `<html>` inline code
* **remember** the blank, so that bullet points are parsed by GitHub!
  * 2 spaces for a subpoint!

## JavaScript breakpoints
* The breakpoints pane in Chrome devtools is useful to observe all identified breakpoints
* XHR stands for XMLHttpRequest and can be a breakpoint once send() is called
  * XHR breakpoints help debug incorrect URLs
* debug(functionName) to pause when a specific function is called
* Question: What does it mean when a target function is _in scope_?

## Functions
* _parameters_ describe the items between parentheses; it's a placeholder!
* _function arguments_ are passed to the function; the value to be used by the function!
* functions that are part of objects are commonly referred to as _methods_
* there is such a thing as an _anonymous_ function, which does not have a name (aka function expression, which is not hoisted). 
 * best used with an event handler.
> e.g. 
> const myGreeting = function() { alert('hello') };
* parameters are sometimes called arguments, properties, or even attributes

### Function Scope
* variables defined within a function are said to be _inside their own separate scope_
   * this means they are unreachable from code outside the function
* there is a top level known as **Global Scope**, where values are accesssible from everywhere
- [x] interestingly, if there are conflicting functions (e.g. similarly named) across multiple JavaScript source files, then the first function declaration is used, while the second is ignored
* functions can be called from **anywhere**, even from within another function. this behaviour differs from variables.
* **outer** variables are used only if there is no local variable within the function!
* in practice, global variables are used sparingly
* parameters can be set with default values, as part of the function declaration
> function showMessage(from, text="no text given"){...}

* || operator is useful in checking if a valid argument was passed to the function `text = text || 'empty'; //if undefined or falsy, then set as 'empty'`

 * another way is with the _nullish operator_ ?? which checks if an expression is defined (i.e. neither null nor undefined) `a ?? b; //if a is defined, then a. else, if a is undefined, then b.`
* `return` can also be used without a value!
> e.g.
> function showMovie(age) {
> 	if (!checkAge(age)) {
>	return;	
>	}
> 
> 	alert( "Showing you the movie"); // (*)
> 
> 	// ...
> }

* a function returning empty, or without a return, returns _undefined_
* **CAUTION!!** always complete `return` on the same line. if it requires multiple lines, then use an opening parentheses.
* **Best Practice** every function performs 1 action. if a function performs 2 actions, then split into 2 functions, and create a 3rd function which calls both!

### Arrow functions
* arrow functions simplify the syntax for creating functions
> let func = (arg1, arg2, ..., argN) => expression
> 
> vs
> 
> let func = function(arg1, arg2, ..., argN) {
> return expression;
> }

* [For more about Arrow Functions](https://javascript.info/arrow-functions)

### Function expressions vs function declaration
* peculiar thing about JavaScript functions: without parentheses following the function name, the function does not execute
> e.g.
> 
> alert (sayHi); //shows the function code instead

* functions can be copied to another variable
> e.g.
> 
> let func = SayHi;

* 2 ways to create functions:
1. function **declaration**:
> function sayHi() { alert ("hello"); }

2. function **expression**:
> let sayHi = function() { alert("hello"); };

* notice that one difference is the semi-colon at the end

* know that functions can be passed as a parameter to a function
  * it's how to refer to that function argumen within the expression/declaration which is key
> e.g.
> 
> function ask(question, yes, no) {
> 
> if (confirm(question)) yes()
> 
> else no();
> 
> }
> 
> ask("Do you agree?", showOk, showCancel);

* in the above example, showOk and showCancel are examples of **callback functions**
...[For more about JS callback functions](https://javascript.info/function-expressions)

* some subtle notes:
...function declaration can be called **earlier** than it is defined
...function expression is created when code execution reaches it, and is only usable from that moment (e.g. let welcome;)
...a function expression can be assigned to a variable ( e.g. welcome = function(){...} )
...a function declaration is visible within the block scope (i.e. {...}) where it resides
...however, if a function expression is assigned to a variable within the block scope, then it can be called even outside the block scope! 

### Call stacks
* [About Call Stacks](https://javascript.plainenglish.io/node-call-stack-explained-fd9df1c49d2e?gi=ed58e97ab7c6) and more technical JS matters; good read!
* LIFO (Last In, First Out) process
* when stepping into a function, it is added to the stack
* when returned, the function is popped off the top of the stack
* the **stack trace** tracks an error by logging to the browser console
* **stack overflow** occurs when the maximum call stack size is exceeded

# 3 step problem solving process:
1. Understand the problem
2. Plan how to solve the problem
* Interface?
* Inputs?
* Outputs?
3. Divide and conquer


# Arrays
* arrays have a forEach() function that can take a function to be performed on the array's elements
* new elements can be added either with push() or array[length]
* accessible through **numbers only**, as arrays start with index[0] (i.e. **numbered indexes**)
> e.g.
> 
> const person = ["John", "Doe", 46];

* an **object**'s member, on the other hand, can be accessed using its name (i.e. **named indexes**)
> e.g.
> 
> const person = {firstName:"John", lastName:"Doe", age:46};

* if named indexes are used on arrays, JS redefines it to an object, which will produce incorrect results when using some array methods/properties

* subtle difference between `const points=[40]` vs `const points = new Array(40);`
  * former creates one array with one element, while the latter creates an array with 40 undefined elements

* identifying an array (instead of using `typeof`):
1. `Array.isArray(fruits)` method
2. `instanceof` operator (e.g. `fruits instanceof Array;`)

# JavaScript Exercises

## 01_helloWorld
* `module.exports = <javascript function name>` is how a function is exported, so that `require()` imports it into the spec file

## 02_repeatString
* `if` functions to check arguments

## 03_reverseString
* `for` loop, but in descending order!

## 04_removeFromArray
* JavaScript isn't a _statically typed language_. Thus, arguments to a function declaration cannot 
* `splice` method is able to both ADD to or REMOVE array elements
* `arguments` to a function are indexed from zero
* it seems that the number of `arguments` cannot be restricted/home/ky/JavaScript30/12 - Key Sequence Detection

## 05_sumAll
* checking an argument as a string

## 06_leapYears
* remember that 0 is false and an integer is true

## 07_tempConversion
* interesting that JavaScript has no Math method to round to particular decimal places

## 08_calculator
* `arguments[]` cannot be used in the `return` statement
* arrays are of type `object`
* use `forEach` to loop through each element in an array. possible to apply a function on each item too.

## 09_palindromes & 10_fibonacci
* dealing with edge cases

# DOM manipulation
* kebab case is a variable naming convention where spaces between words are replaced with a dash
* kebab case hinders DOM manipulation, as camelcase or bracket notation needs to be used
* `defer` keyword is a way for `<script>` tag to delay loading until after the HTML is parsed, especially if `<script>` is within the `<head>` tag
* [JavaScript loading strategies](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#script_loading_strategies)
* [DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)
* remember that a **nodelist** is similar to an array (but different)
* [DOM enlightenment](http://domenlightenment.com/#6.2)
* [Keycode.info](https://Keycode.info)

## Callback functions
* `function(e)` is a callback from addEventListener
* `e` is an object referencing the event itself
* remember that functions can be assigned to variables
* note that _callbacks_ are just functions passed into other functions as arguments
* [Learn more about Callbacks](https://briggs.dev/blog/understanding-callbacks)

# JavaScript 30 by Wes Bos
## Make a drum kit
* `data` attributes allow developers to create and assign custom data points to HTML elements
> e.g. `data-keys`

* Not possible to event listen to a `nodelist` of elements; it is necessary to explicitly loop over every element in the nodelist and attach an event listener

# Back to Rock-Paper-Scissors
> `git checkout -b rps-ui` to create rps-ui branch
> 
> `git push origin rps-ui` to push rps-ui branch to remote repo
> 
> `git branch` to check current working branch
> 


# Objects
* [javascript.info](https://javascript.info/object)
* [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* object constructor (similar to function declarations) vs **object literal** (think figure brackets {}; usually preferred) syntax
* There are 8 data types in JavaScript. 7 of which are primitives, as they only hold 1 single piece of data. 
* Objects, as a data type, has a list of **properties**, that are `key: value` pairs.

## Object operators
* access an object's property value through dot `.`notation. However, dot notation does not work with expressions (e.g. `let key="likes birds"; object.key //undefined`)
* property keys can be named in a multiword fashion (e.g. "likes birds": true). However, the declaration must be in quotes. These leads to issues when retrieving values through dot notation, as `object.likes birds` is unrecognised. Best practice is to apply kebab case (e.g. likes_birds). One solution is to use square bracket notation `object["likes birds"]`, which can work with expressions (e.g. `let key="likes birds"; object[key]`)
* `delete` operator to remove a property (e.g. `delete object[key]`)

## Computed properties
* e.g. `[fruit]` 
* square brackets can be used in an object literal (i.e. `let bag = { [fruit]:5, };`)
* it results in the property **value** being named as expressed by the variable `fruit`
* in summary, SQUARE brackets for more complex situations, while DOT notation for straightforward applications

## Property value shorthand
* it's common to make a property from a variable
* thus, instead of `name:name`, `name` suffices
* e.g. `{ name, age, }` instead of `{ name:name, age:age }`

## Property name limitations
* there are language-reserved words such as `for` `let` `return` etc. 
* however, object properties face no such restriction/limitation, and can be any string, or even symbol
* be aware that if a numeral such as `0` is used, it becomes a string `"0"` when used as a property key
* note the special property name called `__proto__`

## Property existence test with `in` operator
* Reading a non-existing property would return `undefined`
* A better approach is to use the `in` operator 
* e.g. `"key" in object`
* The primary reason for doing so is to handle a situation where the value held by a key is equal to `undefined`. Then testing for `undefined` will not work reliably.
> let obj = { test: undefined };
> 
> alert( obj.test ); // it's undefined, so - no such property?
> 
> alert( "test" in obj ); // true, the property does exist!

## `for ... in` loop
> for (key in object) { }

* and alternative syntax: `for(prop in obj){}`

## Ordering
* Properties named by **integers** (i.e. 1, 2, 3 etc) are sorted (aka "integer properties)
* Other properties are sorted by creation order

## Functions within an Object
* A property's value can be a function!
> e.g.
> const person = { 
> bio: function() { ... } 
> }

