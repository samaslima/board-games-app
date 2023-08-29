import { useRef } from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from '@chakra-ui/react'

export default function Dialog(props) {

    const cancelRef = useRef()

    return (
        <>
            <AlertDialog
                isOpen={props.openModal}
                leastDestructiveRef={cancelRef}
                onClose={props.closeModal}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Confirmation
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to this? 
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={props.closeModal}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={props.closeModal} ml={3}>
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}