import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  Input,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    _hover={{
      textDecoration: "none",
    }}
    className="bg-white px-2 py-1 rounded-md"
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="bg-white px-3">
        <Flex className="container mx-auto  items-center justify-between">
          <Image src="/panaverse.webp" alt="panvere" height="120" width="120" />

          <div className="hidden mx-10 md:block">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="text-red-400" />
              </span>
              <input
                className="w-full py-2 pl-12 focus:pl-24 transition-all pr-4 text-gray-500 bg-white border rounded-md border-red-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Search"
              />
            </div>
          </div>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <button className="bg-red-400 hover:shadow-lg p-3 rounded">
                <FiBell />
              </button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
