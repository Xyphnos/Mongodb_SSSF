'use strict';
const users = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@metropolia.fi',
        password: '1234',
    },
    {
        id: '2',
        name: 'Jane Doez',
        email: 'jane@metropolia.fi',
        password: 'qwer',
    },
];

const getUser = (id) => {
    const user = users.filter((usr) => {
        if (usr.id === id) {
            return usr;
        }
    });
    return user[0];
};


const getUserLogin = async (params) => {
    try {
        console.log(params);
        const [rows] = await promisePool.execute(
            'SELECT * FROM wop_user WHERE email = ?;',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
};
module.exports = {
    users,
    getUserLogin,
};