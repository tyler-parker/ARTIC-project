import React from 'react'
import {
    useDisclosure,
    Button,
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
        <IconButton icon={<AiOutlineMenu />} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bgColor="#191919">Exhibit Categories</DrawerHeader>
  
            <DrawerBody bgColor="#191919">
              <Input placeholder="Type here..." />
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }
