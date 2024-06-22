import { MdDashboard } from "react-icons/md";
import { IoMdCamera, IoMdPerson } from "react-icons/io";

const sideBarTabs = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    initiallyOpened: false,
    link: "/dashboard",
  },
  {
    label: "Movies",
    icon: IoMdCamera,
    initiallyOpened: false,
    link: undefined,
    links: [
      { label: "List", link: "/dashboard/movies/list" },
      { label: "Create Movie", link: "/dashboard/movies/create" },
    ],
  },
  {
    label: "Casts",
    icon: IoMdPerson,
    initiallyOpened: false,
    link: undefined,
    links: [
      { label: "List", link: "/dashboard/casts/list" },
      { label: "Create Movie", link: "/dashboard/casts/create" },
    ],
  },
  {
    label: "Studios",
    icon: IoMdPerson,
    initiallyOpened: false,
    link: undefined,
    links: [
      { label: "List", link: "/dashboard/studios/list" },
      { label: "Create Movie", link: "/dashboard/studios/create" },
    ],
  },
  {
    label: "Categories",
    icon: IoMdPerson,
    initiallyOpened: false,
    link: undefined,
    links: [
      { label: "List", link: "/dashboard/categories/list" },
      { label: "Create Movie", link: "/dashboard/categories/create" },
    ],
  },
];

export default sideBarTabs;
