import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>DouglasSoares16</Text>
            <Text color="gray.300" fontSize="small">
              douglassoares16.dev@gmail.com
            </Text>
          </Box>
        )
      }

      <Avatar
        size="md"
        name="DouglasSoares16"
        src="http://github.com/DouglasSoares16.png" />
    </Flex>
  );
}