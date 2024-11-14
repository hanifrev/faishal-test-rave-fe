import {
  CloseIcon,
  Humburger,
  MainLogo,
  PhoneIcon,
  SearchIcon,
  WAIcon
} from 'assets'
import { useState } from 'react'
import TopBar from './TopBar'
import ModalNav from './ModalNav'
import NavLists from './NavList'

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="relative">
      <TopBar />
      <div className="flex flex-row h-20 items-center justify-between  transition-all ">
        <div className="flex flex-row gap-[6px] md:gap-5 z-50">
          <button
            onClick={isModalOpen ? closeModal : openModal}
            className="w-5 xl:hidden"
          >
            <img src={isModalOpen ? CloseIcon : Humburger} />
          </button>
          <img src={MainLogo} className="w-[174px]" />
          <div className="hidden xl:flex">
            <NavLists />
          </div>
        </div>
        <div className="flex z-50">
          <button>
            <img
              src={SearchIcon}
              className="w-[15.2px] mx-[13px] lg:w-[23px]"
            />
          </button>
          <button>
            <img src={PhoneIcon} className="w-[15.2px] mx-[13px] lg:hidden" />
          </button>
          <button>
            <img src={WAIcon} className="w-[15.2px] mx-[13px] lg:hidden" />
          </button>

          {/* LG BREAKPOINT */}
          <div className="hidden lg:flex flex-row">
            <div className="w-[65.5px] flex flex-col text-xs text-right ml-4 ">
              <span className="font-bold ">Customers</span>
              <span>Agents</span>
            </div>
          </div>
          <div className="hidden lg:block border-r border-[#dedee5] h-9 mx-2" />
          <div className="hidden lg:flex flex-col text-xs">
            <div className="flex flex-row gap-2">
              <img src={PhoneIcon} className="w-[10px]" />
              <span className="font-bold">+62 811 871 8008</span>
            </div>
            <div className="flex flex-row gap-2">
              <img src={WAIcon} className="w-[10px]" />
              <span className="font-bold">62 8111 452025</span>
            </div>
            <div className="text-[10px] text-[#6b6b6b] font-bold">
              or call your travel agent
            </div>
          </div>
        </div>

        {isModalOpen && <ModalNav />}
      </div>
      <div className="shadow-navbar absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 " />
    </div>
  )
}

export default Navbar
