# Getting Started with React Ts Custom Modal

## How to use?

First u shoul to import Modal and useModal hook from component:

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


