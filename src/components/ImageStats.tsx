import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { DownloadIcon, EyeIcon, HeartIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useImage } from "../context/ImageContext";

export default function ImageStats() {
  const { current } = useImage();

  return (
    <Flex
      border="1px"
      rounded="md"
      borderColor="gray.300"
      alignItems="center"
      justifyContent="center"
      gap={4}
      px={8}
      mb={{ base: 8, md: 0 }}
    >
      <Stack alignItems="center" justifyContent="center" p={2}>
        <Icon as={HeartIcon} color="teal.600" fontSize="xl" />
        <Text color="teal.600" fontSize="md">
          {current?.likes.toLocaleString()}
        </Text>
      </Stack>

      <Stack alignItems="center" justifyContent="center" p={2}>
        <Icon as={EyeIcon} color="teal.600" fontSize="xl" />
        <Text color="teal.600" fontSize="md">
          {current?.views?.toLocaleString()}
        </Text>
      </Stack>

      <Link to={{ pathname: current?.links.download }} target="_blank">
        <Stack alignItems="center" justifyContent="center" p={2}>
          <Icon as={DownloadIcon} color="teal.600" fontSize="xl" />
          <Text color="teal.600" fontSize="md">
            {current?.downloads?.toLocaleString()}
          </Text>
        </Stack>
      </Link>
    </Flex>
  );
}
