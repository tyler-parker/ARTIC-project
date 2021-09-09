import React from 'react'
import {
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Input,
    DrawerFooter,
    IconButton
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton variant="ghost" icon={<AiOutlineMenu />} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color='white' bgColor="#191919">Exhibit Categories</DrawerHeader>
  
            <DrawerBody color='white' bgColor="#191919">
              <Input placeholder="Type here..." />
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }
