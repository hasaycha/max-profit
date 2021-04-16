[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#run-application">Run the Application</a></li>
      </ul>
    </li>
    <li><a href="#flow">Flow</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is apps for getting the best profit

### Built With

- [Node](https://nodejs.org/en/download/)
- [Typescript](https://www.npmjs.com/package/typescript)

<!-- GETTING STARTED -->

## Getting Started

- Install Node
- To check node is installed in command line
  ```bash
  node -v
  ```
- Install typescript in command line
  ```bash
  npm install -g typescript
  ```

### Run the Application

For the run the program, you can choose which procedure you want to:

1. Procedure 1
   - run via `npx` command
     ```bash
     npx ts-node max-profit.ts
     ```
2. Procedure 2

- run the typescript file with the following command. This will create a javascript file from typescript automatically with the same name.

```bash
tsc max-profit.ts
```

- Now run the javascript file, the greet.ts file will get executed:

```bash
node max-profit.js
```

3. Procedure 3
   - You can merge both the commands by using a pole | and && like below :
     - In Windows
       ```bash
       tsc max-profit.ts | node max-profit.js
       ```
     - In Linux or macOS
       ```bash
       tsc max-profit.ts && node max-profit.js
       ```
4. Procedure 4
   - Run via `ts-node`, you must install first
     ```bash
     npm install -g ts-node
     ```
   - To run:
     ```bash
     ts-node max-profit.ts
     ```

## Flow

1. main apps in `max-profit.ts` it will load file with name `data-history.txt` in same directory with `max-profit.ts`
2. after file loaded, then it will call the function with name `findTheBestProfit`, in this function it will call the function `getLowestAndHighestAndIndex` until the `index of highest value is more than index of lowest value`
3. the function `getLowestAndHighestAndIndex`, it's for getting the lowest and highest value with each index in file

## Contact

Hamdan Rijali Triyadi - hamdanrijali@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hamdan-rijali-202b5599
