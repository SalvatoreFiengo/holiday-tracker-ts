import React, { Component } from 'react';
import {Table} from 'reactstrap';
import Iuser from '../interfaces/Iusers';
type Props = {
    user: [Iuser],
    date: string
};
class HolidayTableComponent extends Component<Props>{
    render(){
        return(
            
            <Table className="text-center">
                <thead>
                    <tr>
                        <th>Holidays</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.props.user.map((user)=>{
                        return(<tr key={user.id}><td ><p>{user.name}</p><p>{this.props.date.slice(0,15)}</p></td></tr>)
                    })}
                    
                </tbody>
            </Table>
            
        )
    }

}
export default HolidayTableComponent;