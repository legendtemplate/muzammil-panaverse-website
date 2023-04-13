import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
export default function index() {
  return (
    <>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={3}
      >
        <Link
          className="text-lg font-normal bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
          href={"#"}
        >
          <FaFacebook />
        </Link>
        <Link
          className="text-lg font-normal bg-blue-400 hover:bg-blue-300 text-white p-3 rounded-md"
          href={"#"}
        >
          <FaTwitter />
        </Link>
        <Link
          className="text-lg font-normal bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-md"
          href={"#"}
        >
          <FaGithub />
        </Link>
      </Stack>
    </>
  );
}
