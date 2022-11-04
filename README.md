# paragon.js

See [paragonjs.com](https://paragonjs.com) for more details.

Paragon is a React-based component library for front-end development. Paragon's goal is to create a
basic toolkit which can help both experienced and new developers to quickly bootstrap applications,
build production web-applications, and more.

Paragon is currently under development but is ready to use! At the time of writing, there is a small
handful of components available to use.

## Installation

To install Paragon, please use the following command in the root directory of any React application.

```
yarn add @paragonjs/components
```

or

```
npm install @paragonjs/core
```

## Usage

Paragon is simple to use; just important a component and render it.

Paragon's components come preloaded with many props which increase their usability and utility,

also helping you style your application quickly.

#### Javascript

```js
import { Card, AsyncButton } from "@paragonjs/core";

export default function Example() {
    return (
        <Card>
            <AsyncButton color="lavander">Click me!</AsyncButton>
        </Card>
    );
}
```

#### Typescript

```ts
import { Card, AsyncButton } from "@paragonjs/core";

const TypescriptExample: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
    props: AsyncButtonProps
): JSX.Element => {
    return (
        <Card>
            <AsyncButton color="berry">Click me</AsyncButton>
        </Card>
    );
};

export default TypescriptExample;
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
