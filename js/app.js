$('#calc').click(function() {
  const amount = $('#mortgage-amount').val() - $('#downpayment');
  const months = $('years').val() * 12;
  const total = amount / months;

  console.log(total);
});
