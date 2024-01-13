import React, { useState, useEffect } from 'react';
import Header from './components/Header/index'
import Scrollup from './components/Scrollup/index'
import Main from './components/Main/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'
import { useHeight } from './assets/js/useHeight';


function App() {
  const [color, seColor] = useState("bg-green-100");
  const height = useHeight(695);
  useEffect(() => {
    if (height > 696 && height < 820) {
      seColor('shadow shadow-cyan-500 bg-gradient-to-b from-cyan-500 to-blue-500')
    } else if (height >= 820 && height < 950) {
      seColor('shadow shadow-blue-500 bg-gradient-to-b from-blue-500 to-indigo-500')
    } else if (height >= 950 && height < 1090) {
      seColor('shadow shadow-indigo-500 bg-gradient-to-b from-indigo-500 to-fuchsia-500')
    } else if (height >= 1090) {
      seColor('shadow shadow-fuchsia-500 bg-gradient-to-b from-fuchsia-500 to-pink-500')
    } else {
      seColor('shadow shadow-cyan-500')
    }
  }, [height]);
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
        backGround: "bg-gradient-to-b from-cyan-500 to-blue-500",
        label: "Hi, my name is Nicola Solazzo",
        description: "I'm a Full Stack Developer, I'm 47 years old and I live in Italy. I'm a very motivated person and I love",
      }
    },
    {
      name: About,
      id: "about",
      props: {
        backGround: "bg-gradient-to-b from-blue-500 to-indigo-500",
        label: "About me",
        description: "I'm a Full Stack Developer, I'm 47 years old and I live in Italy. I'm a very motivated person and I love"
      }
    },
    {
      name: Portfolio,
      id: "portfolio",
      props: {
        backGround: "bg-gradient-to-b from-indigo-500 to-fuchsia-500",
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
      props: {
        backGround: "bg-gradient-to-b from-fuchsia-500 to-pink-500",
      }
    }
  ]
  return (
    <div className="App">
      <div id="top">
        <Header menu={menu} />
      </div>
      <Scrollup color={color}/>
      <div className="min-h-screen">
      {structurePage.map((item, index) => (
          <div key={index} id={item.id}>
            {
              <item.name 
              backGround={item.props.backGround}
              label={item.props.label} 
              description={item.props.description} 
              lists={item.props.lists} 
              icon={item.props.icon}
              />
            }
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
