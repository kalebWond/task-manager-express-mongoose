const express = require('express');
require('./db/connection');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    const user = await User.findById('601d0b9b7c95703362af068e')
    await user.populate('tasks').execPopulate();
    // console.log(user.tasks)
}
main()

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})