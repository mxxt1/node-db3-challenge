const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
};

//find
function find(){
    return db('schemes');
}




//findById(id)

function findById(id){
    return db('schemes').where({id}).first();
}


//findSteps(id)



//add(scheme)


//update(changes, id)


//remove(id)

