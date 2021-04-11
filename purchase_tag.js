
if(window.localStorage.getItem("transID")){
 //Extract existing transactionID from local storage
    var temp = window.localStorage.getItem("transID");
    if(temp == "{{Order ID}}"){
        //Dummy Placeholder, since transactionID is still the same
        var kz = 0;
    }
  else if ( "{{Order ID}}" != "undefined" ){
    // Since the transactionID is different, it means same person is placing another order
    dataLayer.push({
    event:'purchase',
    't_id': dataLayer[1].ecommerce.purchase.actionField.id,
    'ecommerce': {
      'purchase': {
        'actionField': {
          'id': dataLayer[1].ecommerce.purchase.actionField.id,
          'revenue': {{pxo_price}},
          'coupon': ''
        },
        'products': [{                            
          'name': {{pxo_purchase_checker}},     
          'id': dataLayer[1].ecommerce.purchase.actionField.id,
          'price': {{pxo_price}},
          'quantity': 1,
          'coupon': ''                            
         }]}}});
    
  

    window.localStorage.setItem("transID","{{Order ID}}");


}
 

}

else if ( "{{Order ID}}" != "undefined" ) {
  
dataLayer.push({
    event:'purchase',
    't_id': '{{Order ID}}',
    'ecommerce': {
      'purchase': {
        'actionField': {
          'id': '{{Order ID}}',
          'revenue': '{{pxo_price}}',
          'coupon': ''
        },
        'products': [{                            
          'name': '{{purchase_product_name}}',     
          'id': '{{purchase_product_name}}',
          'price': '{{pxo_price}}',
          'quantity': 1,
          'coupon': ''                            
         }]}}});
    
  

    window.localStorage.setItem("transID","{{Order ID}}");


}





