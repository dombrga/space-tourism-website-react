import HamburgerMenu from "../layout/navigation/hamburger-menu/HamburgerMenu";
import Sidebar from "../layout/navigation/sidebar/Sidebar";
import SingleLink from "../layout/navigation/single-link/SingleLink";
import s from "./GlobalNavbar.module.scss";
import { useWindowSize } from "@/hooks/hooks";
import { useState } from "react";

function GlobalNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [windowWidth, _] = useWindowSize();

  const isDesktop = windowWidth > 768
  const desktopTabletNav = <SingleLink isDesktop={isDesktop} />;

  const mobileNav = (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <HamburgerMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );

  return (
    <nav className={s["nav"]}>
      {windowWidth < 460 ? mobileNav : desktopTabletNav}
    </nav>
  );
}

export default GlobalNavBar;
