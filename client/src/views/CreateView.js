import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default props => {
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState();
    const status = "backlog";
    const [errors, setErrors] = useState([]);

    const createProject = e => {
        axios.post('http://localhost:8000/api/project/new', {name, dueDate, status})
            .then(response => { 
                console.log(response);
                navigate("/");
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message)
                }
                setErrors(errArr);
            });
        
    }

    return (
        <div className="container p-3">
            <div className="row justify-content-center">
                <Link to="/">Back to Dashboard</Link>
            </div>
            {errors.map((error, idx) => <div key={idx} className="text-danger">{error}</div>)}
            {/* New Project Form */}
            <div className="row justify-content-center p-3">
                <div className="col-9 border">
                    <div className="row p-3">
                        <h4>Plan a new project</h4>
                    </div>
                    {/* Project Name */}
                    <div className="row justify-content-center pt-2">
                        <div className="col-2 text-left py-1">
                            <label htmlFor="name">Project Name:</label>
                        </div>
                        <div className="col-9 text-left py-1">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/>
                        </div>
                    </div>
                    {/* Project Due Date */}
                    <div className="row justify-content-center pt-2">
                        <div className="col-2 text-left py-1">
                            <label htmlFor="dueDate">Due Date:</label>
                        </div>
                        <div className="col-9 text-left py-1">
                            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control"/>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="row justify-content-center py-4">
                        <button onClick={ createProject }>Plan Project</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}