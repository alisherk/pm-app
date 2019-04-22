const initState = {

    projects: [
        { id: '1', title: 'schedule', content: 'create schedule' },
        { id: '2', title: 'budget', content: 'create budget' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }

}

export default projectReducer;