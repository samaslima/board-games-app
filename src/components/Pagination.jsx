import { ChevronLeftIcon, ArrowLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Tooltip } from '@chakra-ui/react'

export default function Pagination(props) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.items/props.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Flex m={4} justifyContent='center' gap='35px' alignItems='center'>
                <Flex>
                    <Tooltip label='First Page'>
                        <IconButton
                            bg='white'
                            icon={<ArrowLeftIcon h={3} w={3} />}
                            mr={4}
                        />
                    </Tooltip>
                    <Tooltip label='Previous Page'>
                        <IconButton
                            bg='white'
                            icon={<ChevronLeftIcon h={6} w={6} />}
                        />
                    </Tooltip>
                </Flex>

                {pageNumbers.map(page => 
                    <a 
                        key={page}
                        onClick={(e) => {
                            e.preventDefault()}}
                    >
                            {page}
                    </a>
                
                )}

                <Flex>
                    <Tooltip label='Next Page'>
                        <IconButton
                            bg='white'
                            icon={<ChevronRightIcon h={6} w={6} />}
                            mr={4}
                        />
                    </Tooltip>
                    <Tooltip label='Last Page'>
                        <IconButton
                            bg='white'
                            icon={<ArrowRightIcon h={3} w={3} />}
                        />
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    )
}