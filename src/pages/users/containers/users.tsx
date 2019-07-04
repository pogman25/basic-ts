import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../duck/user-duck'

import { userSelectors } from '../index';
import Stack from '../components/stack'


const Users = () => {
    const users = useSelector(userSelectors.getUserState);
    const dispatch = useDispatch();
    const fetchUsers = React.useCallback(
        () => dispatch(getUsers()),
        [dispatch]
      )

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers])

    return (
        <div>
            <h1>Заказать работу можно будет здесь</h1>
            <ul>{users.map(user => (
                <li key={user.id}>
                    <img src={user.image} alt={`${user.firstname} ${user.lastname}`} />
                    <p>
                        {`${user.firstname} ${user.lastname}`}
                    </p>
                    <p>{user.position}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.telegram}</p>
                    <p>{user.english}</p>
                    <p>{user.location}</p>
                    <Stack stack={user.stack} />
                </li>
            ))}</ul>
        </div>
    )
}

export default React.memo(Users);
