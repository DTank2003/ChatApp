import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Flex,
  ModalHeader,
  ModalOverlay,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          h="400px"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w="100%"
            h="100%"
            bgGradient="linear(to right, #799f0c, #acbb78);"
            borderRadius="md"
            p={4}
          >
            <Flex direction="column" alignItems="center" justify="center">
              {" "}
              <ModalHeader
                fontSize="40px"
                fontFamily="Nunito, sans-serif"
                justifyContent="center"
              >
                {user.name}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody
                d="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box textAlign="center">
                  <Flex direction="column" alignItems="center" justify="center">
                    <Image
                      borderRadius="full"
                      boxSize="150px"
                      src={user.pic}
                      alt={user.name}
                      m={1}
                    />
                  </Flex>
                </Box>
                <Text
                  fontSize={{ base: "28px", md: "30px" }}
                  fontFamily="Nunito, sans-serif"
                  m={1}
                >
                  Email: {user.email}
                </Text>
              </ModalBody>
              <ModalFooter d="flex" justifyContent="center">
                {" "}
                {/* Center content within ModalFooter */}
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
