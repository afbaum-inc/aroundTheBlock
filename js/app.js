var $form = $('#form');
var $input = $form.find('input[name=mortgage-amount]');

$input.on('keyup', function(event){
  //makes a selection within the input
  var selection = window.getSelection().toString();
  if (selection !== '') {
    return;
  }

  //or presses the arrow keys on the keyboard
  if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
    return;
  }
  // retriece the value from the input
  var $this = $( this );
  var input = $this.val();

// Sanitize the value using RegEx by removing unnecassary characters
  var input = input.replace(/[\D\s\._\-]+/g, "");

// parseInt() function to make sure the value is an integer
  input = input ? parseInt( input, 10 ) : 0;

// add the thousand separator with the toLocaleString() function
  $this.val( function() {
    return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
});


$('#calc').click(function() {
  //calculate the monthly payment on a morgtate amount
  const i = ($('#interest').val().replace(/[^0-9\.]/g, '') / 100) / 12;
  const n = paymentLength();
  const p = $('#mortgage-amount').val() - amountDown();
  const x = Math.pow((1 + i ), n);
  const M = ( p * ((i * x) / (x - 1)) ).toFixed(2);

  $('#payment').html('<p>' + M + '</p>');
});

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
  //calculate down payment based on percentage or dollar amount entered
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
