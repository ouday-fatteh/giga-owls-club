import './Navbar.css';
import { useState ,useEffect} from 'react';
import { useMetaMask } from "metamask-react";
import EthBalance from '../../utils/scripts/useEthBalance';
import ethIcon from './eth.svg';
import { Outlet, Link } from "react-router-dom";
const menuItems = [
    {Name : "Explore", Linkto:"/explore",Id:1},
    {Name : "Suggest",Linkto:"/suggest",Id:2},
    {Name : "Contact",Linkto:"/contact",Id:3},
    {Name : "About us",Linkto:"/about",Id:4},
];



const Navbar = () => {
    const [innerText,setInnerText] = useState("");
    const { status, connect, account } = useMetaMask();
    const [isDisabled,setIsDisabled] = useState (false);
    const [isDisplayed,setIsDisplayed] = useState("none");
    const [isDispEth,setIsDispEth] = useState("none");
    const [isColored,setIsColored] = useState("red");
    const balance = EthBalance(account)
    
    useEffect(() => {
        
        if (status === "connected"){
            const slicedfirst = account.slice(0,4).concat(".....");
            const slicedlast = account.slice(-4);
            const accountFormatted = slicedfirst.concat(slicedlast);
            setInnerText(accountFormatted);
            setIsDisabled(true);
            setIsDisplayed("block");
            setIsColored("greenyellow");
            setIsDispEth("block")
            
        };
        if (status === "initializing") {setInnerText("Initialising ...");}
        if (status === "unavailable"){setInnerText("Install Metamask");}
        if (status === "notConnected"){setInnerText ("Connect to MetaMask");
        setIsDisabled(false);
        setIsDisplayed("block");
        setIsColored("red");
    }
        if (status === "connecting") {setInnerText("connecting");};
        return null;
      }, [status, account]);
    
    const updateStatus = () => {
    if (status === "connected"){
    setInnerText(account.slice(0,4).concat(".....").concat(account.slice(-4)));
 
};
    if (status === "notConnected"){connect()};
    if (status === "unavailable"){window.open('https://metamask.io/download/', '_blank');}
    return null;
    }

 return (
       <div className="nav-main">
           <div className="logo"><Link style={{textDecoration:"none",color:"white"}} to="/">GigaOwlsClub</Link></div>
           <div className="menu"><ul>
               {menuItems.map( (item) => {
                   return (<li key={item.Id}>
                      <Link style={{textDecoration:"none",color:"white",fontFamily: "Montserrat ,sans-serif"}} to={item.Linkto}>{item.Name}</Link> 
                       </li>)
               } )}
           </ul></div>
           
           <button id="connectWallet" disabled={isDisabled} onClick={() => {updateStatus();}} className="connect-button">
               {innerText}
           </button>
           <div className='connected' style={{display:isDisplayed,backgroundColor:isColored}}></div>
           <div className='EthBalance' style={{display:isDispEth}}><img id="img1" style={{width:20,height:20}} alt="Ethereum Icon"src={ethIcon}></img> {balance === 0 ? "0.00" : balance}</div>
           <Outlet />
       </div>

    )
}

export default Navbar;