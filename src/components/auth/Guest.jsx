import {Navigate} from 'react-router-dom'


function Guest(props) {

    const token = localStorage.getItem('user_token')
    if (token) {
        return (
            <Navigate to={`${process.env.REACT_APP_HOME}`} />
        )
    }
    
    // render props.component
    return (
        <props.component></props.component>
    )
}

export default Guest