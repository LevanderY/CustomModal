import React from "react";
import "./Modal.scss";

import cx from "classnames";

export interface IModalProps {
	className?: string;
	scroll?: boolean;
	center?: boolean;
	backdrop?: boolean;

	isOpen: boolean;
	handleClose: Function;
	handleOpen: Function;
}

const Modal: React.FC<IModalProps> = (props) => {
	const { isOpen, children, handleClose, className, scroll, center, backdrop } = props;

	const checkScroll = (scroll: boolean = false) => (!scroll ? "" : "scroll");
	const checkModalPos = (center: boolean = false) => (!center ? "baseline" : "center");
	const checkBackdrop = (close: boolean = false) => (!close ? () => handleClose() : (e: any) => e.stopPropagation());

	return (
		<div
			className={cx("my-custom-modal", { "show-modal": isOpen })}
			style={{ alignItems: checkModalPos(center) }}
			onClick={checkBackdrop(backdrop)}
		>
			<div
				className={cx("modal-content", className, checkScroll(scroll))}
				onClick={(e: any) => e.stopPropagation()}
			>
				<button className='close-btn' onClick={() => handleClose(false)}>
					<div className='outer'>
						<div className='inner'>
							<label className='text-dark'>close</label>
						</div>
					</div>
				</button>
				{children}
			</div>
		</div>
	);
};

export { Modal };
