import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { navigationData } from "./navigationData";
import AuthModal from "../Auth/AuthModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Temporary user (Later replace with Redux)
  const [user, setUser] = useState(null);
  const [cartCount] = useState(0);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setAnchorEl(null);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="mx-auto px-6 lg:px-8 border-b">
          <div className="flex h-16 items-center justify-between">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-600"
                onClick={() => setMobileOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>

              {/* Logo */}
              <Link to="/">
                <h1 className="text-xl font-bold">ZOSH</h1>
              </Link>

              {/* Desktop Menu */}
              <Popover.Group className="hidden lg:flex gap-8 ml-10">
                {navigationData.categories.map((category) => (
                  <Popover key={category.id} className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-black" : "text-gray-700",
                            "text-sm font-medium hover:text-black"
                          )}
                        >
                          {category.name}
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 mt-3 w-56 bg-white shadow-lg p-6 rounded-md">
                            {category.sections.map((section) => (
                              <div key={section.id} className="mb-4">
                                <p className="font-semibold">
                                  {section.name}
                                </p>
                                <ul className="mt-2 space-y-2">
                                  {section.items.map((item) => (
                                    <li
                                      key={item.id}
                                      className="cursor-pointer text-sm hover:text-black"
                                      onClick={() =>
                                        navigate(
                                          `/${category.id}/${section.id}/${item.id}`
                                        )
                                      }
                                    >
                                      {item.name}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}
              </Popover.Group>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">

              {/* Search */}
              <MagnifyingGlassIcon
                onClick={() => navigate("/products/search")}
                className="h-6 w-6 cursor-pointer text-gray-600"
              />

              {/* Cart */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
                <span className="ml-1 text-sm">{cartCount}</span>
              </div>

              {/* User */}
              {user ? (
                <>
                  <Avatar
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    sx={{ bgcolor: deepPurple[500], cursor: "pointer" }}
                  >
                    {user?.firstName?.charAt(0)}
                  </Avatar>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => navigate("/account/orders")}>
                      My Orders
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button onClick={() => setAuthOpen(true)}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <Transition show={mobileOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setMobileOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="fixed inset-0 flex">
            <Dialog.Panel className="w-64 bg-white p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <XMarkIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                />
              </div>

              {navigationData.categories.map((category) => (
                <div key={category.id} className="mb-4">
                  <p className="font-semibold">{category.name}</p>
                </div>
              ))}
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      <AuthModal open={authOpen} handleClose={() => setAuthOpen(false)} />
    </>
  );
}