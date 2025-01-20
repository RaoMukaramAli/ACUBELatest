"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavOpen &&
        !event.target.closest(`.${styles.navbar}`) &&
        !event.target.closest(".navbar-toggler")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavOpen]);
  return (
    <header className={`site-header ${styles.siteHeader} `}>
      <nav className={`navbar d-flex navbar-expand-xl ${styles.navbar}`}>
        <div className="container">
          <button
            className={` navbar-toggler d-xl-none ${styles.navbarToggler} `}
            type="button"
            onClick={handleToggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className={` ${styles.bar} ${styles.bar1} `}></span>
            <span className={` ${styles.bar} ${styles.bar2} `}></span>
            <span className={` ${styles.bar} ${styles.bar3} `}></span>
          </button>
          <Link href="/">
            <Image
              className="d-none d-md-block"
              src="/svgs/logo.svg"
              width={63.5}
              height={63.5}
              alt="site logo"
            ></Image>
            <Image
              className="d-block d-md-none"
              src="/svgs/logo.svg"
              width={55}
              height={55}
              alt="mobile logo"
            ></Image>
          </Link>

          {/* <a href="#" className={` d-xl-none ${styles.mobileLogo} `}></a> */}

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""} ${
              styles.navbar_collapse
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item" onClick={closeNav}>
                <Link className="nav-link" aria-current="page" href="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  What We Serve
                </a>
                <ul className="dropdown-menu">
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/calls">
                      Calls
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/advisory">
                      Longer term advisory
                    </Link>
                  </li>
                  <li onClick={closeNav}>
                    <Link className="dropdown-item" href="/surveys">
                      Surveys
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item" onClick={closeNav}>
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="/industries"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          <div className=" d-block ">
            <Link href="/contactus">
              <button className={`btn ${styles.navBtn}`} type="submit">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
