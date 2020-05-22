import React, { useEffect, useState } from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import ProjCard from '../components/ProjCard';

export default props => {
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/projects')
            .then(response => { 
                setProjects (
                    response.data.projects.sort((a,b) =>
                    (a.dueDate > b.dueDate )? 1: -1)
                ); 
            })
            .catch(err => console.log(err))
    },[projects]);

    return (
        <div className="container">
            <div className="row">
                <div className="col border">
                    <h3>Backlog</h3>
                </div>
                <div className="col border">
                    <h3>In Progress</h3>
                </div>
                <div className="col border">
                    <h3>Completed</h3>
                </div>
            </div>
            <div className="row overflow-auto" style={{height: '500px'}}>
                <div className="col border">
                    {projects.filter((project => project.status === "backlog")).map((project, idx) => 
                        <ProjCard idx={idx} project={project}/>
                    )}
                </div>
                <div className="col border">
                    {projects.filter((project => project.status === "in_progress")).map((project, idx) => 
                        <ProjCard idx={idx} project={project}/>
                    )}
                </div>
                <div className="col border">
                    {projects.filter((project => project.status === "completed")).map((project, idx) => 
                        <ProjCard idx={idx} project={project}/>
                    )}
                </div>
            </div>
            <div className="row border" style={{height: '50px'}}>
                <div className="col pt-2">
                    <button onClick={(e)=>navigate("/new")}>Add New Project</button>
                </div>
            </div>
        </div>
    )
}