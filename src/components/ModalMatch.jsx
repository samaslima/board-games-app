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
    ModalCloseButton
} from '@chakra-ui/react'

export default function ModalMatch(props) {

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
                        <Button colorScheme='blue'>
                            {props.nameButton}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}