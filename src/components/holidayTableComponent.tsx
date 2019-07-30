import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import Iuser from '../interfaces/Iusers';
type Props = {
    user: [Iuser],
    date: string,
    month: string,
    prev:(count:number)=>void,
    next:(count:number)=>void,
    count:number
};
class HolidayTableComponent extends Component<Props>{
    render(){
        return(
            
            <Table className="text-center">
                <thead>
                    <tr>
                        <th colSpan={3}>Today is {this.props.date.slice(0,15)}</th>
                    </tr>
                    <tr>
                        <th>
                            <Button onClick={()=>{
                            this.props.prev(this.props.count)
                            }}
                            >Prev</Button>
                        </th><th>Holidays in {this.props.month}</th>
                        <th><Button onClick={()=>{
                            this.props.next(this.props.count)
                            }}
                            >next</Button></th>
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