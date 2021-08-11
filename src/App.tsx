import React from "react";
import "./App.scss";

import { Modal, useModal } from "./components/Modal";

const App: React.FC = () => {
	const [isOpen, handleOpen, handleClose, toggle] = useModal();

	const [isStaticOpen, handleStaticOpen, handleStaticClose, isStaticToggle] = useModal();

	const [isCenterOpen, handleCenterOpen, handleCenterClose, isCenterToggle] = useModal();

	const [isScrollOpen, handleScrollOpen, handleScrollClose, isScrollToggle] = useModal();

	const foo = () => [...Array<number>(100).keys()].map((item) => <div>{item}</div>);

	return (
		<div>
			{/* A default modal */}
			<button onClick={() => toggle()}>Open default Modal</button>

			<Modal isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}>
				<h1>Hello, i'm default modal</h1>
			</Modal>

			{/* A static background modal */}
			<button onClick={() => isStaticToggle()}>Open static Modal</button>

			<Modal isOpen={isStaticOpen} handleOpen={handleStaticOpen} handleClose={handleStaticClose} backdrop>
				<h1>Hello, i'm static modal</h1>
			</Modal>

			{/* A centered modal */}
			<button onClick={() => isCenterToggle()}>Open centered Modal</button>

			<Modal isOpen={isCenterOpen} handleOpen={handleCenterOpen} handleClose={handleCenterClose} center>
				<h1>Hello, from centered modal</h1>
			</Modal>

			{/* A scrolled modal */}
			<button onClick={() => isScrollToggle()}>Open scrolled Modal</button>

			<Modal isOpen={isScrollOpen} handleOpen={handleScrollOpen} handleClose={handleScrollClose} scroll>
				<h1>Hello, from scroll modal</h1>
				{foo()}
			</Modal>
		</div>
	);
};

export default App;
