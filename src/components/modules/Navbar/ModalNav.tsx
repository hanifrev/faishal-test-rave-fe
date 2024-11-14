import NavLists from './NavList'

const ModalNav = () => {
  return (
    <div className="fixed mt-20 lg:mt-24 inset-0 bg-white flex  z-50  ">
      <div className="flex flex-col transition-all w-full xl:w-max lg:w-[375px]">
        <NavLists />
      </div>
    </div>
  )
}

export default ModalNav
