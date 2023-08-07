import { 
    Button, 
    FormControl,
    FormLabel, 
    IconButton,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    TableContainer,
    useDisclosure 
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons'

export default function TableComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const matches = [
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda' }
    ]

    return (
        <>
            <TableContainer paddingTop='20%'>
                <Table variant='striped' colorScheme='teal' size='lg'>
                    <Thead>
                        <Tr>
                        <Th>Game</Th>
                        <Th>Players</Th>
                        <Th>Winner</Th>
                        <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            matches.map(
                                match =>
                                <Tr key= { match.id }>
                                    <Td>{ match.game }</Td>
                                    <Td>{ match.players }</Td>
                                    <Td>{ match.winner }</Td>
                                    <Td>
                                        <IconButton
                                        aria-label='Edit'
                                        icon={<EditIcon />}
                                        />
                                        {'  '}
                                        <IconButton
                                        aria-label='Delete'
                                        icon={<DeleteIcon />}
                                        />
                                    </Td>
                                </Tr>
                                )
                        }
                        
                    </Tbody>
                </Table>
            </TableContainer>
            <br />

            <IconButton 
                aria-label='Add' 
                icon={<AddIcon />} 
                colorScheme='blue'
                onClick={onOpen} 
            />

            <Modal
                isOpen={isOpen}
                onClose={onClose}
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
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}