import * as React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../duck/user-duck'
import { IStore } from 'src/core/reducers/interfaces';
import { userSelectors } from '../index';
import { IUserProps } from './interfaces'
import Stack from '../components/stack'

const mapStateToProps = (state: IStore) => ({
    users: userSelectors.getUserState(state)
})

const mapDispatchToProps = {
    getUsers,
}

const Users: React.SFC<IUserProps> = ({ users, getUsers }) => {
    React.useEffect(() => {
        getUsers();
    }, [getUsers])

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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Users));
