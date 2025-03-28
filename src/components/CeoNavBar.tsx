import { Nav } from 'react-bootstrap';

function CeoNavBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/sales">Sales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/accept">Accept</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/employee" >Employee</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/quit" >Quit</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}

export default CeoNavBar;