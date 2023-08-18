import { 
    Box,
    Button,
    Flex,
    Input,
    IconButton,
    InputGroup,
    InputLeftElement,
    Tooltip,
    Table, 
    Thead, 
    Tbody,
    Tr, 
    Th, 
    Td, 
    Heading,
    TableContainer,
    useDisclosure
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, SearchIcon, AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import UpdateMatch from './UpdateMatch'
import Pagination from '../Pagination'

export default function TableComponent() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const itemsPerPage = 6

    const gameMatches = [
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '11/02/2023' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '10/05/2023' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '20/06/2023' },
        { id: 4, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '01/01/2023' },
        { id: 5, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '24/02/2023' },
        { id: 6, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '19/02/2023' },
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
            <Box w='full' px={5} py={8} shadow='md' mx='auto'>
                <Flex alignItems='center' justify='space-between'>
                    <Flex>
                        <Link to='/'>
                            <Heading as='h4' size='md'>
                                BOARD GAMES
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <SearchIcon color='gray.300' />
                            </InputLeftElement>
                            <Input variant='filled' placeholder='Search' w='350px' />
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <Button leftIcon={<AddIcon />} colorScheme='green' variant='solid' onClick={onOpen}>
                            ADD NEW MATCH
                        </Button>
                    </Flex>
                </Flex>
            </Box>
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
                                                    onClick={onOpen}
                                                />
                                            </Tooltip>
                                            <Tooltip label='Delete'>
                                                <IconButton
                                                    aria-label='Delete'
                                                    icon={<DeleteIcon />}
                                                    colorScheme='red'
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

            <UpdateMatch openModal={isOpen} closeModal={onClose} />
        </>
    )
}