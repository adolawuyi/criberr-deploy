import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import './ModalDialog.css'
import JoinForm from "./JoinForm";
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
	<div >
	<Button id='button' 
	variant="outlined" 
	color="primary"
			onClick={handleClickToOpen}>
		Join Waitlist
	</Button>
	<Dialog open={open} >
    <DialogActions>
		<Button onClick={handleToClose}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
        <DialogContent>
        <JoinForm />
        </DialogContent>
	</Dialog>
	</div>
);
}
