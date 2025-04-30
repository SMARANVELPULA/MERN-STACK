problem 1:
In the first console.log, the counter increases to 1.
The second log also increases the counter to 2, since it’s using the same function reference.
However, the third console.log starts fresh from 0 because it uses a new function definition, even though it might look similar.

probelm 2:
Expected output:

"Hello, Alice!"

"Hello, Bob!"

"Hello, Charlie!"

What really happened:
All messages print with the same final value of i, due to var being function-scoped, not block-scoped.
This means the loop completes before the callbacks inside setTimeout run, so i is the last value each time.

section 2
part A:

When you try to use a variable before declaring it, the behavior depends on how it was declared:
With var, the variable is hoisted to the top of the function and initialized as undefined. You won’t get an error, but the value is not yet assigned.
With let or const, although the declaration is hoisted, they are not initialized, so accessing them before declaration causes a ReferenceError. This period is called the Temporal Dead Zone (TDZ).

part B:

inside setTimeout, the function loses its original context, so this no longer refers to the object.
Solutions:
Store this in another variable (e.g., const self = this) before the setTimeout call.


 part C:
 
 When a function is created inside another function, the inner function retains access to the outer function’s variables. This concept is known as a closure.
Closures allow us to maintain state across function calls without using global variables.
Calling a function like setupCounter() multiple times gives separate counter instances—each with its own independent variable, unaffected by others.

part D:

Key Points:

If a function is invoked with fewer parameters, the missing ones are set to undefined.

If called with extra arguments, they are typically ignored unless handled explicitly.

Using Rest Parameters: You can use the ...rest syntax to collect extra arguments into an array. This is helpful when you don’t know how many values will be passed.
