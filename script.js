function compute()
{
    let n = document.getElementById("input").value;

    let f0 = 0;
    let f1 = 1;

    let out = f0 + ", " + f1 + ", ";

    for(let i = 0; i < n; i++)
    {
        f1 += f0;
        fo = f1 - f0;

        out += f1 + ", ";
    }

    out = "</tr>" +
        

    document.getElementById("output").innerHTML = out;
}