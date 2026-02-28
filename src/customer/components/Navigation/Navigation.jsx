"use client"

import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from "@headlessui/react"
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const navigation = {
  categories: [
    {
      name: "Women",
      sections: [
        {
          name: "Clothing",
          items: ["Tops", "Dresses", "Pants", "Denim", "Jackets"],
        },
        {
          name: "Accessories",
          items: ["Watches", "Bags", "Belts"],
        },
      ],
    },
    {
      name: "Men",
      sections: [
        {
          name: "Clothing",
          items: ["T-Shirts", "Pants", "Sweaters"],
        },
        {
          name: "Accessories",
          items: ["Wallets", "Hats"],
        },
      ],
    },
  ],
  pages: ["Company", "Stores"],
}

export default function Navigation() {
  return (
    <div className="w-full bg-white sticky top-0 z-50 shadow-sm">

      {/* Top Offer Bar */}
      <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
        Get free delivery on orders over ₹1000
      </div>

      <header className="border-b">
        <nav className="w-full px-6 lg:px-16">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
              MyStore
            </div>

            {/* Center Menu */}
            <PopoverGroup className="hidden lg:flex space-x-8">
              {navigation.categories.map((category) => (
                <Popover key={category.name} className="relative">
                  <PopoverButton className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                    {category.name}
                  </PopoverButton>

                  <PopoverPanel className="absolute left-0 top-full mt-3 w-screen max-w-3xl bg-white shadow-xl rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <h3 className="font-semibold text-gray-900 mb-3">
                            {section.name}
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {section.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#"
                                  className="hover:text-indigo-600 transition"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              ))}

              {navigation.pages.map((page) => (
                <a
                  key={page}
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-indigo-600"
                >
                  {page}
                </a>
              ))}
            </PopoverGroup>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">
                Sign in
              </a>
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">
                Create account
              </a>

              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-indigo-600" />

              <div className="flex items-center space-x-1 cursor-pointer hover:text-indigo-600">
                <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
                <span className="text-sm font-medium">0</span>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}