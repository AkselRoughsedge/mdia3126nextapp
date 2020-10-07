import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';

export default function Home() {
  const [contentColor, setContentColor] = useState(false);
  const [backgroundImg, setbackgroundImg] = useState(false);
  const [contentChildren, setContentChildren] = useState(false);


  const HandleMenu = (str) =>{
    //capture what happened in the menu and change the page state based on it
    if (str === "bg"){
      setContentColor("#DCA877");
    }
    else if (str === "img"){
      setbackgroundImg("url(/jojo.png)");
    }
    else if (str === "help"){
      setContentChildren("Hi! I'm here to help you.");
    }
  }

  return <div className="home" >
    <div className="content">
      <Content children={contentChildren} bgcolor={contentColor} bgimg={backgroundImg}>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
}
