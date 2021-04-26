import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store/User';
import NotFound from '../views/NotFound';

function Authenticated(props) {

    // State and Variable Declarations
    const auth = useRecoilValue(authenticated);
    const history = useHistory();

    if (!auth.check) {
        history.push('/login');
    };

    if (props.role || props.permission) {
        return <NotFound />
    }

    return props.render;
}

export default Authenticated;