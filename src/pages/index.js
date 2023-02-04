import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
        <title>Saasland</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/*icon font css*/}
        <link rel="stylesheet" href="vendors/themify-icon/themify-icons.css" />
        <link
          rel="stylesheet"
          href="vendors/simple-line-icon/simple-line-icons.css"
        />
        <link rel="stylesheet" href="vendors/font-awesome/css/all.css" />
        <link rel="stylesheet" href="vendors/flaticon/flaticon.css" />
        <link rel="stylesheet" href="vendors/animation/animate.css" />
        <link
          rel="stylesheet"
          href="vendors/owl-carousel/assets/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="vendors/animation/animate.css" />
        <link rel="stylesheet" href="vendors/magnify-pop/magnific-popup.css" />
        <link rel="stylesheet" href="vendors/elagent/style.css" />
        <link
          rel="stylesheet"
          href="vendors/scroll/jquery.mCustomScrollbar.min.css"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />


      </Head>
      <>
        {/* <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="L" className="letters-loading">
                  L
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="N" className="letters-loading">
                  N
                </span>
                <span data-text-preloader="D" className="letters-loading">
                  D
                </span>
              </div>
              <p className="text-center">Loading</p>
            </div>
            <div className="loader">
              <div className="row">
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="body_wrapper">
          <header className="header_area">
            <nav className="navbar navbar-expand-lg menu_one">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src="img/logo.png" srcSet="img/logo2x.png 2x" alt="logo" />
                </a>
                <a className="btn_get btn_hover mobile_btn ml-auto" href="#get-app">
                  Get Started
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_toggle">
                    <span className="hamburger">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="hamburger-cross">
                      <span />
                      <span />
                    </span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto menu">
                    <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <div className="mega_menu_inner">
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <ul className="dropdown-menu scroll">
                              <li className="nav-item">
                                <a href="home-chat.html" className="item">
                                  <span className="img">
                                    <span className="rebon_tap">New</span>
                                    <img
                                      src="img/mega-menu-img/home-chat.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Home Chat</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-tracking.html" className="item">
                                  <span className="img">
                                    <span className="rebon_tap">New</span>
                                    <img
                                      src="img/mega-menu-img/home-track.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Home Tracking</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-event.html" className="item">
                                  <span className="img">
                                    <span className="rebon_tap">New</span>
                                    <img
                                      src="img/mega-menu-img/home-event.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Home Event</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-security.html" className="item">
                                  <span className="img">
                                    <span className="rebon_tap">New</span>
                                    <img
                                      src="img/mega-menu-img/home-security.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Home Security</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-split.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home7.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Home Split</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-support.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/support.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Support</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-color.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home-animation.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Scroll Animation</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="home_analytics_software.html"
                                  className="item"
                                >
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/analytices.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Analytices</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-hosting.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/hosting.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Hosting</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-pos.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/pos.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">POS</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-erp.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/erp.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">ERP</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-prototype-two.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/Prototyping_Tool.jpg"
                                      alt="Prototyping Tool"
                                    />
                                  </span>
                                  <span className="text">Prototyping Tool</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="home-payment-processing.html"
                                  className="item"
                                >
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home16.jpg"
                                      alt="home16"
                                    />
                                  </span>
                                  <span className="text">Payment Processing</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-mail.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home9.jpg"
                                      alt="home9"
                                    />
                                  </span>
                                  <span className="text">Email Client</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-startup.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home15.jpg"
                                      alt="home15"
                                    />
                                  </span>
                                  <span className="text">Startup</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-saas.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home17.jpg"
                                      alt="Classic Saas"
                                    />
                                  </span>
                                  <span className="text">Classic Saas</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-software-dark.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home13.jpg"
                                      alt="Software (Dark)"
                                    />
                                  </span>
                                  <span className="text">Software (Dark)</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-app-showcase.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home14.jpg"
                                      alt="App Showcase"
                                    />
                                  </span>
                                  <span className="text">App Showcase</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="home-digital-marketing.html"
                                  className="item"
                                >
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home11.jpg"
                                      alt="Digital Marketing"
                                    />
                                  </span>
                                  <span className="text">Digital Marketing</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-cloud.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home12.jpg"
                                      alt="Cloud Based Saas"
                                    />
                                  </span>
                                  <span className="text">Cloud Based Saas</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-hr-management.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home4.jpg"
                                      alt="HR Management"
                                    />
                                  </span>
                                  <span className="text">HR Management</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-marketing-two.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home3.jpg"
                                      alt="CRM Software"
                                    />
                                  </span>
                                  <span className="text">CRM Software</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-payment-style2.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home1.jpg"
                                      alt="Accounts & Billing"
                                    />
                                  </span>
                                  <span className="text">Accounts &amp; Billing</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="home-digital-marketing-two.html"
                                  className="item"
                                >
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home5.jpg"
                                      alt="Digital Agency"
                                    />
                                  </span>
                                  <span className="text">Digital Agency</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="home-project-management.html"
                                  className="item"
                                >
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home8.jpg"
                                      alt="Project Management"
                                    />
                                  </span>
                                  <span className="text">Project Management</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-saas-two.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/saas2-slider.png"
                                      alt="Saas 02 (Slider)"
                                    />
                                  </span>
                                  <span className="text">Saas 02 (Slider)</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="home-company.html" className="item">
                                  <span className="img">
                                    <img
                                      src="img/mega-menu-img/home2.jpg"
                                      alt="home2"
                                    />
                                  </span>
                                  <span className="text">Company</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown submenu nav-item">
                      <a
                        title="Pages"
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="#"
                      >
                        Pages
                      </a>
                      <ul role="menu" className=" dropdown-menu">
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Service"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Service <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Service 01"
                                className="nav-link"
                                href="service-1.html"
                              >
                                Service 01
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Service 02"
                                className="nav-link"
                                href="service-2.html"
                              >
                                Service 02
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Service 03"
                                className="nav-link"
                                href="service-3.html"
                              >
                                Service 03
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Service Details"
                                className="nav-link"
                                href="service-details.html"
                              >
                                Service Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Career"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Career <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Job Listing"
                                className="nav-link"
                                href="job-listing.html"
                              >
                                Job Listing
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Job Details"
                                className="nav-link"
                                href="job-details.html"
                              >
                                Job Details
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Apply Job"
                                className="nav-link"
                                href="job-apply.html"
                              >
                                Apply Job
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a title="About" className="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a title="Process" className="nav-link" href="process.html">
                            Process
                          </a>
                        </li>
                        <li className="nav-item">
                          <a title="Pricing" className="nav-link" href="price.html">
                            Pricing
                          </a>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Case Study"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Case Study
                            <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Case Study"
                                className="nav-link"
                                href="case-study.html"
                              >
                                Case Study
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Case study Details"
                                className="nav-link"
                                href="case-study-details.html"
                              >
                                Case Study Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a title="Team" className="nav-link" href="team.html">
                            Team
                          </a>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Sign Up"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Sign Up <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Sign Up 01"
                                className="nav-link"
                                href="sign-up-1.html"
                              >
                                Sign Up 01
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Sign Up 02"
                                className="nav-link"
                                href="sign-up-2.html"
                              >
                                Sign Up 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Login"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Login
                            <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Login 01"
                                className="nav-link"
                                href="login.html"
                              >
                                Login 01
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Login 02"
                                className="nav-link"
                                href="login-two.html"
                              >
                                Login 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a title="FAQ" className="nav-link" href="faq.html">
                            FAQ
                          </a>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title="Contact"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            Contact <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul role="menu" className="dropdown-menu">
                            <li className="nav-item">
                              <a
                                title="Contact 01"
                                className="nav-link"
                                href="contact-1.html"
                              >
                                Contact 01
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="Contact  02"
                                className="nav-link"
                                href="contact-2.html"
                              >
                                Contact 02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a
                            title="Thank You"
                            className="nav-link"
                            href="thanks.html"
                          >
                            Thank You
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            title="Coming Soon"
                            className="nav-link"
                            href="coming-soon.html"
                          >
                            Coming Soon
                          </a>
                        </li>
                        <li className="dropdown submenu nav-item">
                          <a
                            title={404}
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="#"
                          >
                            404
                            <span className="arrow_carrot-right" />{" "}
                          </a>
                          <ul className=" dropdown-menu">
                            <li className="nav-item">
                              <a title="404 01" className="nav-link" href="404.html">
                                404 01
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                title="404 02"
                                className="nav-link"
                                href="404-two.html"
                              >
                                404 02
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown submenu mega_menu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Portfolio
                      </a>
                      <div className="mega_menu_inner">
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="index.html" className="nav-link">
                              Portfolio Grid
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-2col.html"
                                  className="nav-link"
                                >
                                  Style 1 (2 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-3columns.html"
                                  className="nav-link"
                                >
                                  Style 1 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-4columns.html"
                                  className="nav-link"
                                >
                                  Style 1 (4 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-2col-2.html"
                                  className="nav-link"
                                >
                                  Style 2 (2 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-2col-3.html"
                                  className="nav-link"
                                >
                                  Style 2 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-2col-4.html"
                                  className="nav-link"
                                >
                                  Style 2 (4 columns)
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="index.html" className="nav-link">
                              Portfolio Fluid
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a
                                  href="portfolio-fullwidth-3columns.html"
                                  className="nav-link"
                                >
                                  Style 1 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-fullwidth-4columns.html"
                                  className="nav-link"
                                >
                                  Style 1 (4 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-fullwidth1.html"
                                  className="nav-link"
                                >
                                  Style 2 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-grid-fullwidth2.html"
                                  className="nav-link"
                                >
                                  Style 2 (4 columns)
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="index.html" className="nav-link">
                              Portfolio Masonry
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a
                                  href="portfolio-mas-2col.html"
                                  className="nav-link"
                                >
                                  Style 1 (2 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-mas-3col.html"
                                  className="nav-link"
                                >
                                  Style 1 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-mas-4col.html"
                                  className="nav-link"
                                >
                                  Style 1 (4 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-mas-3col-2.html"
                                  className="nav-link"
                                >
                                  Style 2 (3 columns)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-mas-4col-2.html"
                                  className="nav-link"
                                >
                                  Style 2 (4 columns)
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a href="index.html" className="nav-link">
                              Project details
                            </a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a
                                  href="portfolio-details-1.html"
                                  className="nav-link"
                                >
                                  Style 1
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-details-2.html"
                                  className="nav-link"
                                >
                                  Style 2
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  href="portfolio-details-3.html"
                                  className="nav-link"
                                >
                                  Style 3
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown submenu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="shop-grid.html" className="nav-link">
                            Shop Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="shop-grid-left-sidebar.html" className="nav-link">
                            Shop Grid Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="shop-list.html" className="nav-link">
                            Shop list
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="product-details-1.html" className="nav-link">
                            Product detail
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="shoping-cart.html" className="nav-link">
                            Shopping cart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="checkout.html" className="nav-link">
                            Checkout
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="wishlist.html" className="nav-link">
                            Wishlist
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="blog-grid.html" className="nav-link">
                            Blog Grid
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-grid-two.html" className="nav-link">
                            Blog Grid Two
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-list.html" className="nav-link">
                            Blog List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-right-sidebar.html" className="nav-link">
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-masonry.html" className="nav-link">
                            Blog Masonry
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-masonry-two.html" className="nav-link">
                            Blog Masonry Two
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-masonry-sidebar.html" className="nav-link">
                            Blog Masonry Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="blog-masonry-sidebar-two.html"
                            className="nav-link"
                          >
                            Blog Masonry Sidebar Two
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-single.html" className="nav-link">
                            Blog Single
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-single-two.html" className="nav-link">
                            Blog Single Two
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown submenu mega_menu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Elements
                      </a>
                      <div className="mega_menu_inner">
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a className="nav-link">Elements 01</a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="Accordion.html" className="nav-link">
                                  Accordions
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="button.html" className="nav-link">
                                  Buttons
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="team.html" className="nav-link">
                                  Team
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="integration.html" className="nav-link">
                                  Integration
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="client.html" className="nav-link">
                                  Clients
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="subscribe.html" className="nav-link">
                                  Subscribe
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="call-to-action.html" className="nav-link">
                                  Call to Action
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="tab.html" className="nav-link">
                                  Tab
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Elements 02</a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="testimonial.html" className="nav-link">
                                  Testimonials
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="video.html" className="nav-link">
                                  Video
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="carosuel.html" className="nav-link">
                                  Carosuel
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="google-map.html" className="nav-link">
                                  Google Map
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="contact-form.html" className="nav-link">
                                  Contact Form
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="process.html" className="nav-link">
                                  Process
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="getapp.html" className="nav-link">
                                  Get App
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Elements 03</a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="heading.html" className="nav-link">
                                  Heading
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="blockquote.html" className="nav-link">
                                  Blockquote
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="price.html" className="nav-link">
                                  Pricing Table
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="fun-fact.html" className="nav-link">
                                  Fun Fact
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="coming-soon.html" className="nav-link">
                                  Countdown Timer
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="pagination.html" className="nav-link">
                                  Pagination
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Headers</a>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <a href="header-dark.html" className="nav-link">
                                  Header Dark
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style2.html" className="nav-link">
                                  Header Style 2
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style3.html" className="nav-link">
                                  Header Style 3
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style4.html" className="nav-link">
                                  Header Style 4
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style5.html" className="nav-link">
                                  Header Style 5
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style6.html" className="nav-link">
                                  Header Style 6
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style7.html" className="nav-link">
                                  Header Style 7
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="header-style8.html" className="nav-link">
                                  Header Style 8
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="alter_nav">
                  <ul className="navbar-nav search_cart menu">
                    <li className="nav-item search">
                      <a className="nav-link search-btn" href="javascript:void(0);">
                        <i className="ti-search" />
                      </a>
                    </li>
                    <li className="nav-item shpping-cart dropdown submenu">
                      <a
                        className="cart-btn nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <i className="ti-shopping-cart" />
                        <span className="num">2</span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="cart-single-item clearfix">
                          <div className="cart-img">
                            <img src="img/cart1.jpg" alt="styler" />
                          </div>
                          <div className="cart-content text-left">
                            <p className="cart-title">
                              <a href="#">Pale pink and black buttoned dress</a>
                            </p>
                            <p>
                              <del>$400.00</del> - $350.00
                            </p>
                          </div>
                          <div className="cart-remove">
                            <a href="#" className="action">
                              <span className="ti-close" />
                            </a>
                          </div>
                        </li>
                        <li className="cart-single-item clearfix">
                          <div className="cart-img">
                            <img src="img/cart2.jpg" alt="styler" />
                          </div>
                          <div className="cart-content text-left">
                            <p className="cart-title">
                              <a href="#">Vera bradley lug- gage large duffel</a>
                            </p>
                            <p>$350.00</p>
                          </div>
                          <div className="cart-remove">
                            <a href="#" className="action">
                              <span className="ti-close" />
                            </a>
                          </div>
                        </li>
                        <li className="cart_f">
                          <div className="cart-pricing">
                            <p className="total">
                              Subtotal :
                              <span className="p-total text-end">$358.00</span>
                            </p>
                          </div>
                          <div className="cart-button text-center">
                            <button className="btn btn-cart get_btn pink">
                              View Cart
                            </button>
                            <button className="btn btn-cart get_btn dark">
                              Checkout
                            </button>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <section className="bg-white chat_banner_area">
            <img
              className="p_absoulte cloud"
              data-parallax='{"x": 0, "y": 150}'
              src="img/home-chat/cloud.png"
              alt=""
            />
            <img
              className="p_absoulte left wow fadeInLeft"
              data-wow-delay="0.2s"
              src="img/home-chat/left_leaf.png"
              alt=""
            />
            <img
              className="p_absoulte right wow fadeInRight"
              data-wow-delay="0.3s"
              src="img/home-chat/right_leaf.png"
              alt=""
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="chat_banner_content">
                    <div className="c_tag wow fadeInUp">
                      <img src="img/home-chat/live_chat.png" alt="" /> Live chat
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                      Engage your website visitors using
                      <strong>Live Chat</strong>
                    </h2>
                    <div
                      className="text-center pr_100 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <a href="#" className="chat_btn btn_hover">
                        Live chat for free
                      </a>
                      <span>(No credit card requierd)</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-2">
                  <div className="chat_img">
                    <img
                      className="p_absoulte p_one"
                      src="img/home-chat/panguin_img_one.png"
                      alt=""
                    />
                    <img
                      className="p_absoulte p_two"
                      src="img/home-chat/panguin_img_two.png"
                      alt=""
                    />
                    <img
                      className="p_absoulte p_three"
                      src="img/home-chat/panguin_img_three.png"
                      alt=""
                    />
                    <div className="round one" />
                    <div className="round two" />
                    <div className="round three" />
                    <img
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      src="img/home-chat/Messages.png"
                      alt="chat-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_core_features_area sec_pad">
            <div className="container">
              <div className="hosting_title chat_title text-center">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Core Features
                  <br /> That makes us <span>top notch</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="chat_features_item wow fadeInUp">
                    <div className="round">
                      <div className="round_circle" />
                      <img
                        className="top_img p_absoulte"
                        src="img/home-chat/pluse.png"
                        alt=""
                      />
                      <img src="img/home-chat/chat.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Simlify communications</h4>
                    </a>
                    <p>
                      Tidio lets you get all your live chat, e-mail, and Messenger
                      communication in one panel.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="chat_features_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="round">
                      <div className="round_circle two" />
                      <img
                        className="top_img p_absoulte"
                        src="img/home-chat/triangle.png"
                        alt=""
                      />
                      <img src="img/home-chat/mobile.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Quick Responce</h4>
                    </a>
                    <p>
                      Tidio lets you get all your live chat, e-mail, and Messenger
                      communication in one panel.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="chat_features_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="round">
                      <div className="round_circle three" />
                      <img
                        className="top_img p_absoulte"
                        src="img/home-chat/box.png"
                        alt=""
                      />
                      <img src="img/home-chat/book.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Easy Report</h4>
                    </a>
                    <p>
                      Tidio lets you get all your live chat, e-mail, and Messenger
                      communication in one panel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_features_area">
            <div className="container">
              <div className="row flex-row-reverse align-items-center">
                <div className="col-lg-6 offset-lg-1">
                  <div className="chat_features_img chat_features_img_one">
                    <img
                      className="p_absoulte dot_bg"
                      src="img/home-chat/dot.png"
                      alt=""
                    />
                    <img
                      className="chat_one"
                      data-parallax='{"x": 0, "y": 80}'
                      src="img/home-chat/chat_02.png"
                      alt=""
                    />
                    <img
                      className="p_absoulte chat_two"
                      data-parallax='{"x": 0, "y": -80}'
                      src="img/home-chat/chat_01.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="chat_features_content pr_70">
                    <img src="img/home-chat/chat_icon.png" alt="" />
                    <h2>
                      <span>Move deals</span> through your funnel – fast
                    </h2>
                    <p>
                      Real-time tools and rich insights mean our support solution
                      amplifies your team for an unbeatable experience.
                    </p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_features_area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="chat_features_img chat_features_img_two">
                    <img
                      className="p_absoulte dot_bg"
                      src="img/home-chat/dot.png"
                      alt=""
                    />
                    <img
                      className="chat_one"
                      data-parallax='{"x": 20, "y": -40}'
                      src="img/home-chat/skyp_1.png"
                      alt=""
                    />
                    <img
                      data-parallax='{"x": 0, "y": 40}'
                      className="p_absoulte chat_two"
                      src="img/home-chat/skyp_2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="chat_features_content pl_70">
                    <img src="img/home-chat/video_icon.png" alt="" />
                    <h2>
                      <span>First ever</span> Video Calling Support
                    </h2>
                    <p>
                      Real-time tools and rich insights mean our support solution
                      amplifies your team for an unbeatable experience.
                    </p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_features_area chat_features_area_three">
            <div className="container">
              <div className="row flex-row-reverse align-items-center">
                <div className="col-lg-6 offset-lg-1">
                  <div className="chat_features_img chat_features_img_three">
                    <img
                      className="p_absoulte dot_bg"
                      src="img/home-chat/dot.png"
                      alt=""
                    />
                    <img
                      className="p_absoulte chat_two"
                      src="img/home-chat/support_dashboard.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="chat_features_content pr_60">
                    <img src="img/home-chat/dashboard.png" alt="" />
                    <h2>
                      Dedicated <span>Dashboard Support</span>
                    </h2>
                    <p>
                      Real-time tools and rich insights mean our support solution
                      amplifies your team for an unbeatable experience.
                    </p>
                    <a href="#">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white security_integration_area chat_integration_area">
            <div className="container">
              <div className="border-bottom" />
              <div className="chat_title text-center">
                <h2 className="wow fadeInUp">
                  <span>Integrations.</span> Discover even more possibilities.
                </h2>
                <p>
                  Explore 50+ integrations that make your day-to-day workflow more
                  efficient and familiar. Our extensive developer tools might also
                  strike your fancy.
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a href="#" className="s_integration_item wow fadeInLeft">
                    <img src="img/new-home/kissmetrics.png" alt="" />
                    <h5>KISSmetrics</h5>
                  </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#"
                    className="s_integration_item wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <img src="img/new-home/metorik.png" alt="" />
                    <h5>Metorik</h5>
                  </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#"
                    className="s_integration_item wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    <img src="img/new-home/nicereply-1.png" alt="" />
                    <h5>Nicereply</h5>
                  </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#"
                    className="s_integration_item wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <img src="img/new-home/update.png" alt="" />
                    <h5>Software Updater</h5>
                  </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#"
                    className="s_integration_item wow fadeInLeft"
                    data-wow-delay="0.8s"
                  >
                    <img src="img/new-home/campfire.png" alt="" />
                    <h5>Campfire</h5>
                  </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <a
                    href="#"
                    className="s_integration_item wow fadeInLeft"
                    data-wow-delay="0.8s"
                  >
                    <img src="img/new-home/webhooks.png" alt="" />
                    <h5>Webhooks</h5>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_clients_area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 p-0 chat_clients_feedback">
                  <div className="clients_feedback_item flex-row-reverse">
                    <div className="feedback_body">
                      <p>
                        Tidio has given our clients a quick and easy way to send over
                        thoughts and questions without delay or wait time! No second
                        guessing – just asked and answered quickly in order to make
                        their purchasing decisions easier!
                      </p>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h3 className="f_name">John Doe</h3>
                      <a href="#">hello.com</a>
                    </div>
                    <img src="img/home-chat/john.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 p-0 chat_clients_feedback feedback_two">
                  <div className="clients_feedback_item">
                    <div className="feedback_body">
                      <p>
                        Tidio has given our clients a quick and easy way to send over
                        thoughts and questions without delay or wait time! No second
                        guessing – just asked and answered quickly in order to make
                        their purchasing decisions easier!
                      </p>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h3 className="f_name">Richard Tea</h3>
                      <a href="#">hello.com</a>
                    </div>
                    <img src="img/home-chat/richard.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white chat_get_started_area">
            <div className="container">
              <div className="chat_get_started_content text-center">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                  Get started with us
                </h2>
                <p>
                  A better experience for your customers, fewer headaches for your
                  team. You'll be set up in minutes.
                </p>
                <a href="#" className="chat_btn btn_hover">
                  Get Started
                </a>
              </div>
            </div>
          </section>
          <footer className="footer_area h_footer_dark pos_footer_area h_footer_track">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="f_widget dark_widget company_widget">
                    <a href="index.html" className="f-logo">
                      <img src="img/logo2.png" alt="" />
                    </a>
                    <p>
                      © 2019 SaasLand, LLC. All rights reserved. Proudly made in NY
                    </p>
                    <div className="f_social_icon">
                      <a href="#" className="ti-facebook" />
                      <a href="#" className="ti-twitter-alt" />
                      <a href="#" className="ti-vimeo-alt" />
                      <a href="#" className="ti-pinterest" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget dark_widget about-widget pl_70">
                    <h3 className="f-title f_500 t_color f_size_18 mb_40">
                      Download
                    </h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">Android App</a>
                      </li>
                      <li>
                        <a href="#">ios App</a>
                      </li>
                      <li>
                        <a href="#">Desktop</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Partners</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget dark_widget about-widget pl_20">
                    <h3 className="f-title f_500 t_color f_size_18 mb_40">Help</h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Term &amp; conditions</a>
                      </li>
                      <li>
                        <a href="#">Reporting</a>
                      </li>
                      <li>
                        <a href="#">Block Storage</a>
                      </li>
                      <li>
                        <a href="#">Tools &amp; Integrations</a>
                      </li>
                      <li>
                        <a href="#">API</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="f_widget dark_widget about-widget pl_20">
                    <h3 className="f-title f_500 t_color f_size_18 mb_40">Contact</h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Sales</a>
                      </li>
                      <li>
                        <a href="#">Report Abuse</a>
                      </li>
                      <li>
                        <a href="#">System Status</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <Script src="js/jquery-3.6.0.min.js"></Script>
    <Script src="js/popper.min.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="vendors/wow/wow.min.js"></Script>
    <Script src="vendors/sckroller/jquery.parallax-scroll.js"></Script>
    <Script src="vendors/owl-carousel/owl.carousel.min.js"></Script>
    <Script src="vendors/imagesloaded/imagesloaded.pkgd.min.js"></Script>
    <Script src="vendors/isotope/isotope-min.js"></Script>
    <Script src="vendors/magnify-pop/jquery.magnific-popup.min.js"></Script>
    <Script src="vendors/counterup/jquery.counterup.min.js"></Script>
    <Script src="vendors/counterup/jquery.waypoints.min.js"></Script>
    <Script src="vendors/counterup/appear.js"></Script>
    <Script src="vendors/circle-progress/circle-progress.js"></Script>
    <Script src="vendors/stellar/jquery.stellar.js"></Script>
    <Script src="vendors/scroll/jquery.mCustomScrollbar.concat.min.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="vendors/red-countdown/knob.js"></Script>
    <Script src="vendors/red-countdown/throttle.js"></Script>
    <Script src="vendors/red-countdown/moment.js"></Script>
    <Script src="vendors/red-countdown/redcountdown.js"></Script>
    <Script src="vendors/red-countdown/red-countdown-settings.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="js/main.js"></Script>
        </div>

      </>
    </>
  )
}
