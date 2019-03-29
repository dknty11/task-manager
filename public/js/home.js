console.log('here is home')
const taskOne = document.getElementById('task1')
const fullUrl = window.location.href


const getTask = () => fetch('http://localhost:3000/tasks', {
    method: 'Get',
    credentials: 'include'
}).then((res) => {
    res.json().then((data) => {
        console.log(data)
        if (data.error) {
            taskOne.textContent = data.error
        } else {
            taskOne.textContent = description
            taskOne.textContent = data.complete
        }
    })
})

getTask()