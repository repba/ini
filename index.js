var fs = require('fs')

var files =
[
    "ballerina.ini",
    "bird.ini",
    "cassini.ini",
    "centauri.ini",
    "fish.ini",
    "flower.ini",
    "galileo.ini",
    "kuiper.ini",
    "mars.ini",
    "nebula.ini",
    "oxygen.ini",
    "pluto.ini",
    "proxima.ini",
    "socrates.ini",
    "spider.ini",
];

for (var n = 0; n < files.length; ++n)
{
    var project = files[n].split(".")[0].toUpperCase();
    var data = fs.readFileSync(files[n], 'utf8');
    var lines = data.split("\n");
    for (var m = 0; m < lines.length; ++m)
    {
        if (lines[m].charAt(0) != "[")
            continue;

        var name = lines[m].substring(1,lines[m].length-1);
        var str = "[" + project.substr(0,4) + name + "]\n";
        str += "link = https://repba.com/?project=" + project + "&report=" + name + "\n";
        str += "title = " + project + " " + name + "\n";
        console.log(str);
    }
}

