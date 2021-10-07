import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Grid,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import FundingProjectWeb3UseCase from "../web3/fundingProject/FundingProjectUseCase";
import source from "../images/childrenproject.png";

export default function Create() {
  const [donationValue, setValue] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    console.log(donationValue);
    console.log(lastName);
    console.log(checkbox); //
  };
  const fundProject = () => {
    console.log("Amount donated -> " + donationValue);
    FundingProjectWeb3UseCase().fund();
  };
  return (
    <div>
      <Box>
        <Image
          width="100%"
          height="300px"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          filter="brightness(80%)"
          objectFit="cover"
          src={source}
        />
        <Flex justifyContent="space-between">
          <Box flex="2" maxWidth="800px" mr="50px">
            <Box mb="8" margin= "10px">
              <Heading fontSize="30px" >Our Mission</Heading>
              <Text mt="35px" fontSize="20px" >
                {"Our mission is to allow children to have dreams!"}
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Box p="20px" border="2px solid rgba(227, 220, 11, 0.5)" margin="10px">
              <Heading>{"Joe Donator"}</Heading>
              <Text opacity="0.8">{"Founder of NGO Kids Care "}</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Form className="create-form" >
        <Form.Field >
          <label>Total Amount</label>
          <input
            style={{width: "200px"}}
            placeholder="Total Amount"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={fundProject} type="submit">
          Donate here!
        </Button>
      </Form>
      
    </div>
  );
}
