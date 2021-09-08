import { createMuiTheme } from '@material-ui/core/styles';


const arcPurple = "#D9C2CF";
const arcBlue = "#347CE2";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
    palette :{
        common:{
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            purple: `${arcPurple}`
        },
        
         primary:{
                main:`${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
        },
         typography: {
             tab : {
                fontFamily: "Raleway",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "1rem"  
             },
             h2: {
                fontFamily: "Raleway",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: arcBlue,
                lineHeight: 1.5
              
              },
              h3: {
                fontFamily: "Pacifico",
                fontSize: "2.5rem",
                color: arcBlue
              },
              h4: {
                fontFamily: "Raleway",
                fontSize: "1.75rem",
                color: arcBlue,
                fontWeight: 700
              },
              subtitle1: {
                fontSize: "1.25rem",
                fontWeight:400,
                color: arcGrey
              },
              subtitle2: {
                color: "white",
                fontSize: "1.25rem",
                fontWeight:300
                
              },
              body1 : {
                fontSize: "1.5em",
                color: arcGrey,
                fontWeight: 300
              },
              body2 : {
                fontSize: "2em",
                color: "black",
                fontWeight: 500,
                fontFamily: "Pacifico"
              }, 
              learnbutton: {
                borderColor: "white",
                color: "white",
                borderWidth: 2,
                textTransform: "none",
                borderRadius: 50,
                fontFamily: "Roboto",
                fontWeight: "bold",
            },
               estimate : {
                 fontFamily: "Pacifico",
                 fontSize: "1rem",
                 textTransform: "none",
                 color:"white"
           }  

         }
        
    
})