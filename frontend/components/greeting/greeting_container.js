import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
    return{
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);