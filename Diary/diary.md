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
* 



