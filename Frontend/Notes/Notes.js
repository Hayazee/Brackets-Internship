// --------------- October 25 - 2022 Tuesday ---------------
// ⬇ next step
// ↳ about it
// ➥ points of it
// ⮚ terms of it

// ⥈ today class we learnt about how does a js code works ⥈
// so the structure behind it is :

// the code is passed through a programme called parser
//                          ⬇
// the code will be converted into a js object called as AST whom full form is Abstract syntax tree
//      ↳ it represents the source code written in a formal language
//                          ⬇
// it passes to a programme called callstack
//      ↳ it is a mechanism for interpreter which keeps the track of its place in a script that calls multiple functions
//    ➥ the interpreter adds it to the call stack and then starts carrying out the function
//    ➥ any functions that are called by that function are added to the call stack further up, and run where their calls are reached
//    ➥ when the current function is finished, the interpreter takes it off the call stack and resumes execution where it left off in the last code listing
//   ⮚ compiler translates the entire source code in a single run Or it translates the entire source code in JIT stands for Just In Time
//      ↳ translates into byte code that the machine understands and can execute
//   ⮚ interpreter translates the entire source code line by line
//      ↳ is used in contrast cause we don't have a compiler
//                          ⬇
// the variables and functions are stored in memory
//                          ⬇
// executable byte - code gets generated
//                          ⬇
// the code gets executed
