import {
  RiRestaurant2Line,
  RiComputerLine,
  RiGasStationFill,
  RiStarFill,
} from "react-icons/ri";
import { GiLoveSong, GiMedicines, GiSittingDog } from "react-icons/gi";
import {
  MdOutlineLocalCafe,
  MdOutlineLocalHospital,
  MdOutlineLocalLaundryService,
  MdOutlineLocalConvenienceStore,
} from "react-icons/md";
import { BiStore, BiDotsHorizontal } from "react-icons/bi";

const categoryList = [
  {
    id: "1",
    name: "식당",
    icon: RiRestaurant2Line,
  },
  {
    id: "2",
    name: "카페",
    icon: MdOutlineLocalCafe,
  },
  {
    id: "3",
    name: "편의점",
    icon: MdOutlineLocalConvenienceStore,
  },
  {
    id: "4",
    name: "병원",
    icon: MdOutlineLocalHospital,
  },
  {
    id: "5",
    name: "동물병원",
    icon: GiSittingDog,
  },
  {
    id: "6",
    name: "약국",
    icon: GiMedicines,
  },
  {
    id: "7",
    name: "노래방",
    icon: GiLoveSong,
  },
  {
    id: "8",
    name: "pc방",
    icon: RiComputerLine,
  },
  {
    id: "9",
    name: "무인판매점",
    icon: BiStore,
  },
  {
    id: "10",
    name: "주유소",
    icon: RiGasStationFill,
  },
  {
    id: "11",
    name: "세탁방",
    icon: MdOutlineLocalLaundryService,
  },
  {
    id: "12",
    name: "기타",
    icon: BiDotsHorizontal,
  },
];

export default categoryList;
