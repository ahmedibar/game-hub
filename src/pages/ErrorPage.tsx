import { Box, Heading, Text } from "@chakra-ui/layout";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading> Oops! </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
