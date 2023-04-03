function Credit() {
    var credit = Number(document.getElementById('amount').value);
    var period = Number(document.getElementById('period').value);
    var percent = Number(document.getElementById('percent').value);

    var interest = parseFloat(percent) / 100 / 12;
    
    var result = Math.pow(1 + interest,period);
    var monthly = (credit * result * interest)/(result-1);

    document.getElementById('monthly').innerHTML = monthly.toFixed(2);
    document.getElementById('total').innerHTML = (monthly*period).toFixed(2);
}