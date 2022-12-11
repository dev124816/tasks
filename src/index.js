window.onload = (event) => {
    document.getElementsByClassName('add-task-button')[0].addEventListener('click', (event) => {
        const addTaskInput = document.getElementsByClassName('add-task-input')[0]
        
        if (addTaskInput.value !== '') {
            let task = document.createElement('div')
            let taskContent = document.createElement('p')
            let taskCheck = document.createElement('input')
            
            task.setAttribute('class', 'task')
            taskContent.innerHTML = addTaskInput.value
            taskCheck.setAttribute('type', 'checkbox')
            
            task.append(taskContent, taskCheck)
            document.getElementsByTagName('main')[0].append(task)

            addTaskInput.value = ''
        }
    }) 

    document.getElementsByClassName('clear-checked-tasks-button')[0].addEventListener('click', (event) => {
        const tasks = document.querySelectorAll(".task")

        for (let task of tasks) {
            if (task.lastElementChild.checked) task.remove()
        }
    })
}
