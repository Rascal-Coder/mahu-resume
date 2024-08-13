'use client';
import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import Logo from '@/components/svg/Logo';

import SearchIcon from './SearchIcon';
export default function App() {
  const router = useRouter();
  const [isLogined] = useState(false);
  // TODO: Add Login and Logout
  return (
    <Navbar isBordered className="dark">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo width={30} height={30} />
          <p
            onClick={() => {
              router.push('/');
            }}
            className="ml-4 hidden cursor-pointer hover:scale-105 transition-all sm:block font-bold text-inherit  text-white"
          >
            Mahu-Resume
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full  h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Search here..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {isLogined ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="default"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="account">My Account</DropdownItem>
              <DropdownItem key="add_newtemplate">Add New Template</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="ghost">
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
