import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

enum MessageType {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
}

interface MessageProps {
    message?: string;
    type?: MessageType;
}

const Alert: React.FC<MessageProps> = ({ message, type = MessageType.INFO }) => {
    const [show, setShow] = React.useState(true); // To handle visibility of the alert

    if (!message || !show) {
        return null;
    }

    return (
        <BootstrapAlert
            variant={type}
            onClose={() => setShow(false)}
            dismissible
            style={{ position: 'fixed', bottom: 0, right: 0, width: 'auto', zIndex: 9999 }}
            className='rounded-0'>
            {message}
        </BootstrapAlert>
    );
};

export { Alert, MessageType };
