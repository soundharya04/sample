import React from 'react'
import {connect} from 'react-redux'
import {getProject,deleteProject,updateProject} from '../Actions/ProActions'
import {withRouter} from 'react-router-dom'

const Projects=props=>{
     React.useEffect(()=>{
     props.getProject(props.match.params.id);
     },[])
       
    const [edit,setEdit]=React.useState(false);
    const [name,setName]=React.useState("");
    const [desc,setDesc]=React.useState("");
    const [completed,setCompleted]=React.useState("");
    
    const proj=props.project?.project;
    
    const project=proj?.length>0?
    proj.map(proj=>(
        <div key={proj.id} style={{
            margin:0,
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"transform(-50%,-50%)"
        }}>
            <table>
                <tbody>
                    <tr><td style={{width: "25%"}}>
                    <b>Project Name</b>
                    </td>
                    <td style={{width: "75%"}}>
                        {edit?(<input
                        type="text"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        style={{
                            border:"none",
                            width:"100%"
                        }}></input>):(proj.name)}
                    </td>
                    </tr>
                    <tr><td style={{width: "25%"}}>
                    <b>Project Description</b>
                    </td>
                    <td style={{width: "75%"}}>
                        {edit?(<input
                        type="text"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                        style={{
                            border:"none",
                            width:"100%"
                        }}></input>):(proj.desc)}
                    </td>
                    </tr>
                    <tr><td style={{width: "25%"}}>
                    <b>Project STatus</b>
                    </td>
                    <td style={{width: "75%"}}>
                        {edit?(<input
                        type="text"
                        value={completed}
                        onChange={(e)=>{setCompleted(e.target.value)}}
                        style={{
                            border:"none",
                            width:"100%"
                        }}></input>):(proj.completed?"Completed":"In Progress")}
                    </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div style={{textAlign:"center"}}>
                {edit?(
                    <button className="btn btn-success"
                    onClick={()=>{
                        setEdit(false)
                        const pro={
                            id:proj.id,
                            name,
                            desc,
                            completed
                        }
                        props.updateProject(pro)
                        props.history.push("/")
                    }}>SAVE</button>
                ):(
                    <button className="btn btn-success"
                    onClick={()=>{
                        setName(proj.name)
                        setDesc(proj.desc)
                        setCompleted(proj.completed)
                        setEdit(true)
                    }}>Edit</button>
                )}{" "}
                <button className="btn btn-danger"
                onClick={(e)=>{
                    e.preventDefault();
                    props.deleteProject(proj.id)
                    props.history.push("/")
                }}>
                    DELETE
                </button>{" "}
                {edit?(
                    <button className="btn btn-warning"
                    onClick={()=>{
                        setEdit(false)
                    }}>CANCEL</button>
                ):null}
            </div>
        </div>
    )

                )
    :null
 
    return(
    
    <div style={{ height:"100%"}}>{project}</div>
    )


}

 const mapStatetoProps=(state)=>{
     console.log(state)
     return({
         project:state
     })
 }
export default connect(mapStatetoProps,{getProject,deleteProject,updateProject})( withRouter(Projects))
 