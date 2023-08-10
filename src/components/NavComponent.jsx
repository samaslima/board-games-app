import {
    AbsoluteCenter,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'

export default function NavComponent() {
    
    return (
        <>
            <Box position='relative' h='100px'>
                <AbsoluteCenter p='4' axis='both'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>HOME</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/games-matches'>MATCHES</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </AbsoluteCenter>
            </Box>
        </>
    )
}