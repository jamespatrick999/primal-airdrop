import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class UserInfo extends Component {
 
    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle ={ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            User Stats</div>
                        <br /> 

                        <div className="col-xl-12" style={{ textAlign: "center" }}>
          
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Upline</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "17px", textAlign: "center" }}> {this.props.upline }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Claimed</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.claimed === false ? "No" : "Yes" }   </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> Number of Referrals</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {Number(this.props.referrals) }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Extra PRM Earned</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {Number(this.props.referrals)*2 } PRM  </a>
                            <br /><br />
                            
                            
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default UserInfo
