function studentsCount(courses) {

    let allStudents = new Set();

    courses.forEach(course => {

        course.forEach(student => {
            allStudents.add(student);
        });
    });

    return allStudents.size;
}

let courseList = [
    [15, 21, 80, 42],
    [21, 80, 47],
    [12, 21, 47, 35]
]

console.log(studentsCount(courseList)); // 7