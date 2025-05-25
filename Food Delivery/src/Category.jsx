import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[40px] h-[40px] text-green-600" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[40px] h-[40px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "soups",
    icon: <TbSoup className="w-[40px] h-[40px] text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <CiBowlNoodles className="w-[40px] h-[40px] text-green-600" />,
  },
  {
    id: 5,
    name: "main_course",
    icon: <MdOutlineFoodBank className="w-[40px] h-[40px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[40px] h-[40px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <GiHamburger className="w-[40px] h-[40px] text-green-600" />,
  },
];

export default Categories;
