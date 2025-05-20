import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoIosListBox, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";

const Navbar = ({ number }) => {
  const favorite = useStore((state) => state.favorite);
  const [darkMode, setDarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? JSON.parse(saqlangan) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Top bar */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-32 bg-slate-100 dark:bg-dark dark:text-white text-sm lg:text-base gap-2 lg:gap-0 py-2">
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p className="underline">Ташкент</p>
          <p className="font-semibold">Пункт выдачи</p>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-end gap-4 w-full">
          <a className="text-purple-500 font-semibold" href="#">
            Стать продавцом
          </a>
          <a className="text-purple-500 font-semibold" href="#">
            Открыть пункт выдачи
          </a>
          <a href="#">Вапрос-ответ</a>
          <a href="#">Мои заказы</a>
          <button>Русский</button>
        </div>
      </div>

      {/* Logo, catalog and search */}
      <div className="flex flex-col lg:flex-row items-center gap-4 px-4 lg:px-32 pt-4 dark:bg-dark dark:text-white">
        <Link to="/">
          <img
            className="w-40 lg:w-60"
            src="https://uzum.com/images/services/market-horizontal-logo.png"
            alt="logo"
          />
        </Link>
        <button className="flex items-center gap-2 bg-[#ceccff] text-[#7f4dff] rounded-md px-3 py-2">
          <IoIosListBox className="size-5" /> Каталог
        </button>
        <div className="flex-grow h-[42px] border-2 rounded-md flex justify-between items-center w-full lg:w-[520px]">
          <p className="ml-5 text-gray-500 text-sm">
            Искать товары и категории
          </p>
          <div className="w-12 h-full flex items-center justify-center bg-[#edeff2]">
            <IoIosSearch className="size-5" />
          </div>
        </div>
      </div>

      {/* User controls */}
      <div className="flex flex-wrap justify-center lg:justify-end gap-4 px-4 lg:px-32 py-3 dark:bg-dark dark:text-white">
        <Link
          className="flex items-center gap-2 text-sm hover:bg-gray-100"
          to="/auth/signin"
        >
          <VscAccount className="size-5" /> Войти
        </Link>
        <Link
          className="flex items-center gap-2 text-sm hover:bg-gray-100 relative"
          to="/favorite"
        >
          <IoMdHeartEmpty className="size-6" /> Избранное
          {favorite.length > 0 && (
            <span className="absolute -right-2 -top-1 text-sm text-uzum">
              {favorite.length}
            </span>
          )}
        </Link>
        <button className="flex items-center gap-2 text-sm hover:bg-gray-100">
          <MdOutlineShoppingBag className="size-5" /> Корзина
        </button>
        <button
          className="flex items-center gap-2 text-sm hover:bg-gray-100"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <BsSunFill className="size-5" /> Light
            </>
          ) : (
            <>
              <BsMoonFill className="size-5" /> Dark
            </>
          )}
        </button>
      </div>

      {/* Category links */}
      <div className="hidden md:flex px-4 lg:px-32 pt-4 gap-3 flex-wrap text-sm dark:bg-dark dark:text-white">
        <a className="flex gap-1" href="#">
          <img
            className="w-[24px]"
            src="https://static.uzum.uz/fast_categories/every1.png"
            alt="category"
          />
          <p>Выгода каждый день</p>
        </a>
        <a href="#">Электроника</a>
        <a href="#">Бытовая техника</a>
        <a href="#">Одежда</a>
        <a href="#">Обувь</a>
        <a href="#">Аксессуары</a>
        <a href="#">Красота и уход</a>
        <a href="#">Здоровье</a>
        <a href="#">Товары для дома</a>
        <a href="#">Строительство и ремонт</a>
        <button className="flex items-center gap-1">
          Ещё <FaChevronDown className="size-3" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
