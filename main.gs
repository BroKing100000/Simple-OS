costumes "assets/characters/space.svg",
    "assets/characters/0.svg",
    "assets/characters/1.svg",
    "assets/characters/2.svg",
    "assets/characters/3.svg",
    "assets/characters/4.svg",
    "assets/characters/5.svg",
    "assets/characters/6.svg",
    "assets/characters/7.svg",
    "assets/characters/8.svg",
    "assets/characters/9.svg",
    "assets/characters/A.svg",
    "assets/characters/B.svg",
    "assets/characters/C.svg",
    "assets/characters/D.svg",
    "assets/characters/E.svg",
    "assets/characters/F.svg",
    "assets/characters/G.svg",
    "assets/characters/H.svg",
    "assets/characters/I.svg",
    "assets/characters/J.svg",
    "assets/characters/K.svg",
    "assets/characters/L.svg",
    "assets/characters/M.svg",
    "assets/characters/N.svg",
    "assets/characters/O.svg",
    "assets/characters/P.svg",
    "assets/characters/Q.svg",
    "assets/characters/R.svg",
    "assets/characters/S.svg",
    "assets/characters/T.svg",
    "assets/characters/U.svg",
    "assets/characters/V.svg",
    "assets/characters/W.svg",
    "assets/characters/X.svg",
    "assets/characters/Y.svg",
    "assets/characters/Z.svg",
    "assets/characters/a.svg",
    "assets/characters/b.svg",
    "assets/characters/c.svg",
    "assets/characters/d.svg",
    "assets/characters/e.svg",
    "assets/characters/f.svg",
    "assets/characters/g.svg",
    "assets/characters/h.svg",
    "assets/characters/i.svg",
    "assets/characters/j.svg",
    "assets/characters/k.svg",
    "assets/characters/l.svg",
    "assets/characters/m.svg",
    "assets/characters/n.svg",
    "assets/characters/o.svg",
    "assets/characters/p.svg",
    "assets/characters/q.svg",
    "assets/characters/r.svg",
    "assets/characters/s.svg",
    "assets/characters/t.svg",
    "assets/characters/u.svg",
    "assets/characters/v.svg",
    "assets/characters/w.svg",
    "assets/characters/x.svg",
    "assets/characters/y.svg",
    "assets/characters/z.svg",
    "assets/characters/ampersand.svg",
    "assets/characters/apostrophe.svg",
    "assets/characters/at_sign.svg",
    "assets/characters/backtick.svg",
    "assets/characters/caret.svg",
    "assets/characters/colon.svg",
    "assets/characters/comma.svg",
    "assets/characters/curly_brace_left.svg",
    "assets/characters/curly_brace_right.svg",
    "assets/characters/dash.svg",
    "assets/characters/equals.svg",
    "assets/characters/exclamation.svg",
    "assets/characters/hashtag.svg",
    "assets/characters/minus.svg",
    "assets/characters/percent.svg",
    "assets/characters/plus.svg",
    "assets/characters/round_brace_left.svg",
    "assets/characters/round_brace_right.svg",
    "assets/characters/semicolon.svg",
    "assets/characters/slash.svg",
    "assets/characters/square_brace_left.svg",
    "assets/characters/square_brace_right.svg",
    "assets/characters/tidle.svg",
    "assets/characters/triangle_brace_left.svg",
    "assets/characters/triangle_brace_right.svg",
    "assets/characters/underscope.svg",
    "assets/characters/dollar.svg",
    "assets/characters/asterisk.svg",
    "assets/characters/question.svg",
    "assets/characters/dot.svg";

# [ Variables ] #

var write_x_index = 0;
var write_char_index = 0;

# [ Lists ] #

list special_characters "texts/special_characters.txt";
list equivalent_to_special_characters "texts/equivalent_to_special_characters.txt";

# [ Processes ] #

proc write_line string, start_x, start_y {

    goto $start_x, $start_y;

    # [ Variables ] #

    write_char_index = 0;
    write_x_index = $start_x;

    # [ Loops ] #

    repeat length $string {

        set_y $start_y;
        set_x write_x_index;

        write_char_index += 1;

        if $string[write_char_index] in special_characters {

            set_brightness_effect 100;
            switch_costume equivalent_to_special_characters[$string[write_char_index] in special_characters];
        }
        else {

            if $string[write_char_index] == " " {

                switch_costume "space";
                set_brightness_effect -100;
            }
            else {

                set_brightness_effect 100;
                switch_costume $string[write_char_index];
            };
        };

        stamp;

        write_x_index += 10;
    };
};

onflag {

    erase_all;

    # [ Calls ] #

    write_line "Hello, World!", 0, -75;
    write_line "abcdefghijklmnopqrstuvwxyz", 0, -100;
    write_line "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, -125;
    write_line "1234567890", 0, -150;
    write_line "` ~ ! @ # $ % ^ & * ( ) - _ = + [ ] { }", 0, -175;
    write_line "/ ; : ' < > ? .", 0, -200;
    write_line "[ SIMPLE OS ]", 0, -225;
};