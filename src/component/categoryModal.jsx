import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryModal({ onClose }) {
  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryModal;
