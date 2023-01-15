import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import './ModalDialog.css'
import Form from "./Form";
import { DialogContent } from "@material-ui/core";

export default function ModalDialog() {
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};

return (
	<div stlye={{}}>
	<Button id='button' variant="outlined" color="primary"
			onClick={handleClickToOpen}>
		Join Our Waitlist
	</Button>
	<Dialog open={open} >
    <DialogActions>
		<Button onClick={handleToClose}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
        <DialogContent>
        <Form />
        </DialogContent>
	</Dialog>
	</div>
);
}
