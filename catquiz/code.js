function gradeQuiz()
{
    var total = 0;
    var wrong = "<h2>You missed: ";

    // ----- Question 1 -----
    var breedAnswer = document.getElementById("mainecoon").checked;

    if(breedAnswer)
    {
        total = total + 1;
    }
    else
    {
        wrong = wrong + "Q1 ";
    }


    // ----- Question 2 -----
    var blinkAnswer = document.getElementById("theyloveyou").checked;

    if(blinkAnswer)
    {
        total = total + 1;
    }
    else
    {
        wrong = wrong + "Q2 ";
    }


    // ----- Question 3 -----
    var p = document.getElementById("purring").checked;
    var k = document.getElementById("kneading").checked;
    var h = document.getElementById("hissing").checked;
    var t = document.getElementById("tailflicking").checked;

    if(p && k && h && t)
    {
        total = total + 1;
    }
    else
    {
        wrong = wrong + "Q3 ";
    }


    // ----- Question 4 -----
    var a1 = document.getElementById("yes").checked;
    var a2 = document.getElementById("absolutely").checked;
    var a3 = document.getElementById("ofcourse").checked;
    var a4 = document.getElementById("duh").checked;

    if(a1 && a2 && a3 && a4)
    {
        total = total + 1;
    }
    else
    {
        wrong = wrong + "Q4 ";
    }


    //results
    document.getElementById("result").innerHTML = "Final Score: " + total + " out of 4";
    document.getElementById("incorrect").innerHTML = wrong + "</h2>";
}