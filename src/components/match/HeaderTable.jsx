import { 
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
    useDisclosure
} from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import ModalMatch from '../ModalMatch'

export default function HeaderTable() {

    const { isOpen, onOpen, onClose } = useDisclosure()

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

            <ModalMatch 
                openModal={isOpen} 
                closeModal={onClose} 
                modalHeader={`Register new match`}
                nameButton={`Save`} 
            />
        </>
    )
}