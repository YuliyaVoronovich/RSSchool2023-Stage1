# My TypeScript Journey: Earned Badges 🏆

## Badges Overview

Here is a collection of badges I earned from completing Microsoft Learn's TypeScript modules:
- **Get started with TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/qdru2tme)
- **Declare Variable Types in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/blvf9bwd)
- **Implement Interfaces in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/n7cu5p6f)
- **Develop Typed Functions in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/8r6y79xw)
- **Declare and Instantiate Classes in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/uf5npba3)
- **Generics in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/8r6ysjew)
- **Work with External Libraries in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/fzuzrmvx)
- **Organize Code with Namespaces in TypeScript**: [Badge](https://learn.microsoft.com/en-us/users/yuliyavoronovich/achievements/wacayv6n)

## Reflections
1. Module 1 introduced me to the TS language, showed how it differs from JS. The main difference is its static typing, which is checked at the compilation stage and allows you to catch errors earlier than in JS (where errors occur in runtime)
I also learned about installing the TS compiler and the actual process of compiling .ts files

2. In Module 2, I learned the difference between TS types and JS types, namely the addition of new types any, enum, void, unknown, never, intersection type and union, literal types. as well as Tuples.
All this helps to correctly and structuredly organize the behavior of functions, class methods, etc., and to avoid errors in passing the wrong type of parameter or return value of a function. And also serves as a kind of application documentation.

3. Module 3 introduced the concept of Interface, which is missing in JS. In TypeScript, interfaces can be used in the same way as in traditional object-oriented programming. You can also use interfaces to define types of objects.
The interface can be used for the following purposes:
Create shorthand names for commonly used types.
Disk consistency across a set of objects because each object that implements an interface operates under the same type definitions.
Describe existing JavaScript APIs and clarify function parameters and return types. An interface can give a clear picture of what a function expects and what it will return, without constantly having to refer to the documentation.
Type aliases can act as interfaces. However, there are minor differences. The key difference is that a type alias cannot be reopened to add new properties, whereas an interface can be easily extended. Additionally, a type alias can only describe a union or a tuple.

4. In module 4 I expanded my knowledge about functions. I learned how to write the type of parameters for a function, about optional parameters indicated by the ? sign, about indicating the type of the output result of a function, which helps in documenting and reading the function. Also, parameters to a function can be passed as rest and as an Interface definition, for example, or type aliases.

5. In module 5, I expanded my knowledge of classes based on classic OOP, which is not fully used in JS. Creating a class and its instance. Access modifiers. Inheritance. Defining an Interface for an object structure. Cases and possibilities of using Static properties and methods of a Class and many other TS features.

6. In module 6, I learned about the TS structure and the generic template (Generics).
generic functions are used if the code is a function or class that:
  - Works with various types of data.
  - Uses this data type in several places.

    Universal templates can:
    - Provide more flexibility when working with types.
    - Support code reuse.
    - Reduce the need to use the any type.

    Universal templates can be used in:
    - Definition of a universal function.
    - Declaration of a universal interface.
    - Declaration of a universal class.

7. In module 7, I reinforced the knowledge about the modules that were discussed in the study of JS, but using the TS language. I studied the compilation of modules, as well as the installation and import of external libraries for my application. In practice, I examined the import and export of various components from modules.

8. In Module 8, I learned about different namespaces to keep application code out of global scope. Using namespaces, you can also avoid repeated naming errors and organize your code. I looked at the difference between using namespaces and modules, which in turn provide more capabilities and have some advantages.