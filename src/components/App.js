import React, {useState} from 'react'
import Header from './ui/Header';
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter , Route ,Switch} from "react-router-dom";
import LandingPage from "./LandingPage";
import Skills from "./ui/Skills";
import About from "./ui/About";
import Portfolio from "./ui/Portfolio";
import Contact from "./ui/Contact";






function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
             <BrowserRouter>
                <Header  value={value} setValue={setValue} selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
                <Switch>
                   <Route exact path="/" render={(props) =>     
                     <LandingPage {...props}   setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
                   <Route exact path="/about" render={(props) =>     
                     <About {...props}   setValue={setValue} setSelectedIndex={setSelectedIndex} />} /> 
                   <Route exact path="/portfolio" render={(props) =>     
                     <Portfolio {...props}   setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
                   <Route exact path="/skills" render={(props) =>     
                     <Skills {...props}   setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
                   <Route exact path="/contact" render={(props) =>     
                     <Contact {...props}   setValue={setValue} setSelectedIndex={setSelectedIndex} />} />

                </Switch>
                
             </BrowserRouter>
    </ThemeProvider>  
 
  );
}

export default App;
