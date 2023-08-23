import { 
    Box,
    IconButton,
    Tooltip,
    Table, 
    Thead, 
    Tbody,
    Tr, 
    Th, 
    Td, 
    TableContainer,
    useDisclosure
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import Pagination from '../Pagination'
import HeaderTable from './HeaderTable'
import Dialog from '../Dialog'
import ModalMatch from '../ModalMatch'

export default function TableComponent() {

    const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const itemsPerPage = 6

    const gameMatches = [
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '11/02/2023' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '10/05/2023' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '20/06/2023' },
        { id: 4, game: 'Honeydukes', players: 'João, Maria, Pedro', winner: 'Pedro', date: '01/06/2023' },
        { id: 5, game: 'Dixit', players: 'Maria, Clara, Lucas, Miguel', winner: 'Clara', date: '24/06/2023' },
        { id: 6, game: '7 Wonders', players: 'Luiza, Tereza', winner: 'Luiza', date: '21/02/2023' },
        { id: 7, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '11/02/2023' },
        { id: 8, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '10/05/2023' },
        { id: 9, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '20/06/2023' },
        { id: 10, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '01/01/2023' },
        { id: 11, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '24/02/2023' },
        { id: 12, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '19/02/2023' }
    ]

    var matches = []

    let i = 0

    for (let match of gameMatches) {
        if (i < itemsPerPage) {
            matches.push(match)
        }

        i++
    }

    return (
        <>
            <HeaderTable />
            <Box padding='2em' borderRadius='lg' borderWidth='1px'>
                <TableContainer paddingTop='1em'>
                    <Table variant='simple' size='lg'>
                        <Thead>
                            <Tr>
                                <Th>Game</Th>
                                <Th>Players</Th>
                                <Th>Winner</Th>
                                <Th>Date</Th>
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
                                        <Td>{ match.date }</Td>
                                        <Td>
                                            <Tooltip label='Update'>
                                                <IconButton
                                                    aria-label='Edit'
                                                    mr={6}
                                                    icon={<EditIcon />}
                                                    onClick={onOpenUpdate}
                                                />
                                            </Tooltip>
                                            <Tooltip label='Delete'>
                                                <IconButton
                                                    aria-label='Delete'
                                                    icon={<DeleteIcon />}
                                                    colorScheme='red'
                                                    onClick={onOpenDelete}
                                                />
                                            </Tooltip>
                                        </Td>
                                    </Tr>
                                    )
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

                <Pagination items={gameMatches.length} itemsPerPage={itemsPerPage} />
            </Box>

            <ModalMatch 
                openModal={isOpenUpdate} 
                closeModal={onCloseUpdate} 
                modalHeader={`Update match`}
                nameButton={`Update`} 
            />
            <Dialog 
                openModal={isOpenDelete}
                closeModal={onCloseDelete}
                dialogBody={`delete`}
            />
        </>
    )
}