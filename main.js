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

  
