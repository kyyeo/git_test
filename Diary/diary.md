# Diary of a nascent web developer

Fri 08 Oct 2021 12:09:47 PM +08
## upgraded to markdown, instead of plain text
* ~~strikethrough~~
* [Link to GitHub markdown syntax](https://guides.github.com/features/mastering-markdown/#syntax)
* blockquote
> testing a blockquote line 1
> blockquote line 2
* `<html>` inline code
* **remember** the blank, so that bullet points are parsed by GitHub!

## JavaScript breakpoints
* The breakpoints pane in Chrome devtools is useful to observe all identified breakpoints
* XHR stands for XMLHttpRequest and can be a breakpoint once send() is called
  * 2 spaces for a subpoint!
  * XHR breakpoints help debug incorrect URLs
* debug(functionName) to pause when a specific function is called
* Question: What does it mean when a target function is _in scope_?

## Functions
* _parameters_ describe the items between parentheses; it's a placeholder!
* _function arguments_ are passed to the function; the value to be used by the function!
* functions that are part of objects are commonly referred to as _methods_
* there is such a thing as an _anonymous_ function, which does not have a name (aka function expression, which is not hoisted). 
** best used with an event handler.
> e.g. 
> const myGreeting = function() { alert('hello') };
* parameters are sometimes called arguments, properties, or even attributes

### Function Scope
* variables defined within a function are said to be _inside their own separate scope_
** this means they are unreachable from code outside the function
* there is a top level known as **Global Scope**, where values are accesssible from everywhere
- [x] interestingly, if there are conflicting functions (e.g. similarly named) across multiple JavaScript source files, then the first function declaration is used, while the second is ignored
* functions can be called from **anywhere**, even from within another function. this behaviour differs from variables.
* **outer** variables are used only if there is no local variable within the function!
* in practice, global variables are used sparingly
* parameters can be set with default values, as part of the function declaration
> function showMessage(from, text="no text given"){...}

* || operator is useful in checking if a valid argument was passed to the function `text = text || 'empty'; //if undefined or falsy, then set as 'empty'`

** another way is with the _nullish operator_ ?? which checks if an expression is defined (i.e. neither null nor undefined) `a ?? b; //if a is defined, then a. else, if a is undefined, then b.`
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

*2 ways to create functions:
** function **declaration**:
> function sayHi() { alert ("hello"); }

** function **expression**:
> let sayHi = function() { alert("hello"); };

** notice that one difference is the semi-colon at the end
* know that functions can be passed as a parameter to a function
** it's how to refer to that function argumen within the expression/declaration which is key
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
** [For more about JS callback functions](https://javascript.info/function-expressions)

* some subtle notes:
** function declaration can be called **earlier** than it is defined
** function expression is created when code execution reaches it, and is only usable from that moment (e.g. let welcome;)
** a function expression can be assigned to a variable ( e.g. welcome = function(){...} )
** a function declaration is visible within the block scope (i.e. {...}) where it resides
** however, if a function expression is assigned to a variable within the block scope, then it can be called even outside the block scope! 

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
* accessible through names, as arrays are objects starting with index[0]
* arrays have a forEach() function that can take a function to be performed on the array's elements
* 
