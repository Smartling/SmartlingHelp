$(document).ready(function() {

    $("#type").change(function() {
       if ($("#type").val() === 'custom') {
           $('#custom').show();
       }
       else {
           $('#custom').hide();
       }
    });
    $("#button").click(function () {
        var string = $("#teststring").val();
        var re;
        if ($("#type").val() === 'custom') {
            re = $("#custom").val();
        }
        if ($("#type").val() === 'c') {
            re = "(%(?:\d+\$)?(?:[+ \-#0])*(?:\d+|\*(?:\d+\$)?)?(?:\.\d+|\.\*(?:\d+\$)?)?(?:[hlLzjt]|hh|ll)?[sSdixXufFeEgGaAocCpn])"
        }
        if ($("#type").val() === 'python') {
            re = "%(?:\([^)]+\))?(((?:[+\-#0])*(?:\d+)?(?:\.\d+)?(?:[hlL])?[ouxXeEfFgGcrs])|((?:[\s+\-#0])*(?:\d+)?(?:\.\d+)?(?:[hlL])?[di]))"
        }
        if ($("#type").val() === 'ios') {
            re = "(%(?:\d+\$)?(?:[+ \-#0])*(?:\d+|\*(?:\d+\$)?)?(?:\.\d*|\.\*(?:\d+\$)?)?(?:[hlLzjtq]|hh|ll)?[@sSdDixXuUfFeEgGaAoOcCpn])"
        }
        if ($("#type").val() === 'java') {
            re = "%(?:((\d+\$)|(<)))?(((?:[+\-#0,(])*(?:\d+|\*(?:((\d+\$)|(<)))?)?(?:\.\d+(?:((\d+\$)|(<)))?)?[bBhHsScCn])|((?:[+\-#0,(])*(?:\s)?(?:[+\-#0,(])*(?:\d+|\*(?:((\d+\$)|(<)))?)?(?:\.\d+(?:((\d+\$)|(<)))?)?[doxXeEfgGaA])|((?:[tT])[HIKlMSLNpzZsQBbhAaCYyjmdeRTrDFc]))"
        }
        if ($("#type").val() === 'yaml') {
            re = "%\{[^\}]+\}"
        }
        if ($("#type").val() === 'qt') {
            re = "%L?(\d{1,2}|n)"
        }
        if ($("#type").val() === 'resx') {
            re = "((?<=[^\{])|^)\{\s*[\d]+?\s*(,\s*-?\d+\s*)?(:[^\{\}]+)?\}(?!\})"
        }
        var ex = new RegExp(re, 'g');
        var options = {className: "reg-highlight"}
        $(result).html(string);
        $(result).markRegExp(ex, options);

    })
});