import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function TableComponent() {

    return (
        <>
            <TableContainer>
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
                        <Tr>
                            <Td>Fungi</Td>
                            <Td>João, Maria</Td>
                            <Td>Maria</Td>
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
                        <Tr>
                            <Td>War</Td>
                            <Td>Maria, Clara, Lucas, Miguel</Td>
                            <Td>Lucas</Td>
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
                        <Tr>
                            <Td>Claim</Td>
                            <Td>Júlia, Amanda</Td>
                            <Td>Júlia</Td>
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
                    </Tbody>
                </Table>
            </TableContainer>
            <br />
            <Link 
                to='/game-match'>

                <IconButton
                    aria-label='Add'
                    icon={<AddIcon />}
                />
            </Link>
            
        </>
    )
}