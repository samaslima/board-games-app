import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react'

export default function GameMatch() {

    return (
        <>
            <Stack spacing={3} direction='row'>
                <Box>
                    <Text mb='8px' as='b' textAlign='left'>GAME</Text>
                    <Input variant='outline' w='250px' />
                </Box>
                <Box>
                    <Text mb='8px' as='b' textAlign='left'>WINNER</Text>
                    <Input variant='outline' w='250px' />
                </Box>
                <Box>
                    <Text mb='8px' as='b' textAlign='left'>DATE</Text>
                    <Input variant='outline' type="date" w='210px' />
                </Box>
                <Box>
                    <Text mb='8px' as='b'>PLAYERS</Text>
                    <Input variant='outline' w='500px' />
                </Box>
            </Stack>
        </>
    )
}