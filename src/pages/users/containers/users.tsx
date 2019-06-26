import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../duck/user-duck'
import { IStore } from 'src/core/reducers/interfaces';
import { userSelectors } from '../index';

const mapDispatchToProps = {
    getUsers,
}

const mapStateToProps = (state: IStore) => ({
    users: userSelectors.getUserState(state)
})

const Users = ({ getUsers }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers])
    return (
        <div>
            <h1>Заказать работу можно будет здесь</h1>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
