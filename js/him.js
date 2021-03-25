axios({
    method: 'get',
    url: '/js/items.json',
    responseType: 'JSON'
  }).then((text) => {
        var data = text.data;

        var cardItem = "";
        data.forEach(element => {
            console.log(element.Image);
            cardItem += "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                    "<div class='card' style='width: 18rem;'>"+
                        "<img src='"+ element.Image +"' class='card-img-top image-height' alt='"+ element.product_name +"'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title product-name'>"+ element.product_name +"</h5>"+
                            "<div class='d-flex justify-content-between'>"+
                                "<div class='text-left'>"+
                                    "<i class='fa fa-heart'></i>"+
                                "</div>"+
                                "<div class='text-right'>"+
                                    "<i class='fa fa-star'></i>"+
                                    "<i class='fa fa-star'></i>"+
                                    "<i class='fa fa-star'></i>"+
                                    "<i class='fa fa-star'></i>"+
                                    "<i class='fa fa-star-half-alt'></i> "+                       
                                "</div>"+
                            "</div>"+
                            "<p class='card-text mr-0 product-price h6'>$ "+ element.product_price +"</p>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            });

        document.getElementById("row").innerHTML = cardItem;
    })
;




