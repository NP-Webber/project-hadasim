import { MdOutlineCoronavirus, MdOutlinePeopleAlt } from "react-icons/md"
import MenuLink from "./MenuLink"
import './sidebar.css'

const SideBar = () => {
  const menuItems = [
    {
      title: "pages",
      list: [
        {
          title: "Members",
          path: "/members",
          icon: <MdOutlinePeopleAlt />
        },
        {
          title: "Corona",
          path: "/corona",
          icon: <MdOutlineCoronavirus />
        }
      ]
    }
  ]

  return (
    <div className='side-bar'>
      <ul className='list'>
        {menuItems.map(item => (
          <li key={item.title}>
            <span> {item.title}</span>
            {item.list.map(item => (
              <MenuLink item={item} key={item.title} />
              ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar