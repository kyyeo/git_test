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
** **cool** || operator is useful in checking if a valid argument was passed to the function `text = text || 'empty'; //if undefined or falsy, then set as 'empty'`
** another way is with the _nullish operator_ ?? which checks if an expression is defined (i.e. neither null nor undefined) `a ?? b; //if a is defined, then a. else, if a is undefined, then b.`
* `return` can also be without a value!
> e.g.
> function showMovie(age) {
> 	if (!checkAge(age)) {
>	return;	
>	}
> 
> 	alert( "Showing you the movie"); // (*)
> 	// ...
> }
* a function returning empty, or without a return, returns _undefined_
* **CAUTION!!** always complete `return` on the same line. if it requires multiple lines, then use an opening parentheses.
* **Best Practice** every function performs 1 action. if a function performs 2 actions, then split into 2 functions, and create a 3rd function which calls both!

### Arrow functions
* arrow functions simplify the syntax for creating functions
*




