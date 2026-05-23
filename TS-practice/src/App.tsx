import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// 1) задайте правильні ts типи для класичних js;
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };



	// 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any = -20;
anything = 'Text';
anything = {};

	// 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

let some:unknown;
some = 'Text';

let str: string;
if (typeof(some) === 'string') {
str = some;
}

// 	5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
// let person = ['Max', 21];

let person = ['Max', 21] as const;
let person2: readonly [string, number] = ['Max', 21];

// 7) Зробіть змінну, яка може приймати або рядок, або число.
let id: string | number;
id = '123';
id = 123;

// 8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let mode: 'enable' | 'disable';
mode = 'enable';
mode = 'disable';

// 9) Вкажіть типи для наступних функцій
// function showMessage(message) {
//  console.log(message);
// }

// function calc(num1, num2) {
//  return num1 + num2;
// }

// function customError() {
//  throw new Error('Error');
// }

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


// 10) Створіть свій тип даних на основі наявних даних.



// const page1 = {
//  title: 'The awesome page',
//  likes: 100,
//  accounts: ['Max', 'Anton', 'Nikita'],
//  status: 'open',
//  details: {
//    createAt: new Date('2021-01-01'),
//    updateAt: new Date('2021-05-01'),
//  }
// }

// const page2 = {
//  title: 'Python or Js',
//  likes: 5,
//  accounts: ['Alex'],
//  status: 'close',
// }

type PageStatus = 'open' | 'close';

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: PageStatus;
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
