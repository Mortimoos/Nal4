// const version = process.env.VERSION || '1.0.0';
import { config } from "../../configuration/config.ts";
import { Container } from "react-bootstrap";

const Noga: React.FC = () => {
    return (
        <footer className="footer bg-dark text-white text-center py-3 mt-auto border-top">
            <Container>
                <p className="mb-0">{config.app.ime}</p>
                <p className="mb-0">{config.app.email}</p>
                <p className="mb-0">{config.app.leto}</p>
            </Container>
        </footer>
    );
};

export default Noga;