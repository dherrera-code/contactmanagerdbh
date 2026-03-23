import { Modal, ModalHeader, ModalBody, Button } from 'flowbite-react'
import { Dispatch, SetStateAction } from 'react'

interface ErrorModalProps {
    message : string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ErrorMessageModel = ({message , isOpen, setIsOpen}:ErrorModalProps ) => {
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
  return (
     <>

      <Modal show={isOpen} size="md" onClose={toggleModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
  
            <h3 className="mb-5 text-lg font-normal text-black">
                {message}
            </h3>
            <div className="flex justify-center">
              
              <Button color="alternative" onClick={toggleModal}>
                Close
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ErrorMessageModel