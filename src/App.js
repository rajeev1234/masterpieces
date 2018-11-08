import React, { Component } from "react";
import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.css";

function validate(username, email) {
  const errors = [];

  if (username.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  return errors;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    disabled: false,
    errors: []
  };

  handleSubmit(event) {
    // <Link to="/App" />;
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://127.0.0.1:8000/ques/", {
      method: "POST",
      body: data
    });
    const username = ReactDOM.findDOMNode(this._nameInput).value;
    const email = ReactDOM.findDOMNode(this._emailInput).value;
    console.log(username, email);
    // const password = ReactDOM.findDOMNode(this._passwordInput).value;

    const errors = validate(username, email);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    window.location.reload();
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="App">
        <title>Newsletter Preferences</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:title" content="Your Masterpieces" />

        <link
          rel="shortcut icon"
          href="https://yourmasterpieces.com/images/favicon.png"
          type="image/x-icon"
        />

        <link
          rel="stylesheet"
          id="bootstrap-css"
          href="https://yourmasterpieces.com/layout/assets/plugins/bootstrap/css/bootstrap.min.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="owl-css"
          href="https://yourmasterpieces.com/layout/assets/js/plugins/owl-carousel/owl.carousel.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-style-css"
          href="https://yourmasterpieces.com/layout/assets/css/style.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-dynamic-css"
          href="https://yourmasterpieces.com/layout/assets/css/dynamic.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-fonts-css"
          href="https://fonts.googleapis.com/css?family=PT+Serif%7CMontserrat&#038;subset=latin%2Clatin-ext"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="js_composer_front-css"
          href="https://yourmasterpieces.com/layout/assets/plugins/js_composer/js_composer.min.css?ver=4.12.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="bfa-font-awesome-css"
          href="//cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css?ver=4.7.0"
          type="text/css"
          media="all"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" />

        <script type="text/javascript" src="../layout/config.js" />

        <div className="ws-topbar">
          <div className="pull-left">
            <div className="ws-topbar-message hidden-xs">
              {/* <p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.codon.masterpiece&amp;hl=en"
                    class="text_link"
                  >
                    Android App{" "}
                  </a>{" "}
                  <i styles="color:#333">......</i>{" "}
                  <a
                    href="https://itunes.apple.com/in/app/masterpiece-platform-for-non/id1089890769?mt=8"
                    class="text_link"
                  >
                    {" "}
                    Ios App
                  </a>
                </p> */}
            </div>
          </div>

          <div className="pull-right">
            {/*         
        <!-- Account -->

                <!--NEW DROPDOWN MENU END --> */}

            <ul id="menu-nav-style-2" className="nav navbar-nav new-nav">
              <li className="ws-shop-cart">
                <a
                  href="https://yourmasterpieces.com/auth/login.php"
                  className="btn cart-top-btn btn-sm"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <header className="ws-header-static">
          {/* <!-- Navbar --> */}
          <nav className="navbar ws-navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                  id="menushow"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              {/* <!-- Logo --> */}
              <div className="ws-logo ws-center">
                <a href="https://yourmasterpieces.com">
                  <img
                    src="https://yourmasterpieces.com/images/masterpiece_logo.png"
                    alt="masterpiece"
                    styles="width:165px"
                  />
                </a>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <div className="menu-left-container">
                  <ul id="menu-left" className="nav navbar-nav navbar-left">
                    <li
                      id="menu-item-653"
                      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-653 active"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Home"
                        href="https://yourmasterpieces.com"
                        styles="background: none"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      id="menu-item-654"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-654"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Shop"
                        href="https://yourmasterpieces.com/Paintings/paintings.php"
                      >
                        Paintings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-right-container">
                  <ul id="menu-right" className="nav navbar-nav navbar-right">
                    <li
                      id="menu-item-2484"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2484"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Artist"
                        href="https://yourmasterpieces.com/Artist/index.php"
                      >
                        Artists
                      </a>
                    </li>
                    <li
                      id="menu-item-728"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-728"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Contact Us"
                        href="https://yourmasterpieces.com/contact.php"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {
          <div className="container-fluid" styles="background: #e7e7e7">
            <div className="container ws-page-container">
              {/* <!-- Row Start --> */}
              <div className="row">
                <div className="col-sm-12">
                  <article
                    id="post-88"
                    className="post-88 page type-page status-publish hentry"
                  >
                    <div className="woocommerce">
                      <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                          <div className="text-center">
                            <h2>What would you love for us to share?</h2>
                            <div className="ws-separator" />
                            <p>
                              Tell us what kind of content is meaningful to you
                              and we will create more of what you like.
                            </p>
                            <br />
                          </div>
                        </div>
                        <div
                          className="col-sm-6 col-sm-offset-3 card"
                          styles="background: white"
                        >
                          <div
                            className="col-md-12 alert alert-success fade in alert-dismissible text-center"
                            id="successMessage"
                          >
                            Thank you for sharing your valuable feedback.
                          </div>

                          <form
                            // align="left"
                            // method="POST"
                            // class="lost_reset_password"
                            // id="NewsletterForm"
                            // ref={form => (this.formEl = form)}
                            onSubmit={this.handleSubmit}
                            // noValidate
                          >
                            <p className="main-form-text" align="left">
                              <label>
                                Choose the topics most appealing to you
                              </label>
                            </p>
                            <div className="clear" />
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label>
                                  <input
                                    name="technique"
                                    type="checkbox"
                                    id="technique"
                                    // value={this.state.value}
                                    // disabled={this.state.disabled}
                                  />
                                  Art Styles and techniques
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label htmlFor="perfectArt" className="inline">
                                  <input
                                    name="perfectArt"
                                    type="checkbox"
                                    id="perfectArt"
                                    // value="0"
                                  />
                                  Tips to perfect your art
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label htmlFor="latestNews" className="inline">
                                  <input
                                    name="latestNews"
                                    type="checkbox"
                                    id="latestNews"
                                    // value="0"
                                  />
                                  Latest news from the art world
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label htmlFor="scholarship" className="inline">
                                  <input
                                    name="scholarship"
                                    type="checkbox"
                                    id="scholarship"
                                    // value="0"
                                  />
                                  List of art grants and scholarships
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label
                                  htmlFor="famous_artist"
                                  className="inline"
                                >
                                  <input
                                    name="famous_artist"
                                    type="checkbox"
                                    id="famous_artist"
                                    // value="0"
                                  />
                                  Life story of famous artists
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label
                                  htmlFor="artist_stories"
                                  className="inline"
                                >
                                  <input
                                    name="artist_stories"
                                    type="checkbox"
                                    id="artist_stories"
                                    // value="0"
                                  />
                                  Artist Stories from Masterpieces
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label htmlFor="artforms" className="inline">
                                  <input
                                    name="artforms"
                                    type="checkbox"
                                    id="artforms"
                                    value="0"
                                  />
                                  Artforms from around the world
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label
                                  htmlFor="art_collection"
                                  className="inline"
                                >
                                  <input
                                    name="art_collection"
                                    type="checkbox"
                                    id="art_collection"
                                    value="0"
                                  />
                                  Building your art collection
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label
                                  htmlFor="choose_art_wall"
                                  className="inline"
                                >
                                  <input
                                    name="choose_art_wall"
                                    type="checkbox"
                                    id="choose_art_wall"
                                    value="0"
                                  />
                                  Choosing the perfect piece of art for your
                                  wall
                                </label>
                              </div>
                            </div>
                            <div className="form-group" align="left">
                              <div className="checkbox">
                                <label htmlFor="artist_sign" className="inline">
                                  <input
                                    name="artist_sign"
                                    type="checkbox"
                                    id="artist_sign"
                                    value="0"
                                  />
                                  Works of famous artists and their significance
                                </label>
                              </div>
                            </div>
                            <p align="left">
                              <label htmlFor="username">Name* </label>

                              <input
                                ref={nameInput => (this._nameInput = nameInput)}
                                className="input-text"
                                type="text"
                                name="username"
                                id="username"
                                // defaultValue={this.state.username}
                                // value={this.state.value}
                                // disabled={this.state.disabled}
                              />
                            </p>

                            <p align="left">
                              <label htmlFor="email">Email*</label>
                              <input
                                ref={emailInput =>
                                  (this._emailInput = emailInput)
                                }
                                className="input-text"
                                type="email"
                                name="email"
                                id="email"
                                // defaultValue={this.state.email}
                                // value={this.state.value}
                                // disabled={this.state.disabled}
                              />
                            </p>
                            <div className="padding-top-x20" />
                            {errors.map(error => (
                              <p
                                className="description"
                                align="left"
                                key={error}
                              >
                                <em>Error: &nbsp;&nbsp; </em>
                                {error}
                              </p>
                            ))}

                            <p>
                              <input
                                // disabled={isDisabled}
                                width="100%"
                                type="submit"
                                name="submit"
                                className="btn ws-btn-fullwidth"
                                id="Newsletter_feedback"
                                value="Submit"
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        }

        <footer className="ws-footer">
          <div className="container">
            <div className="row">
              {/* <!-- About --> */}
              <div className="col-sm-6 ws-footer-col">
                <div id="text-3" className="bar widget-space widget_text">
                  <div className="sidebar-title">
                    <h3>About Us</h3>
                    {/* <div class="ws-footer-separator" /> */}
                  </div>
                  <div className="ws-footer-separator" />
                  <div className="ws-footer-about">
                    <p>
                      We are a dedicated team of developers, artists, designers,
                      and marketers with a vision to help non-digital artists
                      reach a global audience, both digitally and tangibility.We
                      aspire to promote artists’ stories and emotions expressed
                      through their handmade art. As technologists, our mission
                      is to help these artists breach all barriers in today’s
                      digital world helping them reach the right audience on a
                      global scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Support Links --> */}
              <div className="col-sm-2 ws-footer-col" />

              <div className="col-sm-2 ws-footer-col">
                <div
                  id="nav_menu-4"
                  className="bar widget-space widget_nav_menu"
                >
                  <div className="sidebar-title">
                    <h3>Links</h3>
                  </div>
                  <div className="ws-footer-separator" />
                  <div className="menu-company-container">
                    <ul id="menu-company" className="menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-668">
                        <a href="https://yourmasterpieces.com">Home</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-664">
                        <a href="https://yourmasterpieces.com/support.php">
                          Support
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-665">
                        <a href="https://yourmasterpieces.com/policy.php">
                          Policy
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-666">
                        <a href="https://yourmasterpieces.com/terms&conditions.php">
                          Terms &amp; Conditions
                        </a>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-666">
                        <a href="https://yourmasterpieces.com/faq.php">FAQ's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="ws-footer-bar">
          <div className="container">
            {/* <!-- Copyright --> */}
            <div className="pull-left">
              <p>Masterpieces © 2018 All rights reserved.</p>
            </div>

            {/* <!-- Payments --> */}
            <div className="pull-right">
              <ul className="ws-footer-payments">
                <li>
                  <i className="fa fa-cc-visa fa-lg" />
                </li>
                <li>
                  <i className="fa fa-cc-paypal fa-lg" />
                </li>
                <li>
                  <i className="fa fa-cc-mastercard fa-lg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* </header> */}
        {/* </head> */}
      </div>
    );
  }
}

export default App;
