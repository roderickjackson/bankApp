import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Landing extends Component{
    render(){
        return(
            <div style={{height: '75vh'}} className='container valign-wrapper'>
                <div className='row'>
                    <div className='col s12 center align'>
                        <h4>
                            Never <b>Build</b> an authentication system from  {" "}
                            <span style={{fontFamily: 'monospace'}}>SCRATCH</span> ever again!
                        </h4>
                        <p className='flow-text gret-text text-darken-1'>
                            Built for passport and JWTs
                        </p>
                        <br />
                        <Link
                            to="/register"
                            style={{
                                width: '150', 
                                borderRadius: '3px',
                                letterSpacing: '1.5px'
                            }}
                            className='btn btn-large waves-effect white hoverable black-text'>
                            Register
                        </Link>
                        <Link
                            to="/login"
                            style={{
                                width: '150', 
                                borderRadius: '3px',
                                letterSpacing: '1.5px'
                            }}
                            className='btn btn-large waves-effect white hoverable black-text'>
                            login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing