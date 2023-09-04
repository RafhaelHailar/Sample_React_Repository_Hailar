import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
/* import Nav from "react-bootstrap/Nav"; */

const NavigationBar = () => {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>    
                    <Navbar.Brand className="text-white">Washinga Machina</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;