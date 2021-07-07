function getInputValue() {
    // Selecting the input element and get its value 
    var name = document.getElementById("name").value;
    var c1 = document.getElementById("q1").value;
    var c2 = document.getElementById("q2").value;
    var c3 = document.getElementById("q3").value;
    var c4 = document.getElementById("q4").value;
    var c5 = document.getElementById("q5").value;
    var c6 = document.getElementById("q6").value;
    var c7 = document.getElementById("q7").value;
    var c8 = document.getElementById("q8").value;
    var c9 = document.getElementById("q9").value;
    var c10 = document.getElementById("q10").value;
    var c11 = document.getElementById("q11").value;
    var c12 = document.getElementById("q12").value;
    var c13 = document.getElementById("q13").value;
    var c14 = document.getElementById("q14").value;
    var c15 = document.getElementById("q15").value;
    var c16 = document.getElementById("q16").value;
    var c17 = document.getElementById("q17").value;
    var c18 = document.getElementById("q18").value;
    var c19 = document.getElementById("q19").value;
    var c20 = document.getElementById("q20").value;

    var count = 0;
    if (confirm("Xác nhận gửi kết quả ?")) {
        if (confirm("Có cần xem lại không bạn trẻ ?")) {
            if (confirm(" Chắc chắn rồi chứ ?")) {
                if (confirm(" Không tiếc nha, OK ?")) {


                    switch (c1) {
                        case 'putaleng':
                        case 'Putaleng':
                            count++;
                            document.getElementById("kq1").style.color = "#66FF33";
                    }
                    switch (c2) {
                        case '1946':
                            count++;
                            document.getElementById("kq2").style.color = "#66FF33";
                    }
                    switch (c3) {
                        case 'rong biển':
                        case 'Rong biển':
                        case 'rong bien':
                            count++;
                            document.getElementById("kq3").style.color = "#66FF33";
                    }
                    switch (c4) {
                        case 'Tuyến giáp':
                        case 'tuyến giáp':
                        case 'giáp':
                        case 'Giáp':
                        case 'tuyen giap':
                            count++;
                            document.getElementById("kq4").style.color = "#66FF33";
                    }
                    switch (c5) {
                        case '1996':
                            count++;
                            document.getElementById("kq5").style.color = "#66FF33";
                    }
                    switch (c6) {
                        case 'Nhóm chức':
                        case 'nhóm chức':
                        case 'nhom chuc':
                        case 'chức':
                        case 'Chức':
                            count++;
                            document.getElementById("kq6").style.color = "#66FF33";
                    }
                    switch (c7) {
                        case 'captcha':
                        case 'capcha':
                        case 'Captcha':
                        case 'Capcha':
                            count++;
                            document.getElementById("kq7").style.color = "#66FF33";
                    }
                    switch (c8) {
                        case 'Chữ tượng hình':
                        case 'chữ tượng hình':
                        case 'tượng hình':
                        case 'Tượng hình':
                        case 'tuong hinh':
                            count++;
                            document.getElementById("kq8").style.color = "#66FF33";
                    }
                    switch (c9) {
                        case 'bền':
                        case 'Bền':
                        case 'ben':
                            count++;
                            document.getElementById("kq9").style.color = "#66FF33";
                    }
                    switch (c10) {
                        case 'Campuchia':
                        case 'campuchia':
                            count++;
                            document.getElementById("kq10").style.color = "#66FF33";
                    }
                    switch (c11) {
                        case '11':
                            count++;
                            document.getElementById("kq11").style.color = "#66FF33";
                    }
                    switch (c12) {
                        case 'Quảng Ngãi':
                        case 'Quang Ngai':
                        case 'quảng ngãi':
                        case 'quang ngai':
                            count++;
                            document.getElementById("kq12").style.color = "#66FF33";
                    }
                    switch (c13) {
                        case 'Bão từ':
                        case 'bão từ':
                        case 'Bão điện từ':
                        case 'bão điện từ':
                        case 'bão địa từ':
                        case 'Bão địa từ':
                        case 'bao tu':
                            count++;
                            document.getElementById("kq13").style.color = "#66FF33";
                    }
                    switch (c14) {
                        case 'Thí nghiệm':
                        case 'thí nghiệm':
                        case 'thi nghiem':
                            count++;
                            document.getElementById("kq14").style.color = "#66FF33";
                    }
                    switch (c15) {
                        case 'Suất điện động':
                        case 'suất điện động':
                        case 'suat dien dong':
                            count++;
                            document.getElementById("kq15").style.color = "#66FF33";
                    }
                    switch (c16) {
                        case 'Trần':
                        case 'trần':
                        case 'tran':
                        case 'Nhà Trần':
                        case 'nhà Trần':
                        case 'nhà trần':
                        case 'nha tran':
                            count++;
                            document.getElementById("kq16").style.color = "#66FF33";
                    }
                    switch (c17) {
                        case 'Cách mạng xanh':
                        case 'cách mạng xanh':
                        case 'cach mang xanh':
                            count++;
                            document.getElementById("kq17").style.color = "#66FF33";
                    }
                    switch (c18) {
                        case 'France':
                        case 'france':
                            count++;
                            document.getElementById("kq18").style.color = "#66FF33";
                    }
                    switch (c19) {
                        case 'Silic':
                        case 'silic':
                        case 'si':
                        case 'Si':
                        case 'SI':
                            count++;
                            document.getElementById("kq19").style.color = "#66FF33";
                    }
                    switch (c20) {
                        case 'Kim Liên':
                        case 'Kim liên':
                        case 'kim liên':
                        case 'kim lien':
                            count++;
                            document.getElementById("kq20").style.color = "#66FF33";
                    }


                    document.getElementById("test1").innerHTML = "Chúc mừng " + name + "!" + " Bạn trả lời đúng " + count + " câu hỏi";
                }
            }
        }
    }


}
$(document).ready(function() {
    $("#hn1").click(function() {
        $("#ch1").fadeIn();
    });
    $("#hn2").click(function() {
        $("#ch2").fadeIn();
    });
    $("#hn3").click(function() {
        $("#ch3").fadeIn();
    });
    $("#hn4").click(function() {
        $("#ch4").fadeIn();
    });
    $("#result").click(function() {
        $("#answer").fadeIn();
    });
});

function getask() {



    var cnv1 = document.getElementById("aw1").value;
    var cnv2 = document.getElementById("aw2").value;
    var cnv3 = document.getElementById("aw3").value;
    var cnv4 = document.getElementById("aw4").value;


    var count = 0;
    if (confirm("Bấm OK gửi kết quả luôn nè")) {
        if (confirm("Đùa đấy, bạn chắc chứ")) {
            if (confirm(" Sai chính tả không vậy ?")) {
                if (confirm(" Chốt, OK ?")) {
                    document.getElementById("aw1").disabled = true;
                    document.getElementById("aw2").disabled = true;
                    document.getElementById("aw3").disabled = true;
                    document.getElementById("aw4").disabled = true;

                    switch (cnv1) {
                        case 'a':
                        case 'A':
                            count++;
                            document.getElementById("ch1").style.color = "#66FF33";
                            $("#abs1").hide();
                    }
                    switch (cnv2) {
                        case 'B':
                        case 'b':
                            count++;
                            document.getElementById("ch2").style.color = "#66FF33";
                            $("#abs2").hide();
                    }
                    switch (cnv3) {
                        case 'C':
                        case 'c':
                            count++;
                            document.getElementById("ch3").style.color = "#66FF33";
                            $("#abs3").hide();
                    }
                    switch (cnv4) {
                        case 'D':
                        case 'd':
                            count++;
                            document.getElementById("ch4").style.color = "#66FF33";
                            $("#abs4").hide();
                    }


                    document.getElementById("test2").innerHTML = " Số điểm từ 4 hàng ngang gợi ý của bạn là " + count + " điểm";



                }
            }
        }
    }
}

function getall() {
    var allcnv = document.getElementById("challenge").value;
    var count = 0;
    var result = "ABCD";

    if (confirm(" Xác nhận giải CNV, OK ?")) {
        if (confirm(" Chốt ?")) {
            document.getElementById("challenge").disabled = true;
            switch (allcnv) {
                case 'ABCD':
                case 'abcd':
                    count = count + 10;
                    document.getElementById("ch4").style.color = "#66FF33";
            }

            if (count == 10) {

                document.getElementById("test3").innerHTML = "Chúc mừng! CNV chính xác" + " Bạn đã giành thêm được " + count + " điểm";
            } else {
                document.getElementById("test3").innerHTML = "Rất tiếc, CNV không chính xác. CNV cần tìm là " + result;
            }
        }
    }

}