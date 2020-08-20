const skills = [
    { id: 1, skill: 'HTML', done: true },
    { id: 2, skill: 'CSS', done: true },
    { id: 3, skill: 'Responsive Design', done: true },
    { id: 4, skill: 'JavaScript', done: true },
    { id: 5, skill: 'Surviving on cat naps', done: true },
    { id: 6, skill: 'Keeping my kids alive', done: true },
    { id: 7, skill: 'Node.JS', done: true },
    { id: 8, skill: 'MongoDB', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne

};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = true;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}