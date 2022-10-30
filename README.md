
# AsyncButton

  

Async button is a small react-based package which exposes a simplistic yet useful button made to

handle asynchronous  actions.

  

Async Button automatically shows a loading indicator while actions are being performed.

  

## Usage

  

```js
import { AsyncButton } from "@kaymo/async-button";

export default function Example() {
	async function handleClick() {
		... your asyncronous call here
	}
	
	return <AsyncButton onClick={handleClick}>Test!</AsyncButton>
}

```

## Props

  

**onClick**: () => Promise<*void*>; 
Default: undefined.

**color**: "red" | "blue" | "purple" | "yellow" | "pink" | "green";
Default: undefined.

**children**: React.ReactNode 
Default: <span></span>