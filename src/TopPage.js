import React, { Component } from 'react';  
import ContractInfo from './ContractInfo.js';
import UserInfo from './UserInfo.js';
import getBlockchain from './ethereum.js';
import Invest from './Invest.js'; 
import back from "./assets/bg2.jpg" 
import logo from "./assets/logo2.png" 
import twitter from "./assets/twitter.png" 
import telegram from "./assets/telegram.png" 
import instagram from "./assets/instagram.png" 
import ReferralLink from './ReferralLink.js'; 
import "./css/style.css";


// const tokenAddress = "0x9F8ECC89385C353EA0A1C70359B112C31Bab91dd"; 
// const usdtAddress = "0x64E0Ff29Fcd9813CAc3dc6ac67a10B98a155C2f8";
const contractAddress = "0x1985A54f26624B61c9855e316bDE5366A6403acf";
// const url = "https://biyondinfinity.farm";

class TopPage extends Component { 

   componentDidMount = async() => { 
        await this.loadBlockChainData();  
   }  

   loadBlockChainData = async () => {

       let { tokenInstance, currentAcc,  contractInstance } = await getBlockchain();
       this.setState({currentAcc});
       
       let symbol  = await tokenInstance.symbol() ;
       this.setState({ symbol });

       let tokenDecimals  = await tokenInstance.decimals() ;
       this.setState({ tokenDecimals : Number(tokenDecimals) });

       let tokenBal  = await tokenInstance.balanceOf(currentAcc) ;
       this.setState({ tokenBal : (Number(tokenBal)/10**(this.state.tokenDecimals)) }); 
       
       let contractRTBal  = await tokenInstance.balanceOf(contractAddress) ;
       this.setState({ contractRTBal : (Number(contractRTBal)/10**(this.state.tokenDecimals)) }); 
       
       // Contract Instance

       let ownerAddress  = await contractInstance.owner() ;
       this.setState({ ownerAddress });
//       console.log('owner ' + ownerAddress); 

       let ContractBalance  = await contractInstance.ContractBalance() ;
       this.setState({ ContractBalance: Number(ContractBalance)/10**6 });

       let total_claimed  = await contractInstance.total_claimed() ;
       this.setState({ total_claimed: Number(total_claimed)/10**6 });

       let total_users  = await contractInstance.total_users() ;
       this.setState({ total_users: Number(total_users) });
 

        if (this.props.refLinkid) {
            this.setState({ refid: this.props.refLinkid });

        } else {
            this.setState({ refid: this.state.ownerAddress });
        }
      //  console.log('refid- '+this.state.refid); 

       let userInfo = await contractInstance.users(this.state.currentAcc);
       this.setState({ upline : userInfo.upline });
       this.setState({ claimed : userInfo.claimed  });
       this.setState({ referrals : Number(userInfo.referrals)  });  
 
   }

   constructor(props) {
    super(props)

    this.state = {
         symbol :'',

        } 
    }

   render() {                   
    const backStyle = {
        backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont", height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundSize: "cover"
    };
    return (
        <div style={backStyle } >
                <div style={{ textAlign: "center"  , marginTop:"20px" }}>
                    <img src={logo} alt=""  width="120" />  
                </div>
                <div style={{ textAlign: "center", marginTop:"50px" }}>
                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2668BAbeAB11780c516B1d3aD02011668AFF8aa0" style={{ textAlign: "center", width:"100%" }} className='btn-grad'> Trade on PancakeSwap </a> 
                </div>

                <div style={{ textAlign: "center", marginTop:"50px" }}>
                    <a href="https://www.xt.com/trade/prm_usdt" style={{ textAlign: "center", width:"100%" }} className='btn-grad'> Trade on XT.com </a> 
                </div>
                <div style={{ textAlign: "center", marginTop:"50px" }}>
                     <p style={{ color: "#87CEEB", fontSize: "18px"  }}>Follow our Socials and Stay connected</p>
                </div>
                <div style={{ textAlign: "center", marginTop:"20px" }}>
                    <a href="https://twitter.com/PRMCoin"><img src={twitter} style={{ paddingLeft:"20px"}} alt="" width="60" /> 
                    </a> 
                    <a href="https://t.me/OfficialPRM"><img src={telegram} style={{ paddingLeft:"20px"}} alt="" width="60" /> 
                    </a> 
                        <a href="https://www.instagram.com/primalnetworkofficial/?hl=en"><img src={instagram} style={{ paddingLeft:"20px"}} alt="" width="60" /> 
                    </a> 
                    <a href="https://t.me/PRMOfficial"><img src={telegram} style={{ paddingLeft:"20px"}} alt="" width="60" /> 
                    </a> 
                </div>
                
                {
                    this.state.claimed === false ?
                    
                <Invest 
                    
                    refid = {this.state.refid}
                /> :
                null
                    
                }
                 
                <ContractInfo 
                    ContractBalance = {this.state.ContractBalance}  
                    total_users = {this.state.total_users}  
                    total_claimed = {this.state.total_claimed}   
                />           
                <UserInfo 
                    upline =        {this.state.upline}  
                    claimed =  {this.state.claimed }
                    referrals  = {this.state.referrals } 
                /> 
                {
                    this.state.claimed === true ?
                    
                <ReferralLink
                    currentAcc = {this.state.currentAcc}
                />:
                null
                    
                } 
                
                <div style={{ paddingBottom: "20px" }}></div>

                <div style={{ paddingBottom: "510px" }}></div> 
            </div>
    )}

}
export default TopPage;