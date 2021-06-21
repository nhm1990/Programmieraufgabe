//executeMain();

async function executeMain(){
    var customer = getCustomer(5, "DB", "Musterstraße 19, 67057 Ludwigshafen", new Date());
    console.log("TEMPTESTNH36434 person: " + customer.name);
    var db = getDatabaseConnection();
    /*try {
        const results = await getValuesFromDb(db);
        console.log("TEMPTESTNH7634636434 results: " + results[0].name);
        console.log("TEMPTESTNH7634636434 typeof(results): " + typeof(results));
        return results;
    }
    catch(err) {
        console.error("TEMPTESTNH7634636434 ERROR!! " + err);
    }
    */

    return null;
}

function getCustomer(id, name, address, creationDate){
    var customer = new Object();
    customer.id = id;
    customer.name = name;
    customer.address = address;
    customer.creationDate = creationDate;

    return customer;
}


function getDatabaseConnection(){
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'nhormesch',
        password : 'start123',
        database : 'programmieraufgabe'
    });

    connection.connect();

    return connection;
}

function insertValueToDb(db, valueObj){
    const owner = "nhormesch";
    db.query(
        'INSERT INTO customers (owner, name, address, creationDate) VALUES (?,?,?,?)',
        [owner, valueObj.name, valueObj.address, valueObj.creationDate],
        (error) => {
        if (error) {
            console.error("insertValueToDb - ERROR!!! : " + error);
        } else {
            console.error("insertValueToDb - OK!!!");
        }
        }
    );
}

function getValuesFromDb(db){
    const owner = "nhormesch";
    return new Promise(function(resolve, reject) {
        db.query(
            'SELECT id, name, address, creationDate FROM customers WHERE owner=? ORDER BY creationDate',
            [owner],
            (error, results) => {
                if (error) {
                    console.error("getValuesFromDb - ERROR!!! " + error);
                    return null;
                } else {
                    console.error("getValuesFromDb - results: " + results);
                    resolve(results);
                }
            }
        )
    });
}

function updateValuesToDb(db, valueObj){ 
    const owner = "nhormesch";
    db.query(
        'UPDATE customers SET name=?, address=?, creationDate=? WHERE id=? AND owner=?',
        [valueObj.name, valueObj.address, valueObj.date, valueObj.id, owner],
        (error) => {
            if (error) {
            console.error("updateValuesToDb - ERROR!!! : " + error);
            } else {
                console.error("updateValuesToDb - OK!!!");
            }
        }
    );
}

function deleteValueFromDb(db, id){
    const owner = "nhormesch";
    db.query(
        'DELETE FROM customers WHERE id=? AND owner=?',
        [id, owner],
        (error) => {
            if (error) {
            console.error("deleteValueFromDb - ERROR!!! : " + error);
            } else {
                console.error("deleteValueFromDb - OK!!!");
            }
        }
    );
}

module.exports = {
    executeMain,
    getCustomer
};