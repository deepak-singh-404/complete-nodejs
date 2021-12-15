`
One process => its a global object and can be accessed anywhere.
One thread => only one set of instructions is executed at a time in a given process.
One event loop => Node to be asynchronous and have non-blocking I/O
                  by offloading operations to the system kernel whenever possible through callbacks,
                  promises and async/await.
One JS Engine Instance => 
One Node.js Instance

In other words, Node runs on a single thread, and there is just one process happening at a time
in the event loop. One code, one execution, (the code is not executed in parallel). This is 
very useful because it simplifies how you use JavaScript without worrying about concurrency issues.

ALL POSTS NODE.JS
Understanding Worker Threads in Node.js
by:
Liz Parody
Liz Parody
in Node.js on Jun 20 2019

Node.js
JavaScript
SHARE
To understand Workers, first, it’s necessary to understand how Node.js is structured.

When a Node.js process is launched, it runs:

One process
One thread
One event loop
One JS Engine Instance
One Node.js Instance
One process: a process is a global object that can be accessed anywhere and has information about what’s being executed at a time.

One thread: being single-threaded means that only one set of instructions is executed at a time in a given process.

One event loop: this is one of the most important aspects to understand about Node. It’s what allows Node to be asynchronous and have non-blocking I/O, — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible through callbacks, promises and async/await.

One JS Engine Instance: this is a computer program that executes JavaScript code.

One Node.js Instance: the computer program that executes Node.js code.

In other words, Node runs on a single thread, and there is just one process happening at a time in the event loop. One code, one execution, (the code is not executed in parallel). This is very useful because it simplifies how you use JavaScript without worrying about concurrency issues.

The reason it was built with that approach is that JavaScript was initially created for client-side interactions (like web page interactions, or form validation) -- nothing that required the complexity of multithreading.

But, as with all things, there is a downside: if you have CPU-intensive code, like complex calculations in a large dataset taking place in-memory, it can block other processes from being executed. Similarly, If you are making a request to a server that has CPU-intensive code, that code can block the event loop and prevent other requests of being handled.




It’s important to differentiate between CPU operations and I/O (input/output) operations. As mentioned earlier, the code of Node.js is NOT executed in parallel. Only I/O operations are run in parallel, because they are executed asynchronously.

So Worker Threads will not help much with I/O-intensive work because asynchronous I/O operations are more efficient than Workers can be. The main goal of Workers is to improve the performance on CPU-intensive operations not I/O operations.



CPU INTENSIVE
RAM INVOLVE
IN MEMORY DATA SRUCTURE



I/O OPERATIONS

reading/writing data from/to a disk,
making HTTP requests,
and talking to databases



Blocking methods execute synchronously while non-blocking methods execute asynchronously.


`