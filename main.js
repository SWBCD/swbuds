const amountElement = document.getElementById("amount")

  console.log(amountElement.value)

  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'silver',
      layout: 'vertical',
      label: 'checkout',
      
    },
    // Sets up the transaction when a payment button is clicked
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value:document.getElementById("amount").value, // Can reference variables or functions. Example: `value: document.getElementById('...').value`
          }
        }]
      });
    },

    // Finalize the transaction after payer approval
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Successful capture! For dev/demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 1));
            var transaction = orderData.purchase_units[0].payments.captures[0];
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '<h3>Your transation has been completed</h3>';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';
      });
    }
  }).render('#paypal-button-container');
  $(document).ready(function(){
    $('select').change(function(){
    var totalVal = 0;
    $('select.add').each(function(){
      totalVal +=  parseInt($(this).val()) ;
      });
      $('input#amount').val(totalVal);
     });
    });
    
 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
    }
    form.addEventListener("submit", handleSubmit)


    function Myfunction(){
    alert("Thanks for your submisson!");
    }

  
