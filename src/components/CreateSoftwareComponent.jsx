import React,{Component} from 'react';
import SoftServices from '../services/SoftServices';

class CreateSoftwareComponent extends Component{

    constructor(props)
    {
        super(props);
        this.state={
           softname:'',
           buildVersion:'',
           releaseData:'',
           releaseNotes:''
        }
       
        this.saveSoft=this.saveSoft.bind(this);
    }
    
    saveSoft=(e)=>{
        e.preventDefault();
        let software={name:this.state.softname,
            version:this.state.buildVersion,
            release_d:this.state.releaseData,
            details:this.state.releaseNotes};

            console.log('software => '+ JSON.stringify(software))
            
            SoftServices.createSoftware(software).then(res=>{
                this.props.history.push('/')
            })

        }

    cancel(){
        this.props.history.push('/addNewSoft')
    }

    changeSoftName=(event)=>{
        this.setState({softname:event.target.value})
    }

    changebuildVersion=(event)=>{
        this.setState({buildVersion:event.target.value})
    }

    changereleaseData=(event)=>{
        this.setState({releaseData:event.target.value})
    }

    changereleaseNotes=(event)=>{
        this.setState({releaseNotes:event.target.value})
    }

    render(){
        return(<div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Add New Software Detail</h3>
                            <div className="card-body">

                                <form method='post' action='http://localhost:8080/api/v1/software'>
                                    <div className="form-group">
                                      <label>First Name : </label>&nbsp; &nbsp; &nbsp;&nbsp;
                                      <input placeholder='Application Name' name="softname" value={this.state.softname} onChange={this.changeSoftName}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                      <label>Build Version : </label> &nbsp;&nbsp;
                                      <input placeholder='Build Version' name="buildVersion" value={this.state.buildVersion} onChange={this.changebuildVersion}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                      <label>Release Date : </label>&nbsp; &nbsp;
                                      <input placeholder='Build Date' name="releaseData" value={this.state.releaseData} onChange={this.changereleaseData}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                      <label>Release Notes : </label>&nbsp; 
                                      <input placeholder='Release Notes' name="releaseNotes" value={this.state.releaseNotes} onChange={this.changereleaseNotes}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                      <label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveSoft}> Save </button> &nbsp;
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)}>Cancel</button>

                                </form>

                            </div>
                     </div>
                </div>
            </div>
        </div>)
    }
    
    }
    
    export default CreateSoftwareComponent;