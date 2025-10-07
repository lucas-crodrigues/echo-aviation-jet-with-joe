import { navbarLinks } from "../data/navbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  X_URL,
  YOUTUBE_URL,
  TIKTOK_URL,
  PHONE_NUMBER,
  COMPANY_NAME,
  LOGO_PRIMARY,
  LOGO_SECONDARY,
} from "../consts.ts";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname,
          ),
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname,
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  return (
    <nav className="">
      <div
        className={`${
          navBar || openMobile ? "bg-cod-gray-950/90 " : "bg-cod-gray-950/50"
        } duration-500 backdrop-blur-sm`}
      >
        <div className="px-5 w-full top-0 pb-2">
          <div
            className={`${navBar || openMobile ? "lg:h-20" : "lg:h-28"} w-full flex h-20 align-middle justify-between transition-all`}
            id="navbar"
          >
            <div className="hidden md:flex w-full items-center justify-between flex-auto">
              <div className="hidden lg:flex w-full justify-between text-lg">
                <ul className="flex flex-1 min-w-0 lg:w-1/3 align-middle gap-2 xl:gap-5 items-center">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${isActive(item, pathname) ? "decoration-transparent underline font-normal" : "font-thin"} py-5 uppercase xl:tracking-widest relative group last:no-underline last:px-0`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                          className={`${navBar || openMobile ? "text-accent-100" : "text-accent-100"} font-bold font-sans text-xl duration-300 hover:underline decoration-primary-500 decoration-2 underline-offset-[10px] border-primary whitespace-nowrap `}
                        >
                          <span className="relative block">
                            {item.name}
                          </span>
                        </a>
                      ) : (
                        <span className="font-medium cursor-default text-2xl duration-300 hover:underline decoration-primary-300 decoration-4 underline-offset-[10px] py-12 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`${navBar || openMobile ? "bg-cod-gray-950/90" : "bg-cod-gray-950/70 backdrop-blur-md"} absolute top-16 whitespace-nowrap text-accent-100 font-bold font-sans -left-4 duration-400 ease-in-out ${hoveredIndex === index ? "max-h-auto w-auto opacity-100" : "max-h-0 h-0 opacity-0 overflow-hidden"}`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${isActive(subitem, pathname) ? "scale-110  text-accent-100" : ""} relative hover:bg-primary-500 hover:scale-110 duration-200 px-3 hover:shadow-sm drop-shadow-sm font-bold hover:text-accent-100`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a
                                  className="p-3 block"
                                  href={subitem.link}
                                  target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                                >
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="cursor-default p-3 block">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute z-20 top-0 bg-primary-400 whitespace-nowrap left-full duration-500 ${subHoveredIndex === subIndex ? "max-h-auto w-auto opacity-100" : "max-h-0 w-0 opacity-0 overflow-hidden"}`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${isActive(subsubitem, pathname) ? "bg-primary" : ""} relative hover:bg-secondary`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#top"
                  className="relative hover:brightness-110 duration-200 ease-in-out flex-1 min-w-0 lg:w-1/3 flex justify-center"
                >
                  <img
                    src={`${navBar || openMobile ? LOGO_SECONDARY : LOGO_SECONDARY}`}
                    alt={`${COMPANY_NAME} logo`}
                    aria-label={`${COMPANY_NAME} logo`}
                    title={COMPANY_NAME}
                    loading="eager"
                    className={`${navBar || openMobile ? "h-20 lg:h-20 p-1" : "mt-4 h-20 p-2 lg:h-28"} mx-auto object-contain duration-500 max-w-[70vw] rounded-xl`}
                  />
                </a>
                
                <div
                  className="relative hover:brightness-110 duration-200 ease-in-out flex-1 min-w-0 lg:w-1/3 flex justify-end items-center"
                >
                  <a href="/start-flying" className={`btn-primary ${navBar || openMobile ? "btn-accent" : ""}`}> 
                   Enroll
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full lg:hidden flex justify-between items-center">
              <a
                href="/#top"
                className="relative left-2"
              >
                <img
                  src={`${navBar || openMobile ? LOGO_SECONDARY : LOGO_SECONDARY}`}
                  alt={`${COMPANY_NAME} logo`}
                  aria-label={`${COMPANY_NAME} logo`}
                  title={COMPANY_NAME}
                  loading="eager"
                  className={`${navBar || openMobile ? "h-20 lg:h-20 p-1" : "mt-4 h-20 p-2 lg:h-28"}  object-contain duration-500 max-w-[70vw] rounded-xl`}
                />
              </a>
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} ${navBar ? "text-accent-100" : "text-primary-800"} h-6 w-6 `}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6 text-primary-950`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "h-full" : "max-h-0"
        } overflow-x-hidden duration-700 ease-in-out fixed w-full right-0 z-50  bg-primary-700 ${navBar ? "top-0" : "top-12"} backdrop-blur-md`}
        id="mobile-menu"
      >
        <div className="flex justify-end pl-5 pr-[26px] py-6">
          <svg
            className={`${openMobile ? "opacity-100" : "opacity-0"} h-6 w-6 text-cod-gray-950 cursor-pointer z-30 text-primary-900-50 duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <div className="bg-cod-gray-950 py-6 flex justify-center items-center">
          <a href="/#top">
            <img
              src={LOGO_SECONDARY}
              alt={`${COMPANY_NAME} logo`}
              title={COMPANY_NAME}
              className="h-20 w-auto object-contain"
            />
          </a>
        </div>

        <div
          className={`absolute w-full h-48 top-0 z-20 ${
            openMobile
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-50"
          } delay-500 duration-500 ease-in-out`}
        ></div>

        <ul className="px-3 pb-3 mt-6 pt-2 flex flex-col align-middle font-semibold items-center bg-primary-700">
          {navbarLinks.map((item, index) => (
            <li
              key={index}
              className="relative group border-b border-primary-100/20 last:border-none w-full text-center text-accent-100"
              onClick={() => handleItemClick(index)}
            >
              {item.mobileLink ? (
                <a
                  href={item.link}
                  target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                  className="text-xl block py-3 duration-300 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : (
                <div className="font-sans2 justify-center flex cursor-pointer text-xl duration-300  border-primary whitespace-nowrap">
                  <p className="font-sans2 py-3">{item.name}</p>
                  <div
                    className={`absolute right-2 top-2 p-2 pointer-events-none duration-500 ease-in-out rounded-full ${hoveredIndex === index ? "bg-primary-100/30 -rotate-90" : "bg-primary-900/30 rotate-90"} 
                    `}
                  >
                    <IoIosArrowForward
                      className={`${hoveredIndex === index ? "text-primary-900" : "text-accent-100"} size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`mx-auto whitespace-nowrap left-0 duration-500 overflow-hidden  ${hoveredIndex === index ? "max-h-[50rem] mb-5" : "max-h-0"}`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative border-b border-primary-100/20 w-full font-bold"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a
                          className="p-1 block font-medium text-accent-100 py-2 text-lg"
                          href={subitem.link}
                          target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                        >
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="font-normal p-5 w-full justify-between flex cursor-pointer text-2xl duration-300 border-primary whitespace-nowrap">
                          <p>{subitem.name}</p>
                          <div
                            className={`p-1 pointer-events-none duration-300 rounded-full ${subHoveredIndex === subIndex ? "rotate-90" : "bg-primary -rotate-90"} 
                    `}
                          >
                            <IoIosArrowForward
                              className={`${subHoveredIndex === subIndex ? "text-accent-1000" : "text-accent-100"} size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`ml-8 bg-primary whitespace-nowrap left-full duration-500 overflow-hidden ${subHoveredIndex === subIndex ? "max-h-fit" : "max-h-0"}`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                className="block p-5 font-normal"
                                font-thin
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        <div
                  className="relative hover:brightness-110 duration-200 ease-in-out flex-1 min-w-0 w-full lg:w-1/3 flex justify-end items-center"
                >
                  <a href="/start-flying" className={`btn-primary ${navBar || openMobile ? "btn-accent w-full" : ""}`}> 
                   Enroll
                  </a>
        </div>


        <div className="font-normal flex flex-col justify-center items-center overflow-hidden bg-primary-700">
          <a
            aria-labelledby="Call Us Now"
            title="Call Us Now"
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center py-4 gap-2 text-accent-100 w-full"
          >
            <FaPhone className="size-5 text-accent-100" />
            {PHONE_NUMBER}
          </a>

          <div className="flex gap-4 mt-2 mb-16 text-accent-100 justify-center items-center">
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" aria-label="LinkedIn" title="LinkedIn"
                className="transition duration-300 hover:scale-105 hover:text-blue-600">
                <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 
                  16 1.146v13.708c0 .633-.526 1.146-1.175 
                  1.146H1.175C.526 16 0 15.487 0 
                  14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 
                  0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
                  3.226 2.4 3.934c0 .694.521 1.248 
                  1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                  1.232-.878.869 0 1.216.662 1.216 
                  1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                  0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 
                  0 7.225 0 7.225z" />
                </svg>
              </a>
            )}

            {INSTAGRAM_URL && (
              <a href={INSTAGRAM_URL} target="_blank" aria-label="Instagram" title="Instagram"
                className="transition duration-300 hover:scale-105 hover:text-pink-600">
                <svg className="w-6 h-6" viewBox="0 0 30 30" fill="currentColor">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10
                  C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9
                  c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
            )}

            {FACEBOOK_URL && (
              <a href={FACEBOOK_URL} target="_blank" aria-label="Facebook" title="Facebook"
                className="transition duration-300 hover:scale-105 hover:text-blue-500">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413
                  c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001
                  c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            )}

            {YOUTUBE_URL && (
              <a href={YOUTUBE_URL} target="_blank" aria-label="YouTube" title="YouTube"
                className="transition duration-300 hover:scale-105 hover:text-red-500">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418
                  c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814
                  c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418
                  c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z 
                  M10,15.464V8.536L16,12L10,15.464z" />
                </svg>
              </a>
            )}

            {X_URL && (
              <a href={X_URL} target="_blank" aria-label="X" title="X"
                className="transition duration-300 hover:scale-105 hover:text-white/70">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z
                  M21,6v12c0,1.657-1.343,3-3,3H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12
                  C19.657,3,21,4.343,21,6z M17.538,17l-4.186-5.99L16.774,7h-1.311l-2.704,3.16L10.552,7
                  H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z" />
                </svg>
              </a>
            )}

            {TIKTOK_URL && (
              <a href={TIKTOK_URL} target="_blank" aria-label="TikTok" title="TikTok"
                className="transition duration-300 hover:scale-105 hover:text-fuchsia-500">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M33.5 4h-6.4v24.6c0 3.2-2.6 5.9-5.9 5.9S15.3 31.8 15.3 28.6s2.6-5.9 
                  5.9-5.9c.5 0 .9.1 1.3.2v-6.3c-.4 0-.9-.1-1.3-.1-6.8 
                  0-12.4 5.5-12.4 12.4S14.4 41.3 21.3 41.3 33.6 35.8 33.6 
                  28.9V17.6c1.8 1.2 4 2 6.4 2V13c-2.9 0-5.4-1.3-6.5-3V4z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
