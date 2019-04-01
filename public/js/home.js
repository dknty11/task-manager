console.log('here is home')
// const taskOne = document.getElementById('task1')

const getTask = () => fetch('http://localhost:3000/tasks').then((res) => {
    res.json().then((data) => {
        console.log('here is: ' + data)
        // if (data.error) {
        //     taskOne.textContent = data.error
        // } else {
        //     taskOne.textContent = data.description
        //     taskOne.textContent = data.complete
        // }
    })
})

getTask()
  