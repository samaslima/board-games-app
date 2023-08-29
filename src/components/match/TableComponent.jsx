import { useState } from 'react'
import { Link } from 'react-router-dom'

import { 
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
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

import { 
    AddIcon, 
    EditIcon, 
    DeleteIcon, 
    SearchIcon 
} from '@chakra-ui/icons'

import Pagination from '../Pagination'
import Dialog from '../Dialog'
import ModalMatch from '../ModalMatch'

export default function TableComponent() {

    const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure()
    const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const [searchMatch, setSearchMatch] = useState('')
    const [filteredList, setFilteredList] = useState('')

    const itemsPerPage = 6

    const gameMatches = [
        { id: 1, game: 'Fungi', players: 'João, Maria', winner: 'Maria', date: '11/02/2023' },
        { id: 2, game: 'War', players: 'Maria, Clara, Lucas, Miguel', winner: 'Lucas', date: '10/05/2023' },
        { id: 3, game: 'Claim', players: 'Júlia, Amanda', winner: 'Amanda', date: '20/06/2023' },
        { id: 4, game: 'Honeydukes', players: 'João, Maria, Pedro', winner: 'Pedro', date: '01/06/2023' },
        { id: 5, game: 'Dixit', players: 'Maria, Clara, Lucas, Miguel', winner: 'Clara', date: '24/06/2023' },
        { id: 6, game: '7 Wonders', players: 'Luiza, Tereza', winner: 'Luiza', date: '21/02/2023' }
    ]

    const searchMatches = (value) => {
        setSearchMatch(value)

        if (searchMatch !== '') {
            const filterList = gameMatches.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchMatch.toLowerCase())
            })

            setFilteredList(filterList)
        } else {
            setFilteredList(gameMatches)
        }
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
                            <Input 
                                variant='filled' 
                                placeholder='Search' 
                                w='350px'
                                onChange={(e) => searchMatches(e.target.value)} 
                            />
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <Button 
                            leftIcon={<AddIcon />} 
                            colorScheme='green' 
                            variant='solid' 
                            onClick={onOpenAdd}>
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

                            {searchMatch.length > 1 ? (
                                filteredList.map((match) => {
                                    return (
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
                                })
                            ) : (
                                gameMatches.map((match) => {
                                    return (
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
                                })
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>

                <Pagination items={gameMatches.length} itemsPerPage={itemsPerPage} />
            </Box>

            <ModalMatch 
                openModal={isOpenAdd} 
                closeModal={onCloseAdd} 
                modalHeader={`Register new match`}
                nameButton={`Save`} 
            />

            <ModalMatch 
                openModal={isOpenUpdate} 
                closeModal={onCloseUpdate} 
                modalHeader={`Update match`}
                nameButton={`Update`} 
            />

            <Dialog 
                openModal={isOpenDelete}
                closeModal={onCloseDelete}
            />
        </>
    )
}