import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/icon/logo.png";
import Button from "react-bootstrap/Button";
function NavigationBar() {
	return (
		<div>
			<Navbar expand="lg d-flex">
				<Navbar.Brand href="#home" className="mt-1 ms-5">
					<img alt="Mandragid" src={Logo} width="auto" height="auto" className="d-inline-block align-top" />{" "}
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<Button variant="danger" className="float-end">
						Sign In
					</Button>{" "}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
