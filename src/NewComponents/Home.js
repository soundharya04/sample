import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllProjects,addNewProject} from '../Actions/ProActions'

 const Home=(props)=>{
     React.useEffect(()=>{
        props.getAllProjects()
     },[])
     
     const [modal,setModal]=React.useState(false);
     const [name,setName]=React.useState("");
     const [desc,setDesc]=React.useState("");
     const [completed,setCompleted]=React.useState("");

     const projectslist=props.projects?.projects?.length>0?
     props.projects.projects.map(proj=>
      (<div className="card"
      key={proj.id}
      style={{
          margin:"20px 100px"
      }}>
          <Link to={`/projects/${proj.id}`}>
              <div className="card-header">{proj.name}</div>
          </Link>
          <div className="card-body">
          <blockquote className="blockquote mb-0">
          <p>{proj.desc}</p>
          <footer className="blockquote-footer">
              <cite title="Source Title">
                  {proj.completed?"Completed":"In Progress"}
              </cite>
          </footer>
          </blockquote> 
          </div>
      </div>   
     ))
     :null
    return(
        <div>
            <button className="btn btn-primary" style={{
                margin:"20px 100px 0px 100px"
            }}
            onClick={()=>{setModal(true)
            }}>
            Add
            </button>
           {/*Modal*/}
            <div id="myModal"
            className="modal"
            style={{
                display:modal ? "unset" : "none",
                position:"fixed",
                zIndex:"10",
                margin: "auto",
                height: "100%",
                width: "100%",
                overflow: "auto",
                backgroundColor: "rgb(0,0,0,0.5)",
                paddingTop: "200px"
            }}>
                {/*Content*/}
                <div className="modal-content"
                style={{
                    backgroundColor: "#fefefe",
            margin: "auto",
            padding: "20px",
            border: "1px solid #888",
            width: "50%"
                }}>
                    <h3 style={{textAlign:"centre"}}>Add New Project</h3>
                    <div style={{margin:"auto"}}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <b>Project Name</b>
                                    </td>
                                    <td>
                                        <input
                                        type="text"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                        style={{
                                            border: "none",
                                            width: "100%"
                                          }}>
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Project Description</b>
                                    </td>
                                    <td>
                                        <input
                                        type="text"
                                        value={desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                        style={{
                                            border: "none",
                                            width: "100%"
                                          }}>
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Project Status</b>
                                    </td>
                                    <td>
                                        <input
                                        type="text"
                                        value={completed}
                                        onChange={(e)=>setCompleted(e.target.value)}
                                        style={{
                                            border: "none",
                                            width: "100%"
                                          }}>
                                        </input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <div style={{textAlign:"centre"}}>
                            <button className="btn btn-success"
                            onClick={()=>{
                                const newPro={
                                    name,
                                    desc,
                                    completed
                                }
                                props.addNewProject(newPro);
                                props.history.push("/");
                                setModal(false)
                            }}>
                                Add</button>{"  "}
                            <button className="btn btn-danger"
                            onClick={()=>{
                                setModal(false);
                            }}>
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {projectslist}
        </div>
    )
}

//  Home.propTypes = {
//      projects: PropTypes.objects
//    };

const mapStatetoProps=(state)=>{
    
    return {projects:state}
}
export default connect(mapStatetoProps,{getAllProjects,addNewProject})(Home);