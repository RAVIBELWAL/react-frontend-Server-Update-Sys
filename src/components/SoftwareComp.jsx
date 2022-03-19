import React,{Component} from 'react'
import SoftServices from '../services/SoftServices'

class SoftwareComp extends Component{
    constructor(props){
        super(props)

        this.state={
            software:[]
        }
        this.addNewSoft=this.addNewSoft.bind(this);
    }

    componentDidMount(){
        SoftServices.getSoftwares().then((res) => {
            this.setState({software:res.data});
        });
    }

    addNewSoft(){
        this.props.history.push('/addNewSoft');
    }

    render(){
        return(<>
        <div>
            <div>
                <div className="text-center">

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Build Name</th>
                                <th>Build Version</th>
                                <th>Release Date</th>
                                <th>Release Notes</th>
                                <th>Release Type</th>
                                <th>Download</th>
                                <th><i className="far fa-trash-alt"></i></th>
                            </tr>
                        </thead>

                    <tbody>
                        {
                            this.state.software.map(
                        soft=>
                        <tr key={soft.id}>
                            <td>{soft.name} </td>
                            <td>{soft.version} </td>
                            <td>{soft.release_d} </td>
                            <td>{soft.details} </td>
                            <td>stable</td>
                            <td><i class="fas fa-arrow-down"></i></td>
                            <td><i className="fas fa-times"></i></td>
                        </tr>
                            
                            )    
                    }
                    </tbody>

                    </table>

                    <div className="row " >
                    &nbsp; &nbsp; <button className="btn btn-primary col-sm-5" onClick={this.addNewSoft}>
                         Add New Software
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>)
    }
}

export default SoftwareComp