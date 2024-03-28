$(function () {
    /**
     * This function is responsible for rendering the calendar.
     * It populates the calendar with days and applies styling based on the current date.
     */
    function c() {
        p();
        var e = h();
        var r = 0;
        var u = false;
        l.empty();
        while (!u) {
            if (s[r] == e[0].weekday) {
                u = true;
            }
            else {
                l.append('<div class="blank"></div>');
                r++;
            }
        }
        for (var c = 0; c < 42 - r; c++) {
            if (c >= e.length) {
                l.append('<div class="blank"></div>');
            }
            else {
                var v = e[c].day;
                var m = g(new Date(t, n - 1, v))
                    ? '<div class="today">'
                    : "<div>";
                l.append(m + "" + v + "</div>");
                
            }
        }
        var y = o[n - 1];
        a.css("background-color", y)
            .find("h1")
            .text(i[n - 1] + " " + t);
        f.find("div").css("color", y);
        l.find(".today").css("background-color",  y);
        d();
    }
    function h() {
        var e = [];
        for (var r = 1; r < v(t, n) + 1; r++) {
            e.push({ day: r, weekday: s[m(t, n, r)]});
        }       return e;
    }
    function p() {
        f.empty();
        for (var e = 0; e < 7; e++) {
            f.append("<div>" + s[e].substring(0,3) + "</div>");
        }
    }
})