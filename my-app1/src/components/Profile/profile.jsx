import React from 'react';
import {connect} from "react-redux";
import {AddPost, getUserProfile, updateNewPostText} from "../../redux/profile-reducer";
import s from './profile.module.css';
import Description from '../description/description';
import {NavLink, Redirect} from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import New_posts from "../My posts/new_posts/new_posts";
import My_post from "../My posts/My post/My_post";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {


    componentDidMount() {
        
        let  userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

            
                
                
               
    }
    

    render() {

        return <>

            <div className={s.Profile}>

                    <Description {...this.props} />


                <New_posts {...this.props}   />
                <My_post />

                
                

            </div>
</>
        ;
    }


}

let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Profile_Page: state.Profile_Page,
    New_Post_Text: state.Profile_Page.New_Post_Text,

})

export default compose(
    connect(mapStateToProps, {AddPost,updateNewPostText,getUserProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer)










