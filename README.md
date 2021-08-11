# Getting Started with React Ts Custom Modal!

## How to use?

First u should to import Modal and useModal hook from component:

```ts
import { Modal, useModal } from "./components/Modal";
```

Then call hook in component itself with the following parameters:

```ts
const [isOpen, handleOpen, handleClose, toggle] = useModal();
```

Event handler for btn:
```ts
<button onClick={() => toggle()}>Open Modal</button>
```

And the modal herself:
```ts
<Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}>
  <h1>Hello, i'm default modal</h1>
</Modal>
```

## Also modal have different types.
Centered:
Vertically center the modal.
```ts
<Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} center>
  <h1>Hello, i'm centered modal</h1>
</Modal
```

Static:
When backdrop is set to static, the modal will not close when clicking outside it.
```ts
<Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} backdrop>
  <h1>Hello, i'm static modal</h1>
</Modal
```

Scrolled:
When modals become too long for the user’s viewport or device, they scroll independent of the page itself.
```ts
<Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose} scroll>
  <h1>Hello, from scroll modal</h1>
</Modal
```

## We can call many modals in the same component:
```ts
import React from "react";

import { Modal, useModal } from "./components/Modal";

const ModalsBoxDemo: React.FC = () => {
	const [isOpen, handleOpen, handleClose, toggle] = useModal();
	const [isStaticOpen, handleStaticOpen, handleStaticClose, isStaticToggle] = useModal();

	return (
		<div>
		 <button onClick={() => toggle()}>Open default Modal</button>
			
		 <button onClick={() => isStaticToggle()}>Open static Modal</button>
			
			
		 <Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}>
			<h1>Hello, i'm default modal</h1>
		 </Modal>

		 <Modal isOpen={isStaticOpen} handleOpen={handleStaticOpen} handleClose={handleStaticClose} backdrop>
			<h1>Hello, i'm static modal</h1>
		 </Modal>

	);
};
```

