const initState = {
    projects: '',
    project: ''
  };

const RootReducer=(state=initState,actions)=>{

    switch(actions.type){
        case 'GET_ALL_PROJECTS':
            
            return{
                ...state,
                projects:actions.payload
            }
        case 'ADD_PROJECT':
            return{
                ...state,
                projects:[...state.projects,actions.payload]
            }
        case 'GET_PROJECT':    
            return{
                ...state,
                project:actions.payload
            }
        case 'DELETE_PROJECT':
            return{
                ...state,
                projects:state.projects.filter(
                    project=> project.id!==actions.payload
                )
            } 
        case 'UPDATE_PROJECT':
            return{
                ...state,
                projects:state.projects.map(project=>{
                    if(project.id===actions.payload.id){
                        project=actions.payload
                    }
                    return project;
                })
            }       
    }

}

export default RootReducer;