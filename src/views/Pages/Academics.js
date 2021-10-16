import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Button,
  useDisclosure,
  Collapse,
  Box,
  Input,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData2 } from "variables/general";
import Selection from "components/Select/Selection";
import Upload from "components/Upload/Upload";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import myFunction from "../../components/Navbars/SearchBar/search";

function Academics() {
  const [data, setData] = useState([]);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(async () => {
    axios.get("http://localhost:5000/Academic").then((items) => {
      setData(items.data);
    });
  });

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              Academic Results
            </Text>
          </Flex>
        </CardBody>
        <Card>
          <CardHeader>Search Student</CardHeader>
          <SearchBar />
        </Card>
        <Upload />
      </Card>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Students List
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor} id="dataTable">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">S.No.</Th>
                <Th pl="0px" color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Resitration Number</Th>
                <Th color="gray.400">batch</Th>
                <Th color="gray.400">Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody id = "tr" style={{display:''}}>
              {data.map((item) => {
                return (
                  <TablesTableRow
                    sno={item.roll_no}
                    name={item.sname}
                    reg={item.reg_no}
                    email={item.licet_email}
                    roll={item.batch}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Academics;