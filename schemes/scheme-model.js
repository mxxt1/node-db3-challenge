const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    remove,
    update,
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

function findSteps(id){
    const scheme_id = id;
    return db('steps').where({scheme_id}).orderBy('step_number', 'ASC');
}

//add(scheme)

function add(scheme){
    return db('schemes').insert(scheme);
    
}

function addStep(data, id){
    return db('steps').insert(data)
}


//update(changes, id)

function update(changes, id){
    return db('schemes').where({id}).update(changes);
}


//remove(id)

function remove(id){
    return db('schemes').where({id}).delete();
}

