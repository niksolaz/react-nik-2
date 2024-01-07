import React from 'react';
import Header from './components/Header/index'
import Scrollup from './components/Scrollup/index'
import Main from './components/Main/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'


function App() {
  const menu = [
    {
      name: "Main",
      link: "#main"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Portfolio",
      link: "#portfolio"
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ];

  const structurePage = [
    {
      name: Main,
      id: "main",
      props: {
        label: "Hi, my name is Nicola Solazzo",
      }
    },
    {
      name: About,
      id: "about",
      props: {
        label: "About me",
        description: "I'm a Full Stack Developer, I'm 47 years old and I live in Italy. I'm a very motivated person and I love"
      }
    },
    {
      name: Portfolio,
      id: "portfolio",
      props: {
        lists: [
          {
            title: "Portfolio 1",
            description: "This is my portfolio 1",
            link: "#"
          },
          {
            title: "Portfolio 2",
            description: "This is my portfolio 2",
            link: "#"
          },
          {
            title: "Portfolio 3",
            description: "This is my portfolio 3",
            link: "#"
          },
        ]
      }
    },
    {
      name: Contact,
      id: "contact",
      props: {}
    }
  ]
  return (
    <div className="App">
      <div id="top">
        <Header menu={menu} />
      </div>
      <Scrollup />
      {structurePage.map((item, index) => (
          <div key={index} id={item.id}>
            {
              <item.name 
              label={item.props.label} 
              description={item.props.description} 
              lists={item.props.lists} 
              />
            }
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default App;
