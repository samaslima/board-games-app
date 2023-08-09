import { 
    IconButton,
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
import MatchModalComponent from './MatchModalComponent'

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
                <Table variant='striped' colorScheme='cyan' size='lg'>
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
                                        onClick={onOpen}
                                        />
                                        {'  '}
                                        <IconButton
                                        aria-label='Delete'
                                        icon={<DeleteIcon />}
                                        colorScheme='red'
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
                isRound={true}
                aria-label='Add' 
                icon={<AddIcon />} 
                colorScheme='blue'
                onClick={onOpen} 
            />

            <MatchModalComponent openModal={isOpen} closeModal={onClose} />
        </>
    )
}