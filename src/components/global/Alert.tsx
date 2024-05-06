import React, { useEffect } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

// Enum for different types of messages
enum MessageType {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    INFO = "info",
}

// Props for Message component
interface MessageProps {
    message?: string; // Optional message to display
    type?: MessageType; // Type of message (default: INFO)
}

// Alert component: Component to display messages
const Alert: React.FC<MessageProps> = ({ message, type = MessageType.INFO }) => {
    const [show, setShow] = React.useState(true); // State to manage visibility of alert

    // CSS style for error messages
    const styles = `
        .error {
            background-color: #dc3545; /* Red color */
            color: white; /* White text */
            position: fixed;
            bottom: 0;
            left: 0;
            width: 300px !important;
        }
    `;

    // Apply styles when component mounts
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(styles));
        document.head.appendChild(styleElement);

        // Cleanup function to remove the style element when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    // If there is no message or alert is hidden, return null
    if (!message || !show) {
        return null;
    }

    // Render alert with provided message and type
    return (
        <BootstrapAlert
            variant={type}
            onClose={() => setShow(false)} // Function to hide alert when close button is clicked
            dismissible // Make alert dismissible
            style={{ position: 'fixed', bottom: 0, right: 0, width: 'auto', zIndex: 9999 }} // Style for positioning alert
            className={`rounded-0 ${type === MessageType.ERROR ? 'error' : ''}`}> {/* Additional class for styling */}
            {message} {/* Display message */}
        </BootstrapAlert>
    );
};

// Export Alert component and MessageType enum
export { Alert, MessageType };
