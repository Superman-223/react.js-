//import styles from "./banner.module.css"; => {style.logo}
import { logo } from "./banner.module.css";


const subtitileStyle ={
  fontStyle : "italic"
};

const Banner =({headerText})=>{
return (
    <header>
        <div>
          Logo Test
        </div>
        <div className={logo} style = {{fontStyle: "italic"}}>
        {headerText} 
        </div>
    </header>
);
};

export default Banner;