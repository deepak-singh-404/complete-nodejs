https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/

It’s important to differentiate between CPU operations and I/O (input/output) operations. As mentioned earlier, the code of Node.js is NOT executed in parallel. Only I/O operations are run in parallel, because they are executed asynchronously.

So Worker Threads will not help much with I/O-intensive work because asynchronous I/O operations are more efficient than Workers can be. The main goal of Workers is to improve the performance on CPU-intensive operations not I/O operations.


https://nodesource.com/blog/worker-threads-nodejs/