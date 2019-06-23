import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './duck/duck'

const mapDispatchToProps = {
    getUsers,
}

const Catalog = ({ getUsers }) => {
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div>
            <h1>Заказать работу можно будет здесь</h1>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Catalog);
