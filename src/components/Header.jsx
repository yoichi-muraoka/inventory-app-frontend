import{Navbar, Container} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1><Navbar.Brand href="/">備品管理システム</Navbar.Brand></h1>
      </Container>
    </Navbar>
  );
}