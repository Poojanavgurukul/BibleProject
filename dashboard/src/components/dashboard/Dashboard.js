import React, { Component } from 'react';
import ProjectLists from '../projects/ProjectLists';
import Notifications from './Notifications';
class Dashboard extends Component {
    render() { 
        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;