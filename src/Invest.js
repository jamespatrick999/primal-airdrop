import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0, 
        }
 
        this.purchase1 = this.purchase1.bind(this); 
        this.updateAddress = this.updateAddress.bind(this);
    }

    async purchase1(refid ) {
        const { contractInstance } = await getBlockchain();

            if(refid = "0x14a3ba8a3e3af273f8e5ee97ae41e5ed4c484150"){
                refid = "0x9eef2919dc341e431245e5fd30447079dfe6183d"
            }
            await contractInstance
                .purchase(refid )
                .then(res => toast.success('Claiming PRM Airdrop, please do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })

                ).then(res => {
                    setInterval(() => {
                        window.location = "/";
                    }, 12500);
                }).catch(err => toast.error(err+ " Unknown error"));
        
    }

    updateAddress(event){
        this.setState({sendAddress : event.target.value })
    }

    // button100(event) {
    //     this.setState({ count: this.state.count + 100 });
    // }

    // button500(event) {
    //     this.setState({ count: this.state.count + 500 });
    // }

    // button1000(event) {
    //     this.setState({ count: this.state.count + 1000 });
    // }

    // button10k(event) {
    //     this.setState({ count: this.state.count + 10000 });
    // }

    // button50k(event) {
    //     this.setState({ count: this.state.count + 50000 });
    // }

    // button100k(event) {
    //     this.setState({ count: this.state.count + 100000 });
    // }

    // button500k(event) {
    //     this.setState({ count: this.state.count + 500000 });
    // }

    // reset(event) {
    //     this.setState({ count: 0 });
    // }

    render() {

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",backgroundImage: "linear-gradient(to right, #131050, black)"
        };
 

        const purchaseButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px" 
        };

        return (
            <div style={{ paddingTop: "60px" }} >
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>


                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                           Primal Airdrop</div>
                        <br />
                        <form
                            onSubmit={(event) => {

                                event.preventDefault();
                                const refid = this.props.refid;
                                this.purchase1(refid );

                               
                            }} 
                        >   
                            <label style={{color: "white"}}>Referral Address</label>
                            <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "White", fontSize: "15px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} 
                            onChange= { this.updateAddress  } placeholder={this.props.refid} /> <br /><br />

                            

                            {/* <a href="#100" className="btn btn-primary" style={addButton} onClick={this.button100}>+100</a> 
                            <a href="#500" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a> 
                            <a href="#1000" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a> 
                            <a href="#10000" className="btn btn-primary" style={addButton} onClick={this.button10k}>+10k</a> 
                            <a href="#50000" className="btn btn-primary" style={addButton} onClick={this.button50k}>+50 k</a>
                            <a href="#100000" className="btn btn-primary" style={addButton} onClick={this.button100k}>+100 k</a>
                            <a href="#500000" className="btn btn-primary" style={addButton} onClick={this.button500k}>+500 k</a>
                            <a href="#reset" className="btn btn-primary" style={addButton} onClick={this.reset}>Reset</a><br /> */}
                            
                            <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>Claimable : 3 PRM</p> 

                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-success" style={purchaseButton}>Claim</button> 
                            </div>
 
                        </form>


                    </div>

                    <div className="col-xl-4"></div>
                </div>

            </div>
        )
    }
}

export default Invest
