module.exports = Task => ({
    makeFetchTasks: async () => {
        return await Task.getAll()
    },

    makeFetchTask: async (id) => {
        return await Task.get(id)
    },

    makeCreateTask: async (task) => {
        return await Task.create(task)
    },


    makeUpdateTask: async (id, task) => {
        return await Task.update(id, task)
    },

    makeDeleteTask: async (id) => {
        return await Task.delete(id)
    },

    makeFetchUncompletedTaskCounter: async () => {
       return  await Task.getTaskUnCompletedCounter()
    }
})