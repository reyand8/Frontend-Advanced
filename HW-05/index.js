const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]
console.log(averageStudentMark(10));
console.log(averageGroupMark(students));

function averageStudentMark(student_id){
    const get_by_id = students.filter((student) => student.id === student_id)
    const result = get_by_id[0].marks.reduce((accumulator, current) => accumulator + current)
    return result / get_by_id[0].marks.length
}

function averageGroupMark(your_array){
    let marks = your_array.flatMap(student => student.marks)
    return marks.reduce((accumulator, current) => accumulator + current, 0) / marks.length
}