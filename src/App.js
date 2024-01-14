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
      seColor('shadow shadow-blue-500 bg-gradient-to-b from-blue-500 to-blue-600')
    } else if (height >= 820 && height < 950) {
      seColor('shadow shadow-blue-600 bg-gradient-to-b from-blue-600 to-blue-700')
    } else if (height >= 950 && height < 1090) {
      seColor('shadow shadow-blue-700 bg-gradient-to-b from-blue-700 to-blue-800')
    } else if (height >= 1090) {
      seColor('shadow shadow-blue-800 bg-gradient-to-b from-blue-800 to-blue-900')
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
        backGround: "bg-gradient-to-b from-blue-500 to-blue-600",
        label: "Hi, my name is Nicola Solazzo",
        description: "I'm a Full Stack Developer, I'm 47 years old and I live in Italy. I'm a very motivated person and I love",
      }
    },
    {
      name: About,
      id: "about",
      props: {
        backGround: "bg-gradient-to-b from-blue-600 to-blue-700",
        label: "About me",
        description: "Lorem ipsum dolor sit amet vehicula integer tempor eros iaculis vel posuere libero ultrices nascetur conubia sodales consectetur hac egestas ligula letius vivamus suspendisse orci molestie urna nisl amet aptent id fringilla cras enim dictumst magnis finibus lorem tristique gravida parturient leo volutpat malesuada consectetuer pellentesque eleifend potenti mattis velit adipiscing efficitur hendrerit si sollicitudin natoque dolor at luctus congue blandit viverra faucibus ex himenaeos ut ac nunc felis et arcu rutrum euismod ultricies habitant pharetra nisi montes platea interdum neque duis quisque cubilia vulputate fames accumsan bibendum odio sociosqu maecenas netus maximus elementum sem nibh nec turpis habitasse"
      }
    },
    {
      name: Portfolio,
      id: "portfolio",
      props: {
        backGround: "bg-gradient-to-b from-blue-700 to-blue-800",
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
        backGround: "bg-gradient-to-b from-blue-800 to-blue-900",
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
