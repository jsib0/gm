import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';




class NavBar extends Component {
    constructor(props){
      super(props)

      this.state = {
        menuwrapper: "menu-wrapper"
      }

      this.getMenu = this.getMenu.bind(this)
    }

    conponentDidMount() {
        // navbar stick to top
        let navbar =  document.getElementById("navbar-container");
        console.log(navbar)
        let sticky = navbar.offsetTop;

        const stickyNavbar = () => {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          }
          else {
            navbar.classList.remove("sticky");
          }
        }
        window.onscroll =  function() {stickyNavbar()};
    }


  getMenu() {
    let menu = this.state.menuwrapper;
    if(menu === "menu-wrapper") {
      this.setState({menuwrapper: "menu-wrapper responsive"});
    }
    else {
      this.setState({menuwrapper: "menu-wrapper"});
    }

  }


  render() {
    return(
      
      <div id="navbar-container" className="navbar-container">
      
        <div className="navbar-inner">
          <div id="logo">
          <img src="https://img.icons8.com/windows/64/000000/kangaroo.png" alt="bucketroo logo"></img>
          </div>
          <div id="menu_wrapper" className={this.state.menuwrapper}>
            <nav>
                <ul id="main_ul_menu">
                  <li><a  href="#how_it_works" className="active" >How It Works</a></li>
                   <li>|</li>
                  <li><Link to={'/HowItWorks'}>Pricing</Link></li>
                </ul>
            </nav>
          </div>
        </div>
      </div>

    )
  }

}


export default NavBar;