
# Paradigm.js

  

Paradigm is a React-based component library for front-end development. Paradigm's goal is to create

a basic toolkit which can help both experienced and new developers to quickly bootstrap

applications, build production web-applications, and more.

  

Paradigm is currently under development but ready to use! At the time of writing, there is a small

handful of components available to use.

  

## Installation

  

To install Paradigm, please use the following command in the root directory of any React

application.

  

```

yarn add @paradigmjs/components

```

  

or

  

```

npm install @paradigmjs/components

```

  

## Usage

  

Paradigm is simple to use; just important a component and render it.

  

Paradigm's components come preloaded with many props which increase their usability and utility,

also helping you style your application quickly.

  

```ts

import  { Card, AsyncButton }  from  "@paradigmjs/components";

  

export  default  function  Example()  {

return (

<Card>

<AsyncButton />

</Card>

);

}

```

  

## Development

  

To help develop, clone this repository.

  

You can test local builds using NPM or Yarn link.

  

1. In Paradigm repository: `yarn link`

  

2. In another React repository where you can render and test components:

   ```
   yarn link "@paradigmjs/components"
   ```

3. Begin importing components into the project, you can rebuild the Paradigm repository using

`yarn build` in the Paradigm repository; This will update all projects which are linked using npm

and yarn with the new build.