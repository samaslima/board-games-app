import './App.css'
import { Flex, IconButton, Input, Heading, Highlight, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function App() {

  return (
    <>
      <div className='home'>
        <Heading lineHeight='tall'>
          <Highlight
            query='board games matches'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            Register your board games matches.
          </Highlight>
        </Heading>
        <br />
        <Flex alignItems='center' justifyContent='center'>
          <Stack spacing={1} direction='row'>
            <Input variant='outline' placeholder='Serach' w='250px' h='40px' />
            <Link to='/games-matches'>
              <IconButton
                w='40px' 
                h='40px'
                colorScheme='blue'
                aria-label='Search board game match'
                icon={<SearchIcon />}
              />
            </Link>
          </Stack>
        </Flex>
      </div>
    </>
  )
}