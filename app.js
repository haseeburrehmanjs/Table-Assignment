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

function sumNum() {
    let totalMarks = 400; // Assuming total marks is 400
    console.log(`Total Marks ==> ${totalMarks}`);
    var obtainNumber = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value);
    console.log(`Obtain Marks ==> ${obtainNumber}`);
    let percentage = (obtainNumber / totalMarks) * 100;
    console.log(`Percentage: ${percentage}%`);
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    if (percentage >= 1 && 30 >= percentage){
        console.log(`Bad News You Are Fail!`);
    }else if (percentage >= 31 && 50 >= percentage){
        console.log(`Need Work Hard "C" Grade`);
    }else if (percentage >= 51 && 70 >= percentage){
        console.log(`Congratulation "B" Grade`);
    }else {
        console.log(`Congratulation "A" grade"`);
    }
}


