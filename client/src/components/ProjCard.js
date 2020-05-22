import React, {useState} from 'react';
import axios from 'axios';

export default props => {
    const {project} = props;
    const today = useState(new Date().toISOString());
    
    const toggleStatus = newStatus => {
        console.log(Date(today) );
        console.log(Date(project.dueDate));
        axios.put(`http://localhost:8000/api/project/${project._id}`, {"status": newStatus})
            .then(res => { console.log(res); })
            .catch(err => { console.log(err); })
    }

    const deleteProject = e => {
        axios.delete(`http://localhost:8000/api/project/${project._id}`)
            .then( res => {console.log(res)});
    }

    return (
        <div className="row m-2 p-3 border">
            <div className="row-col">
                <h5>
                    {project.name}
                    {today > project.dueDate? <span className="text-danger">&nbsp;(Past Due)</span>:""}
                </h5>
            </div>
            <div className="row-col">
            <p>Due date: {project.dueDate}</p>
            </div>
            <div className="row-col">
                {project.status === "backlog" ?
                    <button onClick={(e)=> toggleStatus("in_progress")}>Start Project</button>
                    :
                    project.status === "in_progress" ?
                        <button onClick={(e)=> toggleStatus("completed")}>Move to Completed</button>
                        :
                        <button onClick={deleteProject}>Delete</button>
                }
            </div>
        </div>
    )
}