import React, { Component } from 'react';
import './Css/App.css'
import ReactMDL from 'react-mdl';
import {Textfield , Button, Card, Grid, Cell} from 'react-mdl';
// import { Link } from 'react-router-dom';
import Carousel from './Carousel'
import LOGO from './logo.jpg'

class Sign extends Component {
   
    constructor(props){
        super(props);

        this.state={
            activelog : 0,
            imageUploaded:null
        };
    }
        changeState(activeId){
            this.setState({activelog: activeId});
        }

        fileSelector(event){
            this.setState( {imageUploaded: event.target.files[0]
        }
        )
        }

        toggleinup(){

           if(this.state.activelog===0) {
               return( 
                <div>
                <form className='sign-in-form'>

                    <h3>GATS Charging Station</h3><br/>
                    <div className='input-box'>
                    <i className='fa fa-phone'></i>
                    <input type='tel'minLength='10' pattern="-?[0-9]*(\.[0-9]+)?" maxLength='10' placeholder='Enter your phone number'></input>
                    <Button type='button' id='submitphone' onClick={()=> this.changeState(3)}> <i className='fa fa-arrow-right' ></i></Button>
                    </div>
                </form>
            </div>
               )
           }

           else if(this.state.activelog === 3 ){
            return(
                <div>
                     <h4> Enter verification code </h4>
                 <div className='otp-boxes' style={{textAlign:'center' , justifyContent:'center'}}>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1'  ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>                     <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>                        
                        <div style={{display:'flex' , alignItems:'center' }}>
                            <input className='otp-input' style={{width:'3rem', height:'3rem' , fontSize:'2rem' , textAlign:'center'}} maxLength='1' ></input>
                        </div>

                 </div>
                 <Button raised accent ripple style={{ background:'red' }} onClick={()=>this.changeState(1)}>SUBMIT</Button>
                 </div>
            );
        }







           else if(this.state.activelog === 1){
             return (
                 <div className="addVehicleInfo">

                            <form className="form-elements">
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "Good Name..."
                                maxLength='30'
                                style={{width: '300px' , color:'black' }}
                            />
                            <br/>
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                pattern="-?[0-9]*(\.[0-9]+)?"
                                error="Input is not a number!"
                                label="Contact Number..."
                                maxLength='10'
                                disabled
                                style={{width: '300px'}}
                             /> 
                            <br/>
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "EMAIL_ID..."
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                error="enter a valid email-address"
                                style={{width: '300px' , color:'black' }}
                            />
                        <Button raised accent ripple style={{ background:'red'  }} onClick={()=>this.changeState(2)}>ADD VEHICLE INFO</Button>
                        </form>
                 </div>
             )   
            }

            else if(this.state.activelog === 2){
                return (
                  <div className = 'submit-page' >
                            <Textfield
                                style={{fontSize:'60px'}}
                                onChange={() => {}}
                                label= "REG NO."
                                maxLength=''
                                style={{width: '300px' , color:'black' }}
                            />
                            <br/>
                            <label style={{fontSize:'18px' , textAlign:'center'}}>Upload RC : </label>
                            <input style={{margin:'0 auto' , justifyContent:'center' , alignContent:'center' , fontSize:'0.2em'}} type='file' onChange ={ (event) =>(this.fileSelector(event))} ></input>
                            <br/><br/>
                            <select placeholder='place' style={{width:'100%'}}>
                                <option>Select RC type</option>
                                <option>option1</option>
                                <option>option2</option>
                            </select>
                            <br/>
                       <Button raised accent ripple  style={{ background:'red' }}> SUBMIT </Button>
                  </div>
                )               

             }
        }
    

    render() {
        
        return (
        <div className="sign-box">
            <link rel="stylesheet" href="/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
            <div className ='Sign'> 
                 <header className='logo-header'>
                     <img src={LOGO} alt='GATS-logo' />
                    <div className='CompName'>
                        GATS SCS
                    </div>
                 </header>       

             <div className='Sign-content'>
                    <Grid className='main-grid'>
                        <Cell col={12}>
                        {this.toggleinup()} 
                        </Cell>
                    </Grid>
             </div>      
            </div>
            <div className="slider">
                <Carousel/>                          
            </div>
            
        </div>
    )
    
    }
}

export default Sign;

