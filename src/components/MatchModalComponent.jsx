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

export default function MatchModalComponent(props) {

    return (
        <>
            <Modal
                isOpen={props.openModal}
                onClose={props.closeModal}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Register a new match</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={1}>
                            <FormLabel>Game</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl>
                            <FormLabel mt={4}>Winner</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Players</FormLabel>
                            <Input />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Date</FormLabel>
                            <Input type='date' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={props.closeModal}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}