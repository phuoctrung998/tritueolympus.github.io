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

                    // disable box trả lời sau khi gửi
                    document.getElementById("q1").disabled = true;
                    document.getElementById("q2").disabled = true;
                    document.getElementById("q3").disabled = true;
                    document.getElementById("q4").disabled = true;
                    document.getElementById("q5").disabled = true;
                    document.getElementById("q6").disabled = true;
                    document.getElementById("q7").disabled = true;
                    document.getElementById("q8").disabled = true;
                    document.getElementById("q9").disabled = true;
                    document.getElementById("q10").disabled = true;
                    document.getElementById("q11").disabled = true;
                    document.getElementById("q12").disabled = true;
                    document.getElementById("q13").disabled = true;
                    document.getElementById("q14").disabled = true;
                    document.getElementById("q15").disabled = true;
                    document.getElementById("q16").disabled = true;
                    document.getElementById("q17").disabled = true;
                    document.getElementById("q18").disabled = true;
                    document.getElementById("q19").disabled = true;
                    document.getElementById("q20").disabled = true;

                    switch (c1) {
                        case 'Đại Cồ Việt':
                        case 'Đại cồ việt':
                        case 'Đại Cồ việt':
                        case 'đại cồ việt':
                        case 'đại cồ Việt':

                            count++;
                            document.getElementById("kq1").style.color = "#66FF33";
                    }
                    switch (c2) {
                        case 'Rap Việt':
                        case 'ráp Việt':
                        case 'rap việt':
                            count++;
                            document.getElementById("kq2").style.color = "#66FF33";
                    }
                    switch (c3) {
                        case '1000':
                            count++;
                            document.getElementById("kq3").style.color = "#66FF33";
                    }
                    switch (c4) {
                        case 'Hán':
                        case 'hán':
                        case 'chữ hán':
                        case 'Chữ Hán':
                        case 'Chữ hán':
                            count++;
                            document.getElementById("kq4").style.color = "#66FF33";
                    }
                    switch (c5) {
                        case 'Yershin':
                        case 'yeshin':
                        case 'yershin':
                            count++;
                            document.getElementById("kq5").style.color = "#66FF33";
                    }
                    switch (c6) {
                        case 'Phân lưu':
                        case 'phân lưu':
                        case 'Chi lưu':
                        case 'chi lưu':
                            count++;
                            document.getElementById("kq6").style.color = "#66FF33";
                    }
                    switch (c7) {
                        case 'Ngô Quyền':
                        case 'Ngô quyền':
                        case 'ngô quyền':
                        case 'Ngô Chúa':
                            count++;
                            document.getElementById("kq7").style.color = "#66FF33";
                    }
                    switch (c8) {
                        case 'Truyện Kiều':
                        case 'Truyện kiều':
                        case 'truyện kiều':
                            count++;
                            document.getElementById("kq8").style.color = "#66FF33";
                    }
                    switch (c9) {
                        case 'Axit béo':
                        case 'axit béo':
                            count++;
                            document.getElementById("kq9").style.color = "#66FF33";
                    }
                    switch (c10) {
                        case 'Bà Rịa-Vũng Tàu':
                        case 'Bà Rịa Vũng Tàu':
                        case 'Bà rịa-Vũng tàu':
                            count++;
                            document.getElementById("kq10").style.color = "#66FF33";
                    }
                    switch (c11) {
                        case 'Comb':
                        case 'comb':
                            count++;
                            document.getElementById("kq11").style.color = "#66FF33";
                    }
                    switch (c12) {
                        case 'Nghịch':
                        case 'nghịch':
                        case 'tỉ lệ nghịch':
                        case 'Tỉ lệ nghịch':
                            count++;
                            document.getElementById("kq12").style.color = "#66FF33";
                    }
                    switch (c13) {
                        case '2':
                        case 'hai':
                        case 'Hai':
                            count++;
                            document.getElementById("kq13").style.color = "#66FF33";
                    }
                    switch (c14) {
                        case 'Bóng chày':
                        case 'bóng chày':
                            count++;
                            document.getElementById("kq14").style.color = "#66FF33";
                    }
                    switch (c15) {
                        case 'Lượm':
                        case 'lượm':
                        case 'chú Lượm':
                        case 'chú lượm':
                            count++;
                            document.getElementById("kq15").style.color = "#66FF33";
                    }
                    switch (c16) {
                        case 'dạ dày':
                        case 'bao tử':
                        case 'Dạ dày':
                            count++;
                            document.getElementById("kq16").style.color = "#66FF33";
                    }
                    switch (c17) {
                        case 'Đức':
                        case 'đức':
                            count++;
                            document.getElementById("kq17").style.color = "#66FF33";
                    }
                    switch (c18) {
                        case 'Chánh án':
                        case 'chánh án':
                        case 'Chánh Án':
                            count++;
                            document.getElementById("kq18").style.color = "#66FF33";
                    }
                    switch (c19) {
                        case 'Buôn Ma Thuột':
                        case 'Buôn Mê Thuột':
                        case 'buôn ma thuột':
                        case 'buôn mê thuột':
                            count++;
                            document.getElementById("kq19").style.color = "#66FF33";
                    }
                    switch (c20) {
                        case 'Đàn tranh':
                        case 'đàn tranh':
                        case 'Đàn Tranh':
                            count++;
                            document.getElementById("kq20").style.color = "#66FF33";
                    }
                    //show kết quả
                    document.getElementById("asw1").innerHTML = "Đại Cồ Việt";
                    document.getElementById("asw2").innerHTML = "Rap Việt";
                    document.getElementById("asw3").innerHTML = "1000";
                    document.getElementById("asw4").innerHTML = "Hán";
                    document.getElementById("asw5").innerHTML = "Yershin";
                    document.getElementById("asw6").innerHTML = "Phân lưu";
                    document.getElementById("asw7").innerHTML = "Ngô Quyền";
                    document.getElementById("asw8").innerHTML = "Truyện Kiều";
                    document.getElementById("asw9").innerHTML = "Axit béo";
                    document.getElementById("asw10").innerHTML = "Bà Rịa-Vũng Tàu";
                    document.getElementById("asw11").innerHTML = "Comb";
                    document.getElementById("asw12").innerHTML = "Nghịch";
                    document.getElementById("asw13").innerHTML = "2";
                    document.getElementById("asw14").innerHTML = "Bóng chày";
                    document.getElementById("asw15").innerHTML = "Lượm";
                    document.getElementById("asw16").innerHTML = "Dạ dày";
                    document.getElementById("asw17").innerHTML = "Đức";
                    document.getElementById("asw18").innerHTML = "Chánh án";
                    document.getElementById("asw19").innerHTML = "Buôn Ma Thuột";
                    document.getElementById("asw20").innerHTML = "Đàn tranh";

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
        if (confirm("Gửi xong nhớ xem hình gợi ý nhé !!")) {
            if (confirm(" Sai chính tả không vậy ?")) {
                if (confirm(" Chốt, OK ?")) {
                    document.getElementById("aw1").disabled = true;
                    document.getElementById("aw2").disabled = true;
                    document.getElementById("aw3").disabled = true;
                    document.getElementById("aw4").disabled = true;


                    switch (cnv1) {
                        case 'tiền tệ':
                        case 'Tiền tệ':
                            count++;
                            document.getElementById("ch1").style.color = "#66FF33";
                            $("#abs1").hide();
                    }
                    switch (cnv2) {
                        case '1885':
                            count++;
                            document.getElementById("ch2").style.color = "#66FF33";
                            $("#abs2").hide();
                    }
                    switch (cnv3) {
                        case 'Việt Nam':
                        case 'việt nam':
                        case 'Việt nam':
                            count++;
                            document.getElementById("ch3").style.color = "#66FF33";
                            $("#abs3").hide();
                    }
                    switch (cnv4) {
                        case 'Pháp':
                        case 'pháp':

                            count++;
                            document.getElementById("ch4").style.color = "#66FF33";
                            $("#abs4").hide();
                    }


                    document.getElementById("test2").innerHTML = " Bạn đã trả lời đúng " + count + " hàng ngang";



                }
            }
        }
    }
}

function getall() {
    var allcnv = document.getElementById("challenge").value;
    var count = 0;
    var result = "ĐỒNG BẠC ĐÔNG DƯƠNG";

    if (confirm(" Xác nhận giải CNV, OK ?")) {
        if (confirm(" Chốt ?")) {
            document.getElementById("challenge").disabled = true;
            switch (allcnv) {
                case 'đồng bạc đông dương':
                case 'đồng bạc Đông Dương':
                case 'Đồng bạc Đông Dương':
                case 'Đồng bạc Đông dương':
                    count = count + 10;
                    document.getElementById("ch4").style.color = "#66FF33";
            }

            if (count == 10) {

                document.getElementById("test3").innerHTML = "Chúc mừng! CNV chính xác! " + " Bạn đã giành thêm được " + count + " điểm";
            } else {
                document.getElementById("test3").innerHTML = "Rất tiếc, CNV không chính xác. CNV cần tìm là " + result;
            }
        }
    }

}