// import ArrayStack from "./arrayStack";

// function isBalanced(givenText: string): boolean {
//     let stack = new ArrayStack<string>();
//     const pairObj = { '}':'{' , ']':'[', ')':'(' };

//     for (let char of givenText) {
//         if (char in pairObj) {
//             if (stack.is_empty()) {
//                 return false; // Unmatched closing bracket
//             }

//             let top = stack.pop() || '#';
//             if (top !== pairObj[char]) {
//                 return false; // Mismatched brackets
//             }
//         } else {
//             stack.push(char); // Push opening brackets to stack
//         }
//     }

//     return stack.is(); // Check if the stack is empty at the end
// }

// const givenText = "{{}}";
// console.log(`IS "${givenText}" balanced ? "${isBalanced(givenText)}"`);
