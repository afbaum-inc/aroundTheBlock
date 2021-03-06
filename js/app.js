//array functions

$('#calc').click(function() {
  //calculate the monthly payment on a morgtate amount
  const i = ($('#interest').val().replace(/[^0-9\.]/g, '') / 100) / 12;
  const n = paymentLength();
  const p = $('#mortgage-amount').val() - amountDown();
  const x = Math.pow((1 + i ), n);
  const M = ( p * ((i * x) / (x - 1)) ).toFixed(2);

  $('#payment').html('<p>' + M + '</p>');
});

//make sure payment length is a number of months even if year is selected
function paymentLength(){
  const length = $('input[name=month-year]:checked').val();
  console.log(length);
  if (length === 'year') {
    const n = $('#years').val() * 12;
    console.log(n);
    return n;
  } else {
    const n = $('#years').val();
    console.log(n);
    return n;
  }
}

function amountDown() {
  const percentDollar = $('input[name=amountdown]:checked').val();
  console.log(percentDollar);
  //ensure payment is a dollar amount even if percent is selected
  if (percentDollar === 'percent') {
    const total = $('#mortgage-amount').val();
    const downpayment = $('#downpayment').val();
    const p = (downpayment / 100) * total;
    console.log(p);
    return p;
  } else {
    const p = $('#downpayment').val();
    console.log(p);
    return p
  }
}

var $input = $('#mortgage-amount');
