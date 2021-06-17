import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../redux/profile-reducer'
import Post1 from './Posts1'




class Post1Container extends React.Component {
    componentDidMount() {

    }

    render() {

        return <>
            {this.props.profile ? 'ответ пришел' : 'ответ еще не пришел'}
            <Post1 {...this.props}
                Profile_Page={this.props.Profile_Page}
                profile={this.props.profile} />
        </>

    }
}
let mapStateToProps = (state) => ({
    profile: state.Profile_Page.profile,
    Profile_Page: state.Profile_Page,
    New_Post_Text: state.Profile_Page.New_Post_Text
})



export default connect(mapStateToProps, { setUserProfile })(Post1Container);
