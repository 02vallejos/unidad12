/*
El objetivo de este js es que cuando se haga click en los textos, se muestre una imagen
en referencia al tema que se esta solicitando.
*/

document.getElementById("eje_asm").onclick = function() {
    fun_1()
    };

document.getElementById("eje_basic").onclick = function() {
        fun_2()
        };

document.getElementById("eje_c").onclick = function() {
            fun_3()
            };



function fun_1() {
        document.getElementById("sec2_img_asm").style.display= "inherit";
        document.getElementById("sec2_img_bsc").style.display= "none";
        document.getElementById("sec2_img_c").style.display= "none";
        }

function fun_2() {
            document.getElementById("sec2_img_asm").style.display= "none";
            document.getElementById("sec2_img_bsc").style.display= "inherit";
            document.getElementById("sec2_img_c").style.display= "none";
            }

function fun_3() {
                document.getElementById("sec2_img_asm").style.display= "none";
                document.getElementById("sec2_img_bsc").style.display= "none";
                document.getElementById("sec2_img_c").style.display= "inherit";
                }