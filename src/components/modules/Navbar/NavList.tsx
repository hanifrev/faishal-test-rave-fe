import { ChevronDown, ChevronRight } from 'assets'
import { NavList } from 'constants/NavList'

const NavLists = () => {
  return (
    <>
      {NavList.map((item, index) => {
        return (
          <div
            className="flex flex-row justify-between items-center w-full lg:w-[375px] xl:w-max transition-all text-base lg:text-sm font-bold p-4 !pl-6 cursor-pointer"
            key={index}
          >
            <span className="cursor-pointer">{item.name}</span>
            <span>
              <img
                src={ChevronRight}
                alt="chevright"
                className="w-6 xl:hidden"
              />
              <img
                src={ChevronDown}
                alt="chevdown"
                className="hidden xl:block xl:w-4 pl-1"
              />
            </span>
          </div>
        )
      })}
    </>
  )
}

export default NavLists
