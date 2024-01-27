/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useToast,
  Box,
  Flex,
  Image,
  Badge,
  useColorMode,
  Divider,
} from "@chakra-ui/react";

const InvoiceModal = ({ isOpen, onClose, invoiceData }) => {
  const toast = useToast();

  const handleDownload = () => {
    toast({
      status: "success",
      title: "Invoice Downloaded",
      duration: 4000,
      isClosable: true,
    });
  };

  const { colorMode } = useColorMode();
  const invoiceNumberColor = colorMode === "dark" ? "gray.300" : "gray.800";

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay bg="rgba(0,0,0,0.20)" backdropFilter="blur(0.7px)" />
      <ModalContent bg={colorMode === "dark" ? "#161b22" : "white"}>
        <ModalHeader>Invoice Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={{ base: "column", md: "row" }} align="center" mb={5}>
            <Box flexShrink={0} mb={{ base: 4, md: 0 }}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src={invoiceData.avatarUrl}
                alt={invoiceData.name}
              />
            </Box>
            <Box
              ml={{ base: 0, md: 6 }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text fontWeight="bold" fontSize="xl">
                {invoiceData.name}
              </Text>
              <Text fontSize="lg" color={invoiceNumberColor}>
                Invoice Number: {invoiceData.invoiceNumber || "#INV00112"}
              </Text>
              <Badge
                colorScheme={invoiceData.status === "Paid" ? "green" : "red"}
                fontSize="md"
                mt={2}
              >
                {invoiceData.status}
              </Badge>
            </Box>
          </Flex>
          <Divider my={4} />
          <Box mb={6}>
            <Text fontSize="lg" fontWeight="medium">
              Amount: ${invoiceData.amount}
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              Date: {invoiceData.date}
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleDownload}>
            Download Invoice
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InvoiceModal;
