// console.log(a); // Heap Memory
// // console.log(b);

// a = 5;
// console.log(a);
// var a;

// var - Globe Scope
// let, const - Block Scope 

// function b() {
//     console.log("xyz");
// }

// Hoisting

// Stack vs Query

// CALL STACK - Sync runs directly from call stack

function b() {
    console.log("my func");
}
b();

// Asynchronous (Web APIs) or Synchrous (Simple or Core)

// setInterval(() => console.log("hello"), 1000);
// setTimeout(() => console.log("hello world"), 10000);
// fetch("/");

/* Async
- Web API'S
- Call Stack
- Callback Queue
- Event Loop
*/


// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);


// console.log(1); // sync
// setTimeout(() => console.log(2), 0); // async
// console.log(3); // sync

// Node.js (Unblocking Asynchronous I/O, Multi-thread (worker thread))

// JavaScript Side (JavaScript Internals)
// C++ Addons Side
// Libuv (Threads)
// V8