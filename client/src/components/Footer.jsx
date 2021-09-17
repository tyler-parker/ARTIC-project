import React from 'react'
import { 
    Box, 
    Stack, 
    HStack,
    Link,
    IconButton
} from '@chakra-ui/react'
import { VscGithub } from 'react-icons/vsc'

export default function Footer() {
    return(
        <Box
            as="footer"
            w="100%" 
            p={4} 
            color="white"
            boxShadow='lg'
            bg='#666666'
            opacity='0.3'
            mt={8}
        >
            <Stack direction="row" spacing={4} align="center" justify="space-between">
                <HStack >
                    <Link src='https://www.artic.edu/'>
                        The Art Institute of Chicago® official website
                    </Link>
                </HStack>
                <Link href='https://github.com/tyler-parker/MET-project' isExternal>
                        <IconButton color='red'  icon={<VscGithub />} isRound ></IconButton>
                </Link>
            </Stack>
        </Box>
    )
}