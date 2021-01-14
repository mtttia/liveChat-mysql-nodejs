const { exception } = require('console');
const mysql = require('mysql');


/*
module.exports = (hostname, user, password, database, callback) =>{
    let connection = mysql.createConnection({
        host : hostname,
        user : user,
        password : password,
        database: database
    });
    
    connection.connect((err) =>{
        if(err)
        {
            callback(err);
        }
        callback(null, 'connect to scfdatabase');
    });
}
*/

module.exports = {
    hostname : '',
    user : '',
    password : '',
    database : '',
    initialized : false,

    initialize : (hostname, user, password, database)=>
    {   
        this.hostname = hostname;
        this.user = user;
        this.password = password;
        this.database = database;
        this.initialized = true;
    },

    query : (query, callback) =>{
        if(this.initialized)
        {
            const connection = mysql.createConnection({
                host : this.hostname,
                user : this.user,
                password : this.password,
                database : this.database
            })
            connection.connect((err) =>{
                if(err)
                    callback(err);
                connection.query(query, (error, result) =>{
                    if(error)
                        callback(error);
                    callback(null, result);
                })
            })
        }
        else
        {
            throw new Error('first use inizialize to send database data');
        }
    }


}