
# paragon.js
  
Paragon is a React-based component library for front-end development. Paragon's goal is to create a
basic toolkit which can help both experienced and new developers to quickly bootstrap applications,
build production web-applications, and more.

Paragon is currently under development but is ready to alpha test! At the time of writing, there is
a small handful of components available to use. Please use at your own risk, while these components
should work, there could be limited functionality or bugs present.


### Documentation 
See [https://paragonjs.com](https://paragonjs.com) for documentation and other details.


### Version 0.0.30 is out now!

What's new in 0.0.30?

 1. Tabs component has been added! Tabs component is for building a tabbed interface. It's fairly straight forward and simplistic. 
 2. Select component has been added. Select is similar to HTML Select component, where you pass options and the user is able to select a menu item. However, ``Select`` is far more sophisticated than a standard HTML select component. 
 3. Documentation for these components will follow soon.
  

## Installation

  

To install Paragon, please use the following command in the root directory of any React application.

  

```

yarn add @paragonjs/core

```

  

or

  

```

npm install @paragonjs/core

```

  
  

## Usage

  
### Important
**In the entry point of your project (index.js, index.ts) import styling:**

```

import "@paragonjs/core/dist/src/main.css";

```

  

Paragon is simple to use; just important a component and render it. Paragon's components come preloaded with many props which increase their usability and utility also helping you style your application quickly.

  
## Javascript

  

```js

import { Card, AsyncButton } from  "@paragonjs/core";

  

export  default  function  Example() {

return  (

<Card>

<AsyncButton  color="lavander">Click me!</AsyncButton>

</Card>

);

}

```

  

## Typescript

  

```ts

import  { Card, AsyncButton }  from  "@paragonjs/core";

  

const  TypescriptExample: React.FC<React.HTMLAttributes<HTMLDivElement>> = (

props: AsyncButtonProps

): JSX.Element => {

return (

<Card>

<AsyncButton color="berry">Click me</AsyncButton>

</Card>

);

};

  

export  default TypescriptExample;

```

  

## Development

  

To help develop, clone this repository.

  

You can test local builds using NPM or Yarn link.

  

1. In Paragon repository: `yarn link`

  

2. In another React repository where you can render and test components:

  

```

yarn link "@paragonjs/core"

```

  

3. Begin importing components into the project, you can rebuild the Paragon repository using

  

`yarn build` in the Paragon repository; This will update all projects which are linked using npm

  

and yarn with the new build.