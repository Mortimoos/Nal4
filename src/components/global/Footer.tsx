import { config } from "../../configuration/config.ts";
import { Container, Row, Col } from "react-bootstrap";

// Footer component: Component to display footer information
const Noga: React.FC = () => {
    return (
        <footer className="footer bg-dark text-white py-4 mt-auto border-top"> {/* Footer styling */}
            <Container> {/* Container for footer content */}
                <Row>
                    <Col>
                        <p className="mb-0">Kontaktne informacije:</p>
                        <p className="mb-0">{config.app.email}</p>
                    </Col>
                    <Col>
                        <p className="mb-0">Follow Me:</p>
                        <p className="mb-0">{config.app.website}</p>
                    </Col>
                    <Col>
                        <p className="mb-0">© {config.app.leto} {config.app.ime}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Noga; // Export Footer component
