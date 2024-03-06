// function sumNum() {
//     let totalMarks = `Totla Marks ==> ${400}`
//     console.log(totalMarks);
//     var obtainNumber = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value) + parseInt(input4.value);
//     console.log(`obtain Marks ==> ${obtainNumber}`);
//     console.log(obtainNumber/totalMarks*100);
//     input1.value = ''
//     input2.value = ''
//     input3.value = ''
//     input4.value = ''
// }


var studentTotal = document.querySelector('#total-marks')
var percentage = document.querySelector('#percentage')
var grade = document.querySelector('#grade')

function sumNum() {
    let totalMarks = 400; // Assuming total marks is 400
    console.log(`Total Marks ==> ${totalMarks}`);
    let obtainNumber = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value);
    console.log(`Obtain Marks ==> ${obtainNumber}`);
    let studentPercentage = (obtainNumber / totalMarks) * 100;
    console.log(`Percentage: ${percentage}%`);
    studentTotal.innerHTML = obtainNumber;
    percentage.innerHTML = studentPercentage
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    if (studentPercentage > 80){
        grade.innerHTML = `A+`
    }else if (studentPercentage > 60){
        grade.innerHTML = `B`
    }else if (studentPercentage > 30){
        grade.innerHTML = `C`
    }else {
        grade.innerHTML = `FAIL`
    }
}


