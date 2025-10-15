import { Navbar } from "flowbite-react";
import { Const_Menu_Items } from "../const";

export function VendexHeaderWithUserDropdown() {
  return (
    <header className="bg-[#F3F3F3]">
      <Navbar fluid className="bg-[#F3F3F3]">
        <Navbar.Brand href="/">
          <img
            src="/images/logo.svg"
            className="sm:ml-0 ml-8 mr-3 h-6 sm:h-9 md:ml-8"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex items-center gap-1 lg:order-2 lg:gap-3">
          <Navbar.Toggle theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          {Const_Menu_Items.map((item, index) => (
            <Navbar.Link
              key={index}
              className="text-[15px] font-light"
              href={item.href}
            >
              {item.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
