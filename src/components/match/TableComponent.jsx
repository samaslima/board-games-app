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
    Tfoot,
    Tr, 
    Th, 
    Td, 
    Heading,
    TableContainer,
    useDisclosure
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon, SearchIcon, AddIcon } from '@chakra-ui/icons'
import UpdateMatch from './UpdateMatch'
import { Link } from 'react-router-dom'

export default function TableComponent() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const matches = [
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda' },
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda' }
    ]

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
            </Box>

            <UpdateMatch openModal={isOpen} closeModal={onClose} />
        </>
    )
}