 <script>
var question001 = [" 7,10,8,11,9,12,?<br /><br />Next number is 7?",
            "36,34,30,28,24,?<br /><br />Next number is 22",
            "22,21,23,22,24,23,?<br /><br />Next number is 25",
            "53,53,40,40,27,27,?<br /><br />Next number is 12",
            "21,9,21,11,21,13,21,?<br /><br />Next number is 15",
            "58,52,46,40,34,?<br /><br />Next number is 28",
            "3,4,7,8,11,12,?<br /><br />Next number is 12",
            "8,22,8,28,8,?<br /><br />Next number is 34",
            "31,29,24,22,17,?<br /><br />Next number is 15",
            "14,28,20,40,32,64,?<br /><br />Next number is 96"
        ];

        var options001 = ["<button class=buttons001 onclick=q1i()>TRUE</button><br /><br /><button class=buttons001 onclick=q1c()>FALSE</button>"];
        var options002 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options003 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options004 = ["<button class=buttons001 onclick=q1i()>TRUE</button><br /><br /><button class=buttons001 onclick=q1c()>FALSE</button>"];
        var options005 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options006 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options007 = ["<button class=buttons001 onclick=q1i()>TRUE</button><br /><br /><button class=buttons001 onclick=q1c()>FALSE</button>"];
        var options008 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options009 = ["<button class=buttons001 onclick=q1c()>TRUE</button><br /><br /><button class=buttons001 onclick=q1i()>FALSE</button>"];
        var options010 = ["<button class=buttons001 onclick=q1i()>TRUE</button><br /><br /><button class=buttons001 onclick=q1c()>FALSE</button>"];

        var a = 0;
        a++;
        var b = 0;
        b++;

        function begin001() {
            disappear001.innerHTML = "";
            message001.innerHTML = question001[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
        }

        function q1c() {
            message003.innerHTML = "Correct";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function q1i() {
            message003.innerHTML = "Incorrect";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function next001() {
            if (a == "2") {
                message001.innerHTML = question001[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                message001.innerHTML = question001[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }


            else if (a == "4") {
                message001.innerHTML = question001[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                message001.innerHTML = question001[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "6") {
                message001.innerHTML = question001[5];
                message002.innerHTML = options006;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "7") {
                message001.innerHTML = question001[6];
                message002.innerHTML = options007;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "8") {
                message001.innerHTML = question001[7];
                message002.innerHTML = options008;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "9") {
                message001.innerHTML = question001[8];
                message002.innerHTML = options009;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "10") {
                message001.innerHTML = question001[9];
                message002.innerHTML = options010;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            } else {
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }
        }

        function repeat001() {
            location.reload();
        }
    </script>
