const questions = [
  {
    question: "What is the correct HTML tag for creating a paragraph?",
    answerArray: ["<p>", "<div>", "<span>", "<br>"],
    answer: "<p>",
  },
  {
    question:
      "What is the correct CSS selector for targeting all elements with the class of 'heading'?",
    answerArray: [".heading", "heading", "#heading", "[heading]"],
    answer: ".heading",
  },
  {
    question: "What is the correct JavaScript variable naming convention?",
    answerArray: ["camelCase", "PascalCase", "snake_case", "ALL_CAPS"],
    answer: "camelCase",
  },
  {
    question: "How do you create a new array in JavaScript?",
    answerArray: ["[]", "{}", "()", "''"],
    answer: "[]",
  },
  {
    question:
      "What is the correct way to print a message to the console in JavaScript?",
    answerArray: ["console.log()", "print()", "alert()", "document.write()"],
    answer: "console.log()",
  },
  {
    question:
      "What is the correct way to add an event listener to an element in JavaScript?",
    answerArray: [
      "element.addEventListener()",
      "element.attachEvent()",
      "element.onclick()",
      "element.onmouseover()",
    ],
    answer: "element.addEventListener()",
  },
  {
    question:
      "What is the correct way to remove an event listener from an element in JavaScript?",
    answerArray: [
      "element.removeEventListener()",
      "element.detachEvent()",
      "element.onclick()",
      "element.onmouseout()",
    ],
    answer: "element.removeEventListener()",
  },
  {
    question: "What is the correct way to create a function in JavaScript?",
    answerArray: ["function myFunction() {}", "{}", "[]", "()"],
    answer: "function myFunction() {}",
  },
  {
    question:
      "What is the correct way to return a value from a function in JavaScript?",
    answerArray: ["return value", "console.log(value)", "value", "[]"],
    answer: "return value",
  },
  {
    question: "What is the correct way to call a function in JavaScript?",
    answerArray: [
      "functionName()",
      "{functionName()}",
      "[functionName()]",
      "functionName",
    ],
    answer: "functionName()",
  },
  {
    question: "What does HTML stand for?",
    answerArray: [
      "Hyper Text Markup Language",
      "High-level Text Management Language",
      "Hyperlink and Text Markup Language",
      "Hyper Transfer Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used for creating an unordered list?",
    answerArray: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: "<ul>",
  },
  {
    question: "What is the purpose of the HTML <meta> tag?",
    answerArray: [
      "Define metadata about the document",
      "Create a hyperlink",
      "Insert an image",
      "Define a paragraph",
    ],
    answer: "Define metadata about the document",
  },
  {
    question: "What is the correct way to comment out multiple lines in HTML?",
    answerArray: [
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "// This is a comment",
      "# This is a comment",
    ],
    answer: "<!-- This is a comment -->",
  },
  {
    question:
      "Which HTML element is used to define the structure of an HTML document?",
    answerArray: ["<body>", "<structure>", "<head>", "<html>"],
    answer: "<html>",
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answerArray: ["<link>", "<href>", "<a>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    answerArray: ["<br>", "<lb>", "<break>", "<newline>"],
    answer: "<br>",
  },
  {
    question:
      "Which attribute is used to provide additional information about an element?",
    answerArray: ["id", "class", "src", "alt"],
    answer: "class",
  },
  {
    question: "What is the purpose of the HTML <head> element?",
    answerArray: [
      "Define the main content of the document",
      "Define a header for a document",
      "Define metadata about the document",
      "Define the footer of the document",
    ],
    answer: "Define metadata about the document",
  },
  {
    question: "In HTML, what does the acronym DOCTYPE stand for?",
    answerArray: [
      "Document Type Declaration",
      "Document Template Definition",
      "Document Transition Element",
      "Document Tag Element",
    ],
    answer: "Document Type Declaration",
  },
  {
    question: "What does CSS stand for?",
    answerArray: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "How do you select an element with the id 'myElement' in CSS?",
    answerArray: [
      "#myElement",
      ".myElement",
      "element.myElement",
      "*#myElement",
    ],
    answer: "#myElement",
  },
  {
    question:
      "What is the default display property for a <div> element in CSS?",
    answerArray: ["block", "inline", "flex", "grid"],
    answer: "block",
  },
  {
    question:
      "What CSS property is used to set the background color of an element?",
    answerArray: ["background-color", "color", "bgcolor", "bg-color"],
    answer: "background-color",
  },
  {
    question: "In CSS, what does the 'margin: 0 auto;' property do?",
    answerArray: [
      "Center an element horizontally",
      "Set margin to 0 and auto",
      "Remove margin",
      "Set margin to 0",
    ],
    answer: "Center an element horizontally",
  },
  {
    question:
      "How do you apply the same style to multiple HTML elements with a class name 'myClass' in CSS?",
    answerArray: [".myClass", "#myClass", "element.myClass", "*myClass"],
    answer: ".myClass",
  },
  {
    question: "What is the purpose of the CSS z-index property?",
    answerArray: [
      "Controls the stacking order of elements",
      "Sets the font size of text",
      "Defines the width of an element",
      "Specifies the transparency of an element",
    ],
    answer: "Controls the stacking order of elements",
  },
  {
    question: "How do you comment in CSS?",
    answerArray: [
      "/* This is a comment */",
      "// This is a comment",
      "# This is a comment",
      "-- This is a comment",
    ],
    answer: "/* This is a comment */",
  },
  {
    question:
      "Which CSS property is used for controlling the text alignment of an element?",
    answerArray: ["text-align", "text-style", "font-align", "align-text"],
    answer: "text-align",
  },
  {
    question: "What does the CSS property 'float' do?",
    answerArray: [
      "Allows an element to be positioned to the left or right",
      "Changes the font style",
      "Controls the element's transparency",
      "Adjusts the element's height",
    ],
    answer: "Allows an element to be positioned to the left or right",
  },
  {
    question: "What does JS stand for?",
    answerArray: ["Java Style", "JavaScript", "Just Script", "Joint Syntax"],
    answer: "JavaScript",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answerArray: ["var x;", "let x;", "const x;", "x = 5;"],
    answer: "var x;",
  },
  {
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    answerArray: [
      "Checks the type of a variable or expression",
      "Defines a new variable",
      "Performs a mathematical operation",
      "Concatenates strings",
    ],
    answer: "Checks the type of a variable or expression",
  },
  {
    question: "What is the correct way to write an if statement in JavaScript?",
    answerArray: [
      "if (x == 5) { /* code */ }",
      "if x = 5 then /* code */",
      "if x == 5 then { /* code */ }",
      "if x = 5 { /* code */ }",
    ],
    answer: "if (x == 5) { /* code */ }",
  },
  {
    question: "How do you write a comment in JavaScript?",
    answerArray: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "comment: This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "What is the purpose of the 'console.log()' function in JavaScript?",
    answerArray: [
      "Outputs messages to the console for debugging",
      "Adds a log entry to a server",
      "Defines a new variable",
      "Displays a message on the webpage",
    ],
    answer: "Outputs messages to the console for debugging",
  },
  {
    question: "How do you create an array in JavaScript?",
    answerArray: [
      "var myArray = [];",
      "array myArray = [];",
      "set myArray = [];",
      "new Array(myArray);",
    ],
    answer: "var myArray = [];",
  },
  {
    question:
      "What is the purpose of the 'else' statement in an if-else statement?",
    answerArray: [
      "Specifies the code to be executed if the condition is false",
      "Defines an alternative condition",
      "Adds an additional condition",
      "Ends the if statement",
    ],
    answer: "Specifies the code to be executed if the condition is false",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    answerArray: ["==", "===", "=", "!="],
    answer: "===",
  },
  {
    question: "What is the result of the expression '3 + '3' in JavaScript?",
    answerArray: ["33", "6", "TypeError", "9"],
    answer: "33",
  },
];

module.exports = questions;
