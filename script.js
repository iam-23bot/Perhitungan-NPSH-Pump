function convertToMeters(value, unit) {
    if (unit === "ft") {
        return value * 0.3048;
    }
    return value;
}

function convertToKPa(value, unit) {
    if (unit === "psi") {
        return value * 6.89476;
    }
    return value;
}

function calculateNPSH() {
    let hs = parseFloat(document.getElementById("hs").value);
    let hvpa = parseFloat(document.getElementById("hvpa").value);
    let hfs = parseFloat(document.getElementById("hfs").value);
    let p = parseFloat(document.getElementById("p").value);

    let hsUnit = document.getElementById("hsUnit").value;
    let hvpaUnit = document.getElementById("hvpaUnit").value;
    let hfsUnit = document.getElementById("hfsUnit").value;
    let pUnit = document.getElementById("pUnit").value;

    hs = convertToMeters(hs, hsUnit);
    hvpa = convertToKPa(hvpa, hvpaUnit);
    hfs = convertToMeters(hfs, hfsUnit);
    p = convertToKPa(p, pUnit);

    const pAtm = 101.325; // kPa (tekanan atmosfer)
    const pNPSH = ((pAtm + p - hvpa) / 9.81) + hs - hfs;

    document.getElementById("result").innerHTML = `NPSH: ${pNPSH.toFixed(2)} meter`;
}
