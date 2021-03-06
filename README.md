# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Demo AnimeJS NextJS</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup AnimeJS for Nextjs with Tailwind CSS</h3>
  
<p align="center">
  <a href="https://github.com/nguyentrisinh/demo-nextjs-animejs"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/nguyentrisinh/demo-nextjs-animejs/build"></a>
  <a href="#last-commit"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/nguyentrisinh/demo-nextjs-animejs"></a>
  <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
  <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/nguyentrisinh/demo-nextjs-animejs"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

1. You want integrated animation to your `NextJS project` and you choose `AnimeJS`.
2. This project will help you understand and can add a `Animation` for `Image`/`Text`/v.v
  
**Demo AnimeJS NextJS** is a small project for basic setup AnimeJS for NextJS. And it will use UI farmwork [Tailwind CSS](https://tailwindcss.com/)

<br/>
  
## Key Features

- **[Next JS](https://nextjs.org/docs/getting-started)**
- **[Anime JS](https://animejs.com/documentation)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[AnimeJs examples](https://freefrontend.com/anime-js-examples/)**

<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# generate
yarn export
```

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📝 _app.jsx
│   ├── 📝 _document.jsx
│   ├── 📝 index.jsx
│   ├── 📝 demo.jsx
│   └── 📝 user.jsx
├── 📁 public
├── 📝 .env
├── 📝 .env.development
├── 📝 .env.production
├── 📝 jsconfig.js
├── 📝 next.config.js
├── 📝 postcss.config.js
├── 📝 tailwind.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/getting-started/install)
  
## Documentation

### **Configuration**

- Install lib

```bash
yarn add animejs
```

### **Example using `animejs` in component `Logo`**

- Add element `image` with a `id`

```html
<img id="logo" src="/logo.png" alt="logo" className="w-24 mr-2" />
```

- Add scripts animation for this image

```jsx
useEffect(() => {
  const logoAnimation = anime.timeline({
    autoplay: true,
    delay: 200
  });
  logoAnimation
    .add({
      targets: '#logo',
      translateY: [-100, 0],
      opacity: [0, 1],
      elasticity: 600,
      duration: 1600
    })
    .add({
      targets: '#logo',
      rotate: [-360, 0],
      duration: 3000,
      elasticity: 600,
      offset: 100
    });
}, []);
```

> Remember, you need cover codes in:

```jsx
// code to run on component mount (componentDidMount)
useEffect(() => {
  // scripts animation
}, []);
```

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: nguyentrisinh0810@gmail.com
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[sinhnt.com]:https://sinhnt.com
[react-bootstrap]:https://react-bootstrap.github.io/

<!-- in-line references to github -->

[git-profile]:https://github.com/nguyentrisinh
[git-readme]:README.md
[git-license]:LICENSE.md