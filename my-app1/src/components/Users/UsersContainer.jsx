import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/Users-reducer'
import Users from './Users'

let mapStateToProps = (state) => {
    
    return{
        users: state.Users_Page.users
    }
}
let mapDispatchToProps =(dispatch) =>

{debugger
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect( mapStateToProps, mapDispatchToProps ) (Users)