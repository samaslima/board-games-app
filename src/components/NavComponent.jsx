import {
    IconButton,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    chakra, 
    useColorModeValue, 
    Flex
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks';
import { AddIcon } from '@chakra-ui/icons'
import AddMatch from './AddMatch'

export default function NavComponent() {

    const bg = useColorModeValue('white', 'gray.800');
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <>
            <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
                <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
                    <Flex display="flex" alignItems="center">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>HOME</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <BreadcrumbLink href='/games-matches'>MATCHES</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Flex>
                    <Flex align="center" py={15}>
                        <IconButton 
                            aria-label='Add' 
                            icon={<AddIcon />} 
                            colorScheme='green'
                            onClick={onOpen} 
                        />
                    </Flex>
                </Flex>
            </chakra.header>

            <AddMatch openModal={isOpen} closeModal={onClose} />
        </>
    )
}