import axios from 'axios'

export const getAllProjects=()=>dispatch=>{
    axios.get('http://localhost:8000/projects/all')
    .then(res=>{
        
         dispatch({type:'GET_ALL_PROJECTS',payload:res.data})
    })
    .catch(err=>{
        dispatch({type:'GET_ALL_PROJECTS',payload:err})
    })
}

export const getProject=(id)=>dispatch=>{
    axios.get('http://localhost:8000/projects/'+id)
    .then(res=>{
        console.log(res.data)
        dispatch({type:"GET_PROJECT",payload:res.data})
    })
    .catch(err=>{
        dispatch({type:'GET_PROJECT',payload:err})
    })
}
export const addNewProject=(pro)=>dispatch=>{
    axios.post("http://localhost:8000/add",pro)
    .then(res=>{
        dispatch({type:"ADD_PROJECT",payload:pro})
    })
    .catch(err=>{
        dispatch({type:"ADD_PROJECT",payload:err})
    })
    dispatch(getAllProjects)
}

export const deleteProject=id=>dispatch=>{
    axios.delete('http://localhost:8000/projects/'+id)
    .then(res=>{
        dispatch({type:"DELETE_PROJECT",payload:id})
    })   
    .catch(err=>{
        dispatch({type:'DELETE_PROJECT',payload:err})
    })    
    dispatch(getAllProjects)
}

export const updateProject=pro=>dispatch=>{
    axios.post('http://localhost:8000/update',pro)
    .then(res=>{
        dispatch({type:'UPDATE_PROJECT',payload:res.data})
    })
    .catch(err=>{
        dispatch({type:'UPDATE_PROJECT',payload:err})
        })
    
}