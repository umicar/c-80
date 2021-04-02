var name_array=[];
function submit(){
    var display_student= [];
    for(j=1;j<=4;j++)
    {
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        name_array.push(student_name);
    }
    console.log(name_array);
    var  length=name_array.length;
    console.log(length);
    for(k=0;k<length;k++)
    {
        display_student.push("<h4>NAME -"+ name_array[k]+ "</h4>");
        console.log(display_student);
    }
    console.log(display_student);
    document.getElementById("display_name_with_commas").innerHTML=display_student;

    var remove_comma=display_student.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    var sorted_array=[];
    var length1=name_array.length;
    console.log(length1);
    for(k=0;k<length1;k++)
    {
        sorted_array.push("<h4>NAME -"+ name_array[k]+ "</h4>");
        console.log(sorted_array);
    }
    var remove_comma=sorted_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}
