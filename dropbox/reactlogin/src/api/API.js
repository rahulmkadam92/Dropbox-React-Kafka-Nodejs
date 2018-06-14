const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:'include'
    }).then(res => {

        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const createUser = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials:'include'
    }).then(res => {
        console.log(res.status);
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const getFile = (filepath) =>
    fetch(`${api}/files?filepath=`+filepath,{
        method: 'GET',
        credentials:'include'
    })
        //.then(res => res)
        .catch(error => {
            console.log("This is error.");
            return error;
        });


export const getState = () =>
    fetch(`${api}/users`,{
        method: 'GET',
        credentials:'include'
        })
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const getFileList = (filepath) =>
    fetch(`${api}/files/getfiles?filepath=`+filepath,{
        method: 'GET',
        credentials:'include'
    })
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const uploadFile = (payload) =>
    fetch(`${api}/files/upload`, {
        method: 'POST',
        body: payload,
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const getGroups = (filepath) =>
    fetch(`${api}/groups/getgroups`,{
        method: 'GET',
        credentials:'include'
    })
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const addGroup = (data) =>

    fetch(`${api}/groups/addgroup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const deleteGroup = (data) =>
    fetch(`${api}/groups/deletegroup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const getMembers = (data) =>
    fetch(`${api}/groups/getmembers`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const addMember = (data) =>

    fetch(`${api}/groups/addmember`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const deleteMember = (data) =>
    fetch(`${api}/groups/deletemember`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const deleteFile = (file) =>
    fetch(`${api}/files/delete`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(file),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const makeFolder = (folder) =>
    fetch(`${api}/files/makefolder`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(folder),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const updateUser = (data) =>
    fetch(`${api}/users/updateuser`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const shareFile = (filedata) =>
    fetch(`${api}/files/sharefile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filedata),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const shareFileInGroup = (filedata) =>
    fetch(`${api}/files/sharefileingroup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filedata),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });


export const markStar = (data) =>

    fetch(`${api}/files/star`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials:'include'
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

export const logout = () =>
    fetch(`${api}/users/logout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });
