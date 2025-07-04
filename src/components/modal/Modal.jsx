import "./Modal.css";

const Modal = ({isOpen, onClose, children}) => {

    if (!isOpen) return null;


    const handleOverLayClick = (e) => {
        if (e.target === e.currentTarget){
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverLayClick}>
            <div className="modal-content">
                <button onClick={onClose} className="close-button">x</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;