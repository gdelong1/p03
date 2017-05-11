// Author: Garrett De Long
var result;

function check()
{
  var question;
  var value1;
  var value2;
  var value3;
  var value4;

  question = 1;
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;

   result = 0;

   var choice;

   for (question = 1; question <= 5; question++) {
      var q = document.forms['quiz'].elements['q'+question];
         for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
               choice = q[i].value;
            }
         }
         if(question == 1)
          {
            if(choice == "value2")
            {
              result++;
            }
          }
          else if(question == 2)
          {
            if(choice == "value4")
            {
              result++;
            }
          }
          else if(question == 3)
          {
            if(choice == "value1")
            {
              result++;
            }
          }
          else if(question == 4)
          {
            if(choice == "value3")
            {
              result++;
            }
          }
          else if(question == 5)
          {
            if(choice == "value1")
            {
              result++;
            }
          }
      }
      var correct = result / 5;
      correct = correct * 100;
   document.getElementById("quizresult").innerHTML = correct + "%";
}
