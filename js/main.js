$(document).ready(function() {
    // ВВЕДЕННЯ ДАНИХ ВАРІАНТУ
    $('#var-data').click(function() {
        $('#vizok').val('3.05');
        $('#engine_w').val('45');
        $('#radius').val('400');
        $('#rail_height').val('50');
        $('#jorst-pruj').val('2500');
        $('#a_1a_2').val('12');
        $('#jorst-ressor').val('1200');
        $('#b_3b_4').val('10');
        $('#b_5').val('20');
        $('#2P').val('250');
        $('#xcd').val('1.67');
        $('#interval1').val('0.1');
        $('#interval2').val('0.1');
        $('#interval3').val('0.6');
        $('#interval4').val('0.1');
        $('#interval5').val('0.1');

    });

    // ВВЕДЕННЯ ДАНИХ ВАРІАНТУ БОДІ
    $('#var-data-bodia').click(function() {
        $('#vizok').val('3.15');
        $('#engine_w').val('43.5');
        $('#radius').val('200');
        $('#rail_height').val('150');
        $('#jorst-pruj').val('2350');
        $('#a_1a_2').val('14');
        $('#jorst-ressor').val('1700');
        $('#b_3b_4').val('10');
        $('#b_5').val('18');
        $('#2P').val('245');
        $('#xcd').val('1.68'); //ВИЗНАЧИТИ
        $('#interval1').val('0');
        $('#interval2').val('0.1');
        $('#interval3').val('0.6');
        $('#interval4').val('0.2');
        $('#interval5').val('0.1');

    });
    // ВВЕДЕННЯ ДАНИХ ВАРІАНТУ САНІ
    $('#var-data-sanya').click(function() {
        $('#vizok').val('3.20');
        $('#engine_w').val('43.5');
        $('#radius').val('350');
        $('#rail_height').val('50');
        $('#jorst-pruj').val('2350');
        $('#a_1a_2').val('16');
        $('#jorst-ressor').val('1600');
        $('#b_3b_4').val('10');
        $('#b_5').val('18');
        $('#2P').val('230');
        $('#xcd').val('1.62'); //ВИЗНАЧИТИ
    });
    $('#var-data-dimon').click(function() {
        $('#vizok').val('3.05');
        $('#engine_w').val('43.5');
        $('#radius').val('350');
        $('#rail_height').val('50');
        $('#jorst-pruj').val('2350');
        $('#a_1a_2').val('16');
        $('#jorst-ressor').val('1200');
        $('#b_3b_4').val('10');
        $('#b_5').val('20');
        $('#2P').val('250');
        $('#xcd').val('1.67'); //ВИЗНАЧИТИ
    });
    // ВВЕДЕННЯ ДАНИХ ВАРІАНТУ СЄРЬОГІ
    $('#var-data-sergo').click(function() {
        $('#engine_w').val('45');
        $('#radius').val('325');
        $('#rail_height').val('100');
        $('#jorst-pruj').val('2500');
        $('#a_1a_2').val('14');
        $('#jorst-ressor').val('1400');
        $('#b_3b_4').val('12');
        $('#b_5').val('16');
        $('#2P').val('240');
        $('#xcd').val('1.64'); //ВИЗНАЧИТИ
        $('#vizok').val('3.10');
        $('#interval1').val('0');
        $('#interval2').val('0.1');
        $('#interval3').val('0.6');
        $('#interval4').val('0.2');
        $('#interval5').val('0.1');
    });
    //РОЗДІЛ 1
    $('#calculate-1').click(function() {
        var ll = parseFloat($('#vizok').val()) + 1.46;
        $('#ll').val(ll);
        var bb = 2.2;
        var vizok = parseFloat($('#vizok').val())
        var xp_1 = (parseFloat($('#vizok').val()) / 2) - 0.7;
        $('#xp_1').val(xp_1);
        var xp_2 = (parseFloat($('#vizok').val()) / 2) + 0.7;
        $('#xp_2').val(xp_2);
        var xP_1 = (parseFloat($('#vizok').val()) / 2) - 0.475;
        $('#xP_1').val(xP_1);
        var xP_2 = (parseFloat($('#vizok').val()) / 2) + 0.475;
        $('#xP_2').val(xP_2);
        var xk = 0.59;
        var zn1 = 0.49;
        var zn2 = 0.29;
        var zm = 0.39;
        var xg = (parseFloat($('#vizok').val()) / 2) - 1.2;
        $('#xg').val(xg);
        //РОЗДІЛ 2

        //A

        var a1 = (parseFloat($('#a_1a_2').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        var a2 = a1;
        var a3 = 28;
        var a4 = a3;
        var a5 = 23; // З рисунку 1, для всіх одинаково
        $('#a1-text').text(a1);
        $('#a2-text').text(a2);
        $('#a3-text').text(a3);
        $('#a4-text').text(a4);
        $('#a5-text').text(a5);

        //B

        var b1 = 38; // Для всіх варіантів одинаково
        var b2 = b1;
        var b3 = (parseFloat($('#b_3b_4').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        var b4 = b3;
        $('#b1-text').text(b1);
        $('#b2-text').text(b2);
        $('#b3-text').text(b3);
        $('#b4-text').text(b4);
        var b5 = (parseFloat($('#b_5').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        $('#b5-text').text(b5);

        //F

        var fi1 = a1 * b1;
        $('#fi1-text').text(fi1);
        var fi2 = a2 * b2;
        $('#fi2-text').text(fi2);
        var fi3 = a3 * b3;
        $('#fi3-text').text(fi3);
        var fi4 = a4 * b4;
        $('#fi4-text').text(fi4);
        var fi5 = a5 * b5;
        $('#fi5-text').text(fi5);

        // Z

        var z1 = 0; //У всіх 0
        var z2 = z1;
        var z3 = -0.5 * (b1 + b3);
        var z4 = (0.5 * b2) + (0.5 * b4);
        var z5 = (0.5 * b2) + b4 + (0.5 * b5);
        $('#z1-text').text(z1);
        $('#z2-text').text(z2);
        $('#z3-text').text(z3);
        $('#z4-text').text(z4);
        $('#z5-text').text(z5);

        // S
        var s1 = fi1 * z1;
        var s2 = fi2 * z2;
        var s3 = fi3 * z3;
        var s4 = fi4 * z4;
        var s5 = fi5 * z5;
        $('#s1-text').text(s1);
        $('#s2-text').text(s2);
        $('#s3-text').text(s3);
        $('#s4-text').text(s4);
        $('#s5-text').text(s5);

        // Zi
        var Zc = (s1 + s2 + s3 + s4 + s5) / (fi1 + fi2 + fi3 + fi4 + fi5);
        var zi1 = z1 - Zc;
        var zi2 = z2 - Zc;
        var zi3 = z3 - Zc;
        var zi4 = z4 - Zc;
        var zi5 = z5 - Zc;
        $('#zi1-text').text(zi1);
        $('#zi2-text').text(zi2);
        $('#zi3-text').text(zi3);
        $('#zi4-text').text(zi4);
        $('#zi5-text').text(zi5);


        //ZiFi
        var z1f1 = zi1 * zi1 * fi1;
        var z2f2 = zi2 * zi2 * fi2;
        var z3f3 = zi3 * zi3 * fi3;
        var z4f4 = zi4 * zi4 * fi4;
        var z5f5 = zi5 * zi5 * fi5;
        $('#Z1F1-text').text(z1f1);
        $('#Z2F2-text').text(z2f2);
        $('#Z3F3-text').text(z3f3);
        $('#Z4F4-text').text(z4f4);
        $('#Z5F5-text').text(z5f5);

        //Jy0
        var jy01 = (a1 * Math.pow(b1, 3)) / 12;
        var jy02 = (a2 * Math.pow(b2, 3)) / 12;
        var jy03 = (a3 * Math.pow(b3, 3)) / 12;
        var jy04 = (a4 * Math.pow(b4, 3)) / 12;
        var jy05 = (a5 * Math.pow(b5, 3)) / 12;
        $('#jy01-text').text(jy01);
        $('#jy02-text').text(jy02);
        $('#jy03-text').text(jy03);
        $('#jy04-text').text(jy04);
        $('#jy05-text').text(jy05);

        //Jy0
        var jy1 = z1f1 + jy01;
        var jy2 = z2f2 + jy02;
        var jy3 = z3f3 + jy03;
        var jy4 = z4f4 + jy04;
        var jy5 = z5f5 + jy05;
        $('#jy1-text').text(jy1);
        $('#jy2-text').text(jy2);
        $('#jy3-text').text(jy3);
        $('#jy4-text').text(jy4);
        $('#jy5-text').text(jy5);


        // Summa 1
        var summa21_1 = a1 + a2 + a3 + a4 + a5;
        $('#summa21_1-text').text(summa21_1);
        var summa21_2 = b1 + b2 + b3 + b4 + b5;
        $('#summa21_2-text').text(summa21_2);
        var summa21_3 = fi1 + fi2 + fi3 + fi4 + fi5;
        $('#summa21_3-text').text(summa21_3);
        var summa21_4 = z1 + z2 + z3 + z4 + z5;
        $('#summa21_4-text').text(summa21_4);
        var summa21_5 = s1 + s2 + s3 + s4 + s5;
        $('#summa21_5-text').text(summa21_5);
        var summa21_6 = zi1 + zi2 + zi3 + zi4 + zi5;
        $('#summa21_6-text').text(summa21_6);
        var summa21_7 = z1f1 + z2f2 + z3f3 + z4f4 + z5f5;
        $('#summa21_7-text').text(summa21_7);
        var summa21_8 = jy01 + jy02 + jy03 + jy04 + jy05;
        $('#summa21_8-text').text(summa21_8);
        var summa21_9 = jy1 + jy2 + jy3 + jy4 + jy5;
        $('#summa21_9-text').text(summa21_9);

        //ТАБЛИЦЯ 2.2
        //A

        var a1 = (parseFloat($('#a_1a_2').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        var a2 = a1;
        var a3 = 28;
        var a4 = a3;
        var a5 = 23; // З рисунку 1, для всіх одинаково
        $('#2a1-text').text(a1);
        $('#2a2-text').text(a2);
        $('#2a3-text').text(a3);
        $('#2a4-text').text(a4);
        $('#2a5-text').text(a5);

        //B

        var b1 = 38; // Для всіх варіантів одинаково
        var b2 = b1;
        var b3 = (parseFloat($('#b_3b_4').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        var b4 = b3;
        $('#2b1-text').text(b1);
        $('#2b3-text').text(b3);
        $('#2b4-text').text(b4);
        $('#2b2-text').text(b2);
        var b5 = (parseFloat($('#b_5').val()) / 10); // Дані з ТАБЛИЦІ 2 для кожного варіанту свої
        $('#2b5-text').text(b5);

        //F

        var fi1 = a1 * b1;
        $('#2fi1-text').text(fi1);
        var fi2 = a2 * b2;
        $('#2fi2-text').text(fi2);
        var fi3 = a3 * b3;
        $('#2fi3-text').text(fi3);
        var fi4 = a4 * b4;
        $('#2fi4-text').text(fi4);
        var fi5 = a5 * b5;
        $('#2fi5-text').text(fi5);

        // Y
        var y1 = (-0.5 * 21) - (0.5 * a1);
        $('#y1-text').text(y1);
        var y2 = (0.5 * 21) + (0.5 * a2);
        $('#y2-text').text(y2);
        var y3 = 0;
        $('#y3-text').text(y3);
        var y4 = 0;
        $('#y4-text').text(y4);
        var y5 = 0;
        $('#y5-text').text(y5);

        //Y^2 * Fi
        var y2f1 = (Math.pow(y1, 2)) * fi1;
        $('#y2f1-text').text(y2f1);
        var y2f2 = (Math.pow(y2, 2)) * fi2;
        $('#y2f2-text').text(y2f2);
        var y2f3 = 0;
        $('#y2f3-text').text(y2f3);
        var y2f4 = 0;
        $('#y2f4-text').text(y2f4);
        var y2f5 = 0;
        $('#y2f5-text').text(y2f5); //3 - 5 значення = 0 по дефолту

        //2Jzi
        var Jz0i1 = (b1 * Math.pow(a1, 3) / 12);
        $('#Jz0i1-text').text(Jz0i1);
        var Jz0i2 = (b2 * Math.pow(a2, 3) / 12);
        $('#Jz0i2-text').text(Jz0i2);
        var Jz0i3 = (b3 * Math.pow(a3, 3) / 12);
        $('#Jz0i3-text').text(Jz0i3);
        var Jz0i4 = (b4 * Math.pow(a4, 3) / 12);
        $('#Jz0i4-text').text(Jz0i4);
        var Jz0i5 = (b5 * Math.pow(a5, 3) / 12);
        $('#Jz0i5-text').text(Jz0i5);

        //Jzi //СПИТАТИ!!!!!!!!!!!!!!!!!!
        var Jzi1 = Jz0i1 + y2f1;
        $('#Jzi1-text').text(Jzi1);
        var Jzi2 = Jz0i2 + y2f2;
        $('#Jzi2-text').text(Jzi2);
        var Jzi3 = Jz0i3 + y2f3;
        $('#Jzi3-text').text(Jzi3);
        var Jzi4 = Jz0i4 + y2f4;
        $('#Jzi4-text').text(Jzi4);
        var Jzi5 = Jz0i5 + y2f5;
        $('#Jzi5-text').text(Jzi5);

        // 2.2 SUMMA
        var summa22_1 = a1 + a2 + a3 + a4 + a5;
        $('#summa22_1-text').text(summa22_1);
        var summa22_2 = b1 + b2 + b3 + b4 + b5;
        $('#summa22_2-text').text(summa22_2);
        var summa22_3 = fi1 + fi2 + fi3 + fi4 + fi5;
        $('#summa22_3-text').text(summa22_3);
        var summa22_4 = y1 + y2 + y3 + y4 + y5;
        $('#summa22_4-text').text(summa22_4);
        var summa22_5 = y2f1 + y2f2 + y2f3 + y2f4 + y2f5;
        $('#summa22_5-text').text(summa22_5);
        var summa22_6 = Jz0i1 + Jz0i2 + Jz0i3 + Jz0i4 + Jz0i5;
        $('#summa22_6-text').text(summa22_6);
        var summa22_7 = Jzi1 + Jzi2 + Jzi3 + Jzi4 + Jzi5;
        $('#summa22_7-text').text(summa22_7);

        // WyA, Zmax...
        var zmax = Zc + 0.5 * b2 + b3;
        $('#zmax-text').text(zmax);
        var WyA = summa21_9 / zmax;
        $('#WyA-text').text(WyA);
        var Ymax = 0.5 * a3;
        $('#Ymax-text').text(Ymax);
        var WzA = summa22_7 / Ymax;
        $('#WzA-text').text(WzA);

        // РОЗДІЛ 3
        var PP = parseFloat($('#2P').val());
        var engine_w = parseFloat($('#engine_w').val());
        var Pnp = 38 + (engine_w / 2); //Табличка
        var F = summa21_3;
        var q = 2.2 + 0.012 * F; // Табличка
        $('#q-text').text(q);
        $('#Pnp-text').text(Pnp);
        var Pkb = 0.2 * q * bb; //Табличка
        $('#Pkb-text').text(Pkb);
        var Psh = q * bb; //Табличка
        $('#Psh-text').text(Psh);
        var Pb = q * ll; // Табличка
        $('#Pb-text').text(Pb);
        var Pp = 2 * Pb + Psh + 2 * Pkb + engine_w; //Табличка
        $('#Pp-text').text(Pp);
        var Pv = Pp + 2 * Pnp; //Вага візка + табличка
        $('#Pv-text').text(Pv);
        var Pkuzova_k = 2 * PP - Pv; //Вага кузова (Pp) + табличка
        $('#Pkuzova_k-text').text(Pkuzova_k);
        var Ppidres = Pp + Pkuzova_k; //  Заг вага підресореної частини + табличка
        $('#Ppidres-text').text(Ppidres);
        var Rb = (PP - Pnp) / 4; //Табличка
        $('#Rb-text').text(Rb);

        //РОЗДІЛ 4
        var l = ll / 2;
        var b = bb / 2;
        var Myb = (Rb * (xp_1 + xp_2)) - (0.5 * q * (Math.pow(l, 2))) - (0.2 * q * b * l) - (0.25 * Pkuzova_k * xk);
        $('#Myb-text').text(Myb);
        $('#Rb-text').text(Rb);
        $('#xp_1-text').text(xp_1);
        $('#xp_2-text').text(xp_2);
        $('#q-text').text(q);
        $('#l-text').text(l);
        $('#b-text').text(b);
        $('#Pkuzova_k-text').text(Pkuzova_k);
        $('#xk-text').text(xk);
        var Wy1 = summa21_9 / zmax;
        var sigmav1 = 1000 * (Myb / Wy1)
        $('#sigmav1-text').text(sigmav1);

        //РОЗДІЛ 5
        var a = (parseFloat($('#vizok').val()) / 2);
        var P1 = P2 = P3 = P4 = P5 = 0.25 * (PP / 2);
        $('#P1-text').text(P1);
        // ТАБЛИЦЯ 5.1
        var xc1 = 0.5;
        var xc2 = 1;
        var xc3 = 1.25;
        var xc4 = 1.5;
        var xc5 = 1.75;

        //Xc1 - 0.5
        var x1_xc1 = xc1 + a; //x1
        var f = 0.25;
        var s = 0.8;
        $('#x1_xc1-text').text(x1_xc1.toFixed(4));
        var d1_xc1 = Math.sqrt(Math.pow(x1_xc1, 2) + Math.pow(s, 2)); //d1
        $('#d1_xc1-text').text(d1_xc1.toFixed(4));
        var cosa1_xc1 = x1_xc1 / d1_xc1; //cos a1
        $('#cosa1_xc1-text').text(cosa1_xc1.toFixed(4));
        var x2_xc1 = xc1 - a; //x2
        $('#x2_xc1-text').text(x2_xc1.toFixed(4));
        var d2_xc1 = Math.sqrt(Math.pow(x2_xc1, 2) + Math.pow(s, 2)); //d2
        $('#d2_xc1-text').text(d2_xc1.toFixed(4));
        var cosa2_xc1 = x2_xc1 / d2_xc1; //cos a2
        $('#cosa2_xc1-text').text(cosa2_xc1.toFixed(4));
        var cosai_xc1 = (x1_xc1 / d1_xc1) + (x2_xc1 / d2_xc1); //cos ai
        $('#cosai_xc1-text').text(cosai_xc1.toFixed(4));
        var A1_xc1 = xc1 * ((x1_xc1 / d1_xc1) + (x2_xc1 / d2_xc1)); //A1
        $('#A1_xc1-text').text(A1_xc1.toFixed(4));
        var d_summa_xc1 = d1_xc1 + d2_xc1; //d1 + d2
        $('#d_summa_xc1-text').text(d_summa_xc1.toFixed(4));
        var A2_xc1 = (d1_xc1 + d2_xc1) - A1_xc1; //A2
        $('#A2_xc1-text').text(A2_xc1.toFixed(4));
        var Y1_xc1 = A2_xc1 * ((f * PP) / a); //Y1
        $('#Y1_xc1-text').text(Y1_xc1.toFixed(4));
        //

        //Xc2 - 1.0
        var x1_xc2 = xc2 + a; //x1
        var f = 0.25;
        var s = 0.8;
        $('#x1_xc2-text').text(x1_xc2.toFixed(4));
        var d1_xc2 = Math.sqrt(Math.pow(x1_xc2, 2) + Math.pow(s, 2)); //d1
        $('#d1_xc2-text').text(d1_xc2.toFixed(4));
        var cosa1_xc2 = x1_xc2 / d1_xc2; //cos a1
        $('#cosa1_xc2-text').text(cosa1_xc2.toFixed(4));
        var x2_xc2 = xc2 - a; //x2
        $('#x2_xc2-text').text(x2_xc2.toFixed(4));
        var d2_xc2 = Math.sqrt(Math.pow(x2_xc2, 2) + Math.pow(s, 2)); //d2
        $('#d2_xc2-text').text(d2_xc2.toFixed(4));
        var cosa2_xc2 = x2_xc2 / d2_xc2; //cos a2
        $('#cosa2_xc2-text').text(cosa2_xc2.toFixed(4));
        var cosai_xc2 = (x1_xc2 / d1_xc2) + (x2_xc2 / d2_xc2); //cos ai
        $('#cosai_xc2-text').text(cosai_xc2.toFixed(4));
        var A1_xc2 = xc2 * ((x1_xc2 / d1_xc2) + (x2_xc2 / d2_xc2)); //A1
        $('#A1_xc2-text').text(A1_xc2.toFixed(4));
        var d_summa_xc2 = d1_xc2 + d2_xc2; //d1 + d2
        $('#d_summa_xc2-text').text(d_summa_xc2.toFixed(4));
        var A2_xc2 = (d1_xc2 + d2_xc2) - A1_xc2; //A2
        $('#A2_xc2-text').text(A2_xc2.toFixed(4));
        var Y1_xc2 = A2_xc2 * ((f * PP) / a); //Y1
        $('#Y1_xc2-text').text(Y1_xc2.toFixed(4));
        //

        //Xc3 - 1.25
        var x1_xc3 = xc3 + a; //x1
        var f = 0.25;
        var s = 0.8;
        $('#x1_xc3-text').text(x1_xc3.toFixed(4));
        var d1_xc3 = Math.sqrt(Math.pow(x1_xc3, 2) + Math.pow(s, 2)); //d1
        $('#d1_xc3-text').text(d1_xc3.toFixed(4));
        var cosa1_xc3 = x1_xc3 / d1_xc3; //cos a1
        $('#cosa1_xc3-text').text(cosa1_xc3.toFixed(4));
        var x2_xc3 = xc3 - a; //x2
        $('#x2_xc3-text').text(x2_xc3.toFixed(4));
        var d2_xc3 = Math.sqrt(Math.pow(x2_xc3, 2) + Math.pow(s, 2)); //d2
        $('#d2_xc3-text').text(d2_xc3.toFixed(4));
        var cosa2_xc3 = x2_xc3 / d2_xc3; //cos a2
        $('#cosa2_xc3-text').text(cosa2_xc3.toFixed(4));
        var cosai_xc3 = (x1_xc3 / d1_xc3) + (x2_xc3 / d2_xc3); //cos ai
        $('#cosai_xc3-text').text(cosai_xc3.toFixed(4));
        var A1_xc3 = xc3 * ((x1_xc3 / d1_xc3) + (x2_xc3 / d2_xc3)); //A1
        $('#A1_xc3-text').text(A1_xc3.toFixed(4));
        var d_summa_xc3 = d1_xc3 + d2_xc3; //d1 + d2
        $('#d_summa_xc3-text').text(d_summa_xc3.toFixed(4));
        var A2_xc3 = (d1_xc3 + d2_xc3) - A1_xc3; //A2
        $('#A2_xc3-text').text(A2_xc3.toFixed(4));
        var Y1_xc3 = A2_xc3 * ((f * PP) / a); //Y1
        $('#Y1_xc3-text').text(Y1_xc3.toFixed(4));
        //

        //Xc4 - 1.5
        var x1_xc4 = xc4 + a; //x1
        var f = 0.25;
        var s = 0.8;
        $('#x1_xc4-text').text(x1_xc4.toFixed(4));
        var d1_xc4 = Math.sqrt(Math.pow(x1_xc4, 2) + Math.pow(s, 2)); //d1
        $('#d1_xc4-text').text(d1_xc4.toFixed(4));
        var cosa1_xc4 = x1_xc4 / d1_xc4; //cos a1
        $('#cosa1_xc4-text').text(cosa1_xc4.toFixed(4));
        var x2_xc4 = xc4 - a; //x2
        $('#x2_xc4-text').text(x2_xc4.toFixed(4));
        var d2_xc4 = Math.sqrt(Math.pow(x2_xc4, 2) + Math.pow(s, 2)); //d2
        $('#d2_xc4-text').text(d2_xc4.toFixed(4));
        var cosa2_xc4 = x2_xc4 / d2_xc4; //cos a2
        $('#cosa2_xc4-text').text(cosa2_xc4.toFixed(4));
        var cosai_xc4 = (x1_xc4 / d1_xc4) + (x2_xc4 / d2_xc4); //cos ai
        $('#cosai_xc4-text').text(cosai_xc4.toFixed(4));
        var A1_xc4 = xc4 * ((x1_xc4 / d1_xc4) + (x2_xc4 / d2_xc4)); //A1
        $('#A1_xc4-text').text(A1_xc4.toFixed(4));
        var d_summa_xc4 = d1_xc4 + d2_xc4; //d1 + d2
        $('#d_summa_xc4-text').text(d_summa_xc4.toFixed(4));
        var A2_xc4 = (d1_xc4 + d2_xc4) - A1_xc4; //A2
        $('#A2_xc4-text').text(A2_xc4.toFixed(4));
        var Y1_xc4 = A2_xc4 * ((f * PP) / a); //Y1
        $('#Y1_xc4-text').text(Y1_xc4.toFixed(4));
        //
        //Xc5 - 1.75
        var x1_xc5 = xc5 + a; //x1
        var f = 0.25;
        var s = 0.8;
        $('#x1_xc5-text').text(x1_xc5.toFixed(4));
        var d1_xc5 = Math.sqrt(Math.pow(x1_xc5, 2) + Math.pow(s, 2)); //d1
        $('#d1_xc5-text').text(d1_xc5.toFixed(4));
        var cosa1_xc5 = x1_xc5 / d1_xc5; //cos a1
        $('#cosa1_xc5-text').text(cosa1_xc5.toFixed(4));
        var x2_xc5 = xc5 - a; //x2
        $('#x2_xc5-text').text(x2_xc5.toFixed(4));
        var d2_xc5 = Math.sqrt(Math.pow(x2_xc5, 2) + Math.pow(s, 2)); //d2
        $('#d2_xc5-text').text(d2_xc5.toFixed(4));
        var cosa2_xc5 = x2_xc5 / d2_xc5; //cos a2
        $('#cosa2_xc5-text').text(cosa2_xc5.toFixed(4));
        var cosai_xc5 = (x1_xc5 / d1_xc5) + (x2_xc5 / d2_xc5); //cos ai
        $('#cosai_xc5-text').text(cosai_xc5.toFixed(4));
        var A1_xc5 = xc5 * ((x1_xc5 / d1_xc5) + (x2_xc5 / d2_xc5)); //A1
        $('#A1_xc5-text').text(A1_xc5.toFixed(4));
        var d_summa_xc5 = d1_xc5 + d2_xc5; //d1 + d2
        $('#d_summa_xc5-text').text(d_summa_xc5.toFixed(4));
        var A2_xc5 = (d1_xc5 + d2_xc5) - A1_xc5; //A2
        $('#A2_xc5-text').text(A2_xc5.toFixed(4));
        var Y1_xc5 = A2_xc5 * ((f * PP) / a); //Y1
        $('#Y1_xc5-text').text(Y1_xc5.toFixed(4));
        //
        // C
        var xcd = parseFloat($('#xcd').val());
        var h = parseFloat($('#rail_height').val()) / 1000;
        var Y1_xcd = 90;
        var x1_xcd = xcd + a;
        var x2_xcd = xcd - a;
        var d1_xcd = Math.sqrt(Math.pow(x1_xcd, 2) + Math.pow(s, 2));
        var d2_xcd = Math.sqrt(Math.pow(x2_xcd, 2) + Math.pow(s, 2));
        var C = Y1_xcd - (f * PP * ((x1_xcd / d1_xcd) + (x2_xcd / d2_xcd))); //C
        $('#C-text').text(C.toFixed(4));
        var radius = parseFloat($('#radius').val());
        var Vd = 7.97 * Math.sqrt((radius * C) / PP); //без підвищення рейки
        $('#Vd-text').text(Vd.toFixed(4));
        var Kdp = radius * ((C / PP) + (h / s));
        var Vdp = 7.97 * Math.sqrt(Kdp);
        $('#Vdp-text').text(Vdp.toFixed(4));
        // Умова комфорної їзди
        var Vdk = 3.6 * Math.sqrt(0.7 * radius);
        $('#Vdk-text').text(Vdk.toFixed(4));
        var sqrt_text = Math.sqrt(radius * (0.7 + (h * 9.81 / 1.6)));
        var Vdpk = 3.6 * sqrt_text;
        $('#Vdpk-text').text(Vdpk.toFixed(4));

        //РОЗДІЛ 6
        var radius_1 = 600;
        var V_konstruk = 100;
        var Cpd = (2 * (PP - Pnp) / 9.81) * (Math.pow(Vd, 2) / (radius * 12.96)); //1 формула
        $('#Cpd-text').text(Cpd.toFixed(4));
        var blabla = h * 9.81 / 1.6;
        var Cpd_h_1 = (2 * (PP - Pnp)) / 9.81;
        var Cpd_h_2 = (Math.pow(Vdp, 2)) / (radius * 12.96);
        var Cpd_h = Cpd_h_1 * (Cpd_h_2 - blabla); // 2 формула
        $('#Cpd_h-text').text(Cpd_h.toFixed(4));
        var Cpd_h_k = (2 * (PP - Pnp) / 9.81) * ((Math.pow(V_konstruk, 2) / (radius_1 * 12.96)) - blabla); // 2 формула і кастомні дані
        $('#Cpd_h_k-text').text(Cpd_h_k.toFixed(4));
        var Rc = 0.181 * Cpd; //1 формула
        $('#Rc-text').text(Rc.toFixed(4));
        var Rc_h = 0.181 * Cpd_h; // 2 формула
        $('#Rc_h-text').text(Rc_h.toFixed(4));
        var Rc_h_k = 0.181 * Cpd_h_k; // 2 формула і кастомні дані
        $('#Rc_h_k-text').text(Rc_h_k.toFixed(4));
        var Hc = Cpd / 8; //1 формула
        $('#Hc-text').text(Hc.toFixed(4));
        var Hc_h = Cpd_h / 8; // 2 формула
        $('#Hc_h-text').text(Hc_h.toFixed(4));
        var Hc_h_k = Cpd_h_k / 8; // 2 формула і кастомні дані
        $('#Hc_h_k-text').text(Hc_h_k.toFixed(4));
        //
        var P = PP / 2;
        var Np1 = f * P * (Math.pow(0.8, 2) / (2.2 * d1_xcd));
        $('#Np1-text').text(Np1.toFixed(4));
        //
        var Np2 = f * P * (Math.pow(0.8, 2) / (2.2 * d2_xcd));
        $('#Np2-text').text(Np2.toFixed(4));

        var Hp = (Np1 + Np2) * b / vizok;
        $('#Hp-text').text(Hp.toFixed(4));

        //РОЗДІЛ 7
        var My = Rc * vizok;
        $('#My-text').text(My.toFixed(4));
        var Mz = (Hp + Hc) * vizok;
        var test = Hp + Hc;
        $('#Mz-text').text(Mz.toFixed(4));
        var sigma_y = My / WyA;
        $('#sigma_y-text').text(sigma_y.toFixed(4));
        var sigma_z = Mz / WzA;
        $('#sigma_z-text').text(sigma_z.toFixed(4));
        var sigma_kr = sigma_y + sigma_z; //сумма
        $('#sigma_kr-text').text(sigma_kr.toFixed(4));

        //РОЗДІЛ 8

        var Db = 1.25;
        var Ld = 1.2;

        // V = 0 //
        var Fd = (0.28 + (4 / 50 + (6 * 0)) - 0.0006 * 0) * PP; //ЗМІННИЙ
        $('#v0_fd-text').text(Fd.toFixed(4));
        var Pdt = 0.52 * Fd;
        $('#v0_pdt-text').text(Pdt.toFixed(4));
        // V = 100 //
        var Fd_100 = ((0.28 + (4 / (50 + (6 * 100)))) - 0.06) * PP;
        $('#v_100-vd-text').text(Fd_100.toFixed(4));
        var Pdt_100 = 0.52 * Fd_100;
        $('#v_100-pdt-text').text(Pdt_100.toFixed(4));
        // V = Vд (без підвищення) //
        var Fd_vd = ((0.28 + (4 / (50 + (6 * Vd)))) - 0.0006 * Vd) * PP;
        $('#vd_fd-text').text(Fd_vd.toFixed(4));
        var Pdt_vd = 0.52 * Fd_vd;
        $('#vd_pdt-text').text(Pdt_vd.toFixed(4));
        // V = Vдп (з підвищенням) //
        var Fd_vdp = ((0.28 + (4 / (50 + (6 * Vdp)))) - 0.0006 * Vdp) * PP;
        $('#vdp_fd-text').text(Fd_vdp.toFixed(4));
        var Pdt_vdp = 0.52 * Fd_vdp;
        $('#vdp_pdt-text').text(Pdt_vdp.toFixed(4));


        //Rt
        var xd = a - 1.2;

        //V = 0
        var Rt_0 = (Pdt * xd) / (4 * a);
        $('#Rt_0-text').text(Rt_0.toFixed(4));
        var Rt_100 = (Pdt_100 * xd) / (4 * a);
        $('#Rt_100-text').text(Rt_100.toFixed(4));
        var Rt_Vd = (Pdt_vd * xd) / (4 * a);
        $('#Rt_Vd-text').text(Rt_Vd.toFixed(4));
        var Rt_Vdp = (Pdt_vdp * xd) / (4 * a);
        $('#Rt_Vdp-text').text(Rt_Vdp.toFixed(4));

        //9 розділ
        var xp_1_2 = vizok;
        var zp_1_2 = 0.79;

        //V = 0
        Myt_0 = (Rt_0 * (xp_1_2)) + (0.25 * Fd * (zp_1_2));
        $('#Myt_0-text').text(Myt_0.toFixed(4));
        //V = 100
        Myt_100 = (Rt_100 * (xp_1_2)) + (0.25 * Fd_100 * (zp_1_2));
        $('#Myt_100-text').text(Myt_100.toFixed(4));
        //V = Vd
        Myt_Vd = (Rt_Vd * (xp_1_2)) + (0.25 * Fd_vd * (zp_1_2));
        $('#Myt_Vd-text').text(Myt_Vd.toFixed(4));
        //V = Vd
        Myt_Vdp = (Rt_Vdp * (xp_1_2)) + (0.25 * Fd_vdp * (zp_1_2));
        $('#Myt_Vdp-text').text(Myt_Vdp.toFixed(4));

        //SigmaTG
        //V = 0
        var sigma_tg_0 = Myt_0 / WyA;
        $('#sigma_0-text').text(sigma_tg_0);

        //V = 100
        var sigma_tg_100 = Myt_100 / WyA;
        $('#sigma_100-text').text(sigma_tg_100);

        //V = Vd
        var sigma_tg_Vd = Myt_Vd / WyA;
        $('#sigma_Vd-text').text(sigma_tg_Vd);

        //V = Vdp
        var sigma_tg_Vdp = Myt_Vdp / WyA;
        $('#sigma_Vdp-text').text(sigma_tg_Vdp);

        // 10 РОЗДІЛ
        var jorst_pruj = parseFloat($('#jorst-pruj').val());
        var jorst_ressor = parseFloat($('#jorst-ressor').val());
        var delta_f = ((2 * vizok) + 5.7) / 1000;
        $('#delta-f-text').text(delta_f.toFixed(4));
        var ekv_jorst = ((4 * jorst_pruj * jorst_ressor) / ((2 * jorst_pruj) + jorst_ressor));
        $('#ekv_jorst-text').text(ekv_jorst.toFixed(4));
        var once_jorst = ekv_jorst / 2;
        $('#once_jorst-text').text(once_jorst.toFixed(4));
        var Rks = (0.05 * ((PP - Pnp) / 4)) + ((delta_f * once_jorst) / 2);
        $('#Rks-text').text(Rks.toFixed(4));

        // 11 РОЗДІЛ
        var Myks = Rks * vizok;
        $('#Myks-text').text(Myks.toFixed(4));
        var sigma_ks = Myks / WyA;
        $('#sigma_ks-text').text(sigma_ks.toFixed(4));

        // 12 РОЗДІЛ
        var fst = ((PP - Pnp) / ekv_jorst);
        $('#fst-text').text(fst.toFixed(4));

        // Швидкість м/с
        var ms_vd = Vd / 3.6;
        $('#ms_vd-text').text(ms_vd.toFixed(4));
        var ms_vdp = Vdp / 3.6;
        $('#ms_vdp-text').text(ms_vdp.toFixed(4));
        var ms_100 = 100 / 3.6;
        $('#ms_100-text').text(ms_100.toFixed(4));

        //Kd
        var Kd = (0.006 / fst) + 0.004;
        var Kd_Vd = Kd * Math.sqrt(ms_vd);
        $('#Kd_Vd-text').text(Kd_Vd.toFixed(4));
        var Kd_Vdp = Kd * Math.sqrt(ms_vdp);
        $('#Kd_Vdp-text').text(Kd_Vdp.toFixed(4));
        var Kd_100 = Kd * Math.sqrt(ms_100);
        $('#Kd_100-text').text(Kd_100.toFixed(4));

        //sigma-a
        var sigma_a_vd = Kd_Vd * sigmav1;
        $('#sigma_a_vd-text').text(sigma_a_vd.toFixed(4));
        var sigma_a_vdp = Kd_Vdp * sigmav1;
        $('#sigma_a_vdp-text').text(sigma_a_vdp.toFixed(4));
        var sigma_a_100 = Kd_100 * sigmav1;
        $('#sigma_a_100-text').text(sigma_a_100.toFixed(4));

        // 13 РОЗДІЛ
        //ДИНАМІЧНЕ НАВАНТАЖЕННЯ σа
        var Kd0 = Kd * Math.sqrt(0)
        var sigma_a_k = 0;
        $('#sigma_a_k-text').text(sigma_a_k.toFixed(4));
        var sigma_a_vd = Kd_Vd * sigmav1;
        $('#sigma_a_vd1-text').text(sigma_a_vd.toFixed(4));
        var sigma_a_vdp = Kd_Vdp * sigmav1;
        $('#sigma_a_vdp1-text').text(sigma_a_vdp.toFixed(4));
        var sigma_a_100 = Kd_100 * sigmav1;
        $('#sigma_a_1001-text').text(sigma_a_100.toFixed(4));

        var sigma1_t = sigmav1;
        $('#sigma1_t-text').text(sigma1_t.toFixed(4));
        var sigma2_t = sigmav1;
        $('#sigma2_t-text').text(sigma2_t.toFixed(4));
        var sigma3_t = sigmav1;
        $('#sigma3_t-text').text(sigma3_t.toFixed(4));
        var sigma4_t = sigmav1;
        $('#sigma4_t-text').text(sigma4_t.toFixed(4));

        //SigmaTG
        //V = 0
        var sigma_tg1_0 = sigma_tg_0 * 1000;
        $('#sigma_tg1_0-text').text(sigma_tg1_0.toFixed(4));

        //V = 100
        var sigma_tg1_100 = sigma_tg_100 * 1000;
        $('#sigma_tg1_100-text').text(sigma_tg1_100.toFixed(4));

        //V = Vd
        var sigma_tg1_Vd = sigma_tg_Vd * 1000;
        $('#sigma_tg1_Vd-text').text(sigma_tg1_Vd.toFixed(4));

        //V = Vdp
        var sigma_tg1_Vdp = sigma_tg_Vdp * 1000;
        $('#sigma_tg1_Vdp').text(sigma_tg1_Vdp.toFixed(4));

        //SIGMA KS
        var sigma_ks_t1 = sigma_ks * 1000;
        $('#sigma_ks_t1').text(sigma_ks_t1.toFixed(4));
        var sigma_ks_t2 = sigma_ks * 1000;
        $('#sigma_ks_t2').text(sigma_ks_t2.toFixed(4));
        var sigma_ks_t3 = sigma_ks * 1000;
        $('#sigma_ks_t3').text(sigma_ks_t3.toFixed(4));
        var sigma_ks_t4 = sigma_ks * 1000;
        $('#sigma_ks_t4').text(sigma_ks_t4.toFixed(4));

        //SIGMA KR
        var sigma_kr_t1 = sigma_kr * 1000;
        $('#sigma_kr_t1-text').text(sigma_kr_t1.toFixed(4));
        var sigma_kr_t2 = sigma_kr * 1000;
        $('#sigma_kr_t2-text').text(sigma_kr_t2.toFixed(4));
        var sigma_kr_t3 = sigma_kr * 1000;
        $('#sigma_kr_t3-text').text(sigma_kr_t3.toFixed(4));
        var sigma_kr_t4 = sigma_kr * 1000;
        $('#sigma_kr_t4-text').text(sigma_kr_t4.toFixed(4));

        //Summa_sigma
        var Summa_Sigma_t1 = sigma1_t + sigma_tg1_0 + sigma_ks_t1 + sigma_kr_t1;
        $('#Summa_Sigma_t1').text(Summa_Sigma_t1.toFixed(4));

        var Summa_Sigma_t2 = sigma1_t + sigma_tg1_Vd + sigma_ks_t2 + sigma_kr_t2;
        $('#Summa_Sigma_t2').text(Summa_Sigma_t2.toFixed(4));

        var Summa_Sigma_t3 = sigma3_t + sigma_tg1_Vdp + sigma_ks_t3 + sigma_kr_t3;
        $('#Summa_Sigma_t3').text(Summa_Sigma_t3.toFixed(4));

        var Summa_Sigma_t4 = sigma1_t + sigma_tg1_100 + sigma_ks_t2 + sigma_kr_t2;
        $('#Summa_Sigma_t4').text(Summa_Sigma_t4.toFixed(4));

        //Summa_Sigma_2
        var Summa_Sigma_t11 = sigma_a_k + Summa_Sigma_t1;
        $('#Summa_Sigma_t11').text(Summa_Sigma_t11.toFixed(4));

        var Summa_Sigma_t22 = sigma_a_vd + Summa_Sigma_t2;
        $('#Summa_Sigma_t22').text(Summa_Sigma_t22.toFixed(4));

        var Summa_Sigma_t33 = sigma_a_vdp + Summa_Sigma_t3;
        $('#Summa_Sigma_t33').text(Summa_Sigma_t33.toFixed(4));

        var Summa_Sigma_t44 = sigma_a_100 + Summa_Sigma_t4;
        $('#Summa_Sigma_t44').text(Summa_Sigma_t44.toFixed(4));

        //14 РОЗДІЛ
        var K1 = 1.1;
        var K2 = 1.05;
        var y = 0.7;
        var mp = 0.8;
        var BetaK = 1.1
        var K = ((K1 * K2) / (y * mp)) * BetaK;
        $('#K-text').text(K.toFixed(4));
        var Fi_beta = 0.3;
        var sigma_1 = 140;
        var sigma_a = sigma_a_100;
        var sigma_m = 1;
        var np = sigma_1 / ((K * sigma_a_100) + (Fi_beta * Summa_Sigma_t4));
        $('#np-text').text(np.toFixed(4));

        //15 РОЗДІЛ
        var pkp = 0.3;
        var ptg = 0.8;
        var sigma_my = sigmav1 + pkp * (sigma_kr_t4 + sigma_ks_t4) + ptg * sigma_tg1_100;
        $('#sigma_my-text').text(sigma_my.toFixed(4));

        var interval1 = parseFloat($('#interval1').val());
        var interval2 = parseFloat($('#interval2').val());
        var interval3 = parseFloat($('#interval3').val());
        var interval4 = parseFloat($('#interval4').val());
        var interval5 = parseFloat($('#interval5').val());

        //Vic (м/с)
        var Vic_10 = 10 / 3.6;
        $('#Vic_10-text').text(Vic_10.toFixed(4));

        var Vic_30 = 30 / 3.6;
        $('#Vic_30-text').text(Vic_30.toFixed(4));

        var Vic_50 = 50 / 3.6;
        $('#Vic_50-text').text(Vic_50.toFixed(4));

        var Vic_70 = 70 / 3.6;
        $('#Vic_70-text').text(Vic_70.toFixed(4));

        var Vic_90 = 90 / 3.6;
        $('#Vic_90-text').text(Vic_90.toFixed(4));

        var Vic_summa = Vic_10 + Vic_30 + Vic_50 + Vic_70 + Vic_90;
        $('#Vic_summa-text').text(Vic_summa.toFixed(4));

        //KD
        var Kd = (0.006 / fst) + 0.004;

        var Kd_second_10 = Kd * Math.sqrt(Vic_10);
        $('#Kd_second_10-text').text(Kd_second_10.toFixed(4));

        var Kd_second_30 = Kd * Math.sqrt(Vic_30);
        $('#Kd_second_30-text').text(Kd_second_30.toFixed(4));

        var Kd_second_50 = Kd * Math.sqrt(Vic_50);
        $('#Kd_second_50-text').text(Kd_second_50.toFixed(4));

        var Kd_second_70 = Kd * Math.sqrt(Vic_70);
        $('#Kd_second_70-text').text(Kd_second_70.toFixed(4));

        var Kd_second_90 = Kd * Math.sqrt(Vic_90);
        $('#Kd_second_90-text').text(Kd_second_90.toFixed(4));

        var Kd_second_summa = Kd_second_10 + Kd_second_30 + Kd_second_50 + Kd_second_70 + Kd_second_90;
        $('#Kd_second_summa-text').text(Kd_second_summa.toFixed(4));

        //SIGMA ai

        var sigma_ai_10 = Kd_second_10 * sigmav1;
        $('#sigma_ai_10-text').text(sigma_ai_10.toFixed(4));

        var sigma_ai_30 = Kd_second_30 * sigmav1;
        $('#sigma_ai_30-text').text(sigma_ai_30.toFixed(4));

        var sigma_ai_50 = Kd_second_50 * sigmav1;
        $('#sigma_ai_50-text').text(sigma_ai_50.toFixed(4));

        var sigma_ai_70 = Kd_second_70 * sigmav1;
        $('#sigma_ai_70-text').text(sigma_ai_70.toFixed(4));

        var sigma_ai_90 = Kd_second_90 * sigmav1;
        $('#sigma_ai_90-text').text(sigma_ai_90.toFixed(4));

        var sigma_ai_summa = sigma_ai_10 + sigma_ai_30 + sigma_ai_50 + sigma_ai_70 + sigma_ai_90;
        $('#sigma_ai_summa-text').text(sigma_ai_summa.toFixed(4));



        //Pi
        $('#interval1-text').text(interval1.toFixed(4));
        $('#interval2-text').text(interval2.toFixed(4));
        $('#interval3-text').text(interval3.toFixed(4));
        $('#interval4-text').text(interval4.toFixed(4));
        $('#interval5-text').text(interval5.toFixed(4));
        var interval_summa = interval1 + interval2 + interval3 + interval4 + interval5;
        $('#interval_summa-text').text(interval_summa.toFixed(4));

        // Pi * Vic
        var pi_vic_10 = Vic_10 * interval1;
        $('#pi_vic_10-text').text(pi_vic_10.toFixed(4));

        var pi_vic_30 = Vic_30 * interval2;
        $('#pi_vic_30-text').text(pi_vic_30.toFixed(4));

        var pi_vic_50 = Vic_50 * interval3;
        $('#pi_vic_50-text').text(pi_vic_50.toFixed(4));

        var pi_vic_70 = Vic_70 * interval4;
        $('#pi_vic_70-text').text(pi_vic_70.toFixed(4));

        var pi_vic_90 = Vic_90 * interval5;
        $('#pi_vic_90-text').text(pi_vic_90.toFixed(4));

        var pi_vic_summa = pi_vic_10 + pi_vic_30 + pi_vic_50 + pi_vic_70 + pi_vic_90;
        $('#pi_vic_summa-text').text(pi_vic_summa.toFixed(4));

        //Pi * sigma_m_ai
        var pi_sigma_m_ai_10 = interval1 * Math.pow(sigma_ai_10, 8);
        $('#pi_sigma_m_ai_10-text').text(pi_sigma_m_ai_10.toFixed(4));

        var pi_sigma_m_ai_30 = interval2 * Math.pow(sigma_ai_30, 8);
        $('#pi_sigma_m_ai_30-text').text(pi_sigma_m_ai_30.toFixed(4));

        var pi_sigma_m_ai_50 = interval3 * Math.pow(sigma_ai_50, 8);
        $('#pi_sigma_m_ai_50-text').text(pi_sigma_m_ai_50.toFixed(4));

        var pi_sigma_m_ai_70 = interval4 * Math.pow(sigma_ai_70, 8);
        $('#pi_sigma_m_ai_70-text').text(pi_sigma_m_ai_70.toFixed(4));

        var pi_sigma_m_ai_90 = interval5 * Math.pow(sigma_ai_90, 8);
        $('#pi_sigma_m_ai_90-text').text(pi_sigma_m_ai_90.toFixed(4));

        var pi_sigma_m_ai_summa = pi_sigma_m_ai_10 + pi_sigma_m_ai_30 + pi_sigma_m_ai_50 + pi_sigma_m_ai_70 + pi_sigma_m_ai_90;
        $('#pi_sigma_m_ai_summa-text').text(pi_sigma_m_ai_summa.toFixed(4));

        //15.12
        var V_cp = (10 * interval1) + (30 * interval2) + (50 * interval3) + (70 * interval4) + (90 * interval5);

        $('#V_cp-text').text(V_cp.toFixed(4));

        //15.10
        var Tp = (200000 / V_cp);
        $('#Tp-text').text(Tp.toFixed(4));
        var N_summa = Tp * 30 * 2;
        $('#N_summa-text').text(N_summa.toFixed(4));

        //15.13
        var sigma_apr_f = (N_summa / 2700000) * (interval_summa * pi_sigma_m_ai_summa);
        var sigma_apr = Math.pow(sigma_apr_f, 1 / 8);
        $('#sigma_apr-text').text(sigma_apr.toFixed(4));



        //16 розділ
        n_hp = sigma_1 / ((K * sigma_apr) + (0.3 * sigma_my));
        $('#n_hp-text').text(n_hp.toFixed(4));
    });
});