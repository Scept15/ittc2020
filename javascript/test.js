function makeStudent(name, kor, eng, math){
    return {
        "name": name,
        "kor": kor,
        "eng": eng,
        "math": math
    };
}

// object array - use makeStudent
var student = [
    makeStudent('jeremy', 100, 100, 100),
    makeStudent('scepter', 80, 80, 80),
    makeStudent('lilian', 90, 97, 89),
];

// stu = is to recieve the return function
console.log('=====foreach=====');
students.forEach(function(stu){
    console.log(stu.name, stu.kor, stu.eng, stu.math);
});