function checkHolidays() {
    document.getElementById("d1").style.display="inline";
    document.getElementById("d2").style.display="inline";
    document.getElementById("holidaysList").style.display="inline";
    document.getElementById("li1").style.display="block";
    document.getElementById("li2").style.display="block";
    document.getElementById("li3").style.display="block";
    document.getElementById("li4").style.display="block";
    ans = document.getElementById("months").value;

    if (ans == "January") {
        document.getElementById("monthLabel").innerHTML = "Selected Month is " + ans;
        document.getElementById("Jan").style.display = "inline";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In January total holidays are 6";
        document.getElementById("li1").innerHTML="January 1 (Wednesday): New Year's Day";
        document.getElementById("li2").innerHTML="January 14 (Tuesday): Makar Sankranti / Pongal";
        document.getElementById("li3").innerHTML="January 26 (Sunday): Republic Day";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "Febuary") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "inline";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In Febuary total holidays are 7";
        document.getElementById("li1").innerHTML="February 2 (Sunday): Basant Panchami";
        document.getElementById("li2").innerHTML="February 12 (Wednesday): Guru Ravidas Jayanti";
        document.getElementById("li3").innerHTML="February 19 (Wednesday): Chhatrapati Shivaji Maharaj Jayanti";
        document.getElementById("li4").innerHTML="February 26 (Wednesday): Maha Shivaratri";
    }
    else if (ans == "March") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "inline";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In March total holidays are 7";
        document.getElementById("li1").innerHTML="March 14 (Friday): Holi";
        document.getElementById("li2").innerHTML="March 31 (Monday): Id-ul-Fitr (date may vary)";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "April") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "inline";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In April total holidays are 7";
        document.getElementById("li1").innerHTML="April 6 (Sunday): Ram Navami";
        document.getElementById("li2").innerHTML="April 10 (Thursday): Mahavir Jayanti";
        document.getElementById("li3").innerHTML="April 14 (Monday): Dr. B.R. Ambedkar Jayanti";
        document.getElementById("li4").innerHTML="April 18 (Friday): Good Friday";
    }
    else if (ans == "May") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "inline";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In May total holidays are 6";
        document.getElementById("li1").innerHTML="May 1 (Thursday): Labour Day / Maharashtra Day";
        document.getElementById("li2").innerHTML="May 12 (Monday): Buddha Purnima";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "June") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "inline";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In June total holidays are 5";
        document.getElementById("li1").innerHTML="June 7 (Saturday): Id-ul-Zuha (Bakrid) (date may vary)";
        document.getElementById("li2").style.display="none";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "July") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "inline";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In July total holidays are 4";
        document.getElementById("li1").innerHTML="July 6 (Sunday): Muharram (date may vary)";
        document.getElementById("li2").style.display="none";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "August") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "inline";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In August total holidays are 8";
        document.getElementById("li1").innerHTML="August 15 (Friday): Independence Day";
        document.getElementById("li2").innerHTML="August 16 (Saturday): Janmashtami";
        document.getElementById("li3").innerHTML="August 27 (Wednesday): Ganesh Chaturthi";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "September") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "inline";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In September total holidays are 7";
        document.getElementById("li1").innerHTML="September 5 (Friday): Milad-un-Nabi (Id-e-Milad)";
        document.getElementById("li2").innerHTML="September 29 (Monday): Dussehra (Saptami)";
        document.getElementById("li3").innerHTML="September 30 (Tuesday): Dussehra (Mahashtami)";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "October") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "inline";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In October total holidays are 7";
        document.getElementById("li1").innerHTML="October 1 (Wednesday): Dussehra (Mahanavami)";
        document.getElementById("li2").innerHTML="October 2 (Thursday): Mahatma Gandhi Jayanti / Dussehra";
        document.getElementById("li3").innerHTML="October 20 (Monday): Diwali (Deepavali)";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "November") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "inline";
        document.getElementById("Dec").style.display = "none";
        document.getElementById("showDetailsParagraph").innerHTML = "In November total holidays are 6";
        document.getElementById("li1").innerHTML="November 5 (Wednesday): Guru Nanak's Birthday";
        document.getElementById("li2").style.display="none";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
    else if (ans == "December") {
        document.getElementById("monthLabel").innerHTML = "Selected Month " + ans;
        document.getElementById("Jan").style.display = "none";
        document.getElementById("Feb").style.display = "none";
        document.getElementById("Mar").style.display = "none";
        document.getElementById("Apr").style.display = "none";
        document.getElementById("May").style.display = "none";
        document.getElementById("Jun").style.display = "none";
        document.getElementById("Jul").style.display = "none";
        document.getElementById("Aug").style.display = "none";
        document.getElementById("Sep").style.display = "none";
        document.getElementById("Oct").style.display = "none";
        document.getElementById("Nov").style.display = "none";
        document.getElementById("Dec").style.display = "inline";
        document.getElementById("showDetailsParagraph").innerHTML = "In December total holidays are 5";
        document.getElementById("li1").innerHTML="December 25 (Thursday): Christmas Day";
        document.getElementById("li2").style.display="none";
        document.getElementById("li3").style.display="none";
        document.getElementById("li4").style.display="none";
    }
}
// function getDisplay(ans) {
//     if (ans == "January") {
//         document.getElementById("Jan").style.display = "inline";
//     }
//     if (ans == "Febuary") {
//         document.getElementById("Feb").style.display = "inline";
//     }
//     if (ans == "March") {
//         document.getElementById("Mar").style.display = "inline";
//     }
//     if (ans == "April") {
//         document.getElementById("Apr").style.display = "inline";
//     }
//     if (ans == "May") {
//         document.getElementById("May").style.display = "inline";
//     }
//     if (ans == "June") {
//         document.getElementById("Jun").style.display = "inline";
//     }
//     if (ans == "July") {
//         document.getElementById("Jul").style.display = "inline";
//     }
//     if (ans == "August") {
//         document.getElementById("Aug").style.display = "inline";
//     }
//     if (ans == "September") {
//         document.getElementById("Sep").style.display = "inline";
//     }
//     if (ans == "October") {
//         document.getElementById("Oct").style.display = "inline";
//     }
//     if (ans == "November") {
//         document.getElementById("Nov").style.display = "inline";
//     }
//     if (ans == "December") {
//         document.getElementById("Dec").style.display = "inline";
//     }
// }