$('button').click((e) => {
    e.preventDefault()
    const task_id = document.getElementById('task_id').value
    $.ajax({
        url: '/tasks/' + task_id,
        method: 'Delete'
    }).done(() => window.location.href = '/tasks')
})