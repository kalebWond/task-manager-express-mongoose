require('../src/db/connection')
const Task = require('../src/models/task');

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count
}

deleteTaskAndCount('6018f488cfb7c98235172610').then(count => console.log(count)).catch(e => console.log(e))