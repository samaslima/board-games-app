import { 
    Button, 
    FormControl,
    FormLabel,     
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'

import Dialog from './Dialog'

export default function ModalMatch(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal
                isOpen={props.openModal}
                onClose={props.closeModal}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={1}>
                            <FormLabel>Game</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Players</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel mt={4}>Winner</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date</FormLabel>
                            <Input type='date' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={props.closeModal} mr={3}>Cancel</Button>
                        <Button 
                            colorScheme='blue' 
                            onClick={onOpen}>
                                {props.nameButton}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Dialog 
                openModal={isOpen}
                closeModal={onClose}
            />
        </>
    )
}