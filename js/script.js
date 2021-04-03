function getAllProducts() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((text) => {
        var data = text.data;
    
        var cardItem = "";
        data.forEach(element => {
            cardItem += 
                "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                    "<div class='card' style='width: 18rem;'>"+
                        "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                            "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                            "<div class='card-body'>"+
                                "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
                                "<div class='d-flex justify-content-between'>"+
                                    "<div>"+
                                        "<i class='fa fa-heart'></i>"+
                                    "</div>"+
                                    "<div>"+
                                        "<i class='fa fa-star'></i>"+
                                        "<i class='fa fa-star'></i>"+
                                        "<i class='fa fa-star'></i>"+
                                        "<i class='fa fa-star'></i>"+
                                        "<i class='fa fa-star-half-alt'></i> "+     
                                        "<i>"+ element.views +" views </i>" +
                                    "</div>"+
                                "</div>"+
                                "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                            "</div>"+
                        "</a>"+
                    "</div>"+
                "</div>"
            });
    
        document.getElementById("row").innerHTML = cardItem;
    });
}

function searchData() {
    let search = document.getElementById('search-products');
    
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            let name = element.name;
            name = name.toLowerCase();
            if (name.match(search.value)) {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +              
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function searchFromMobile() {
    let search = document.getElementById('search');
    let searchValue = search.value;

    let navbar = document.getElementById('navbar-items');
    navbar.classList.remove('show');
    
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            let name = element.name;
            name = name.toLowerCase();
            if (name.match(searchValue.toLowerCase())) {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +                   
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function himCategoryProduct() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            if (element.category === 'him') {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +                  
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function herCategoryProduct() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            if (element.category === 'her') {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +               
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function kidsCategoryProduct() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            if (element.category === 'kids') {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +                
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function teenCategoryProduct() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        var cardItem = "";
        allProducts.forEach(element => {
            if (element.category === 'teen') {
                cardItem += 
                    "<div class='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-3 mb-4 d-flex justify-content-center'>" +
                        "<div class='card' style='width: 18rem;'>"+
                            "<a class='m-0 p-0 border-0 text-dark text-decoration-none' onclick='addSessionDataForProductDetailPage("+ element.id +")'>"+
                                "<img src='"+ element.image +"' class='card-img-top image-height' alt='"+ element.name +"'>"+
                                "<div class='card-body'>"+
                                    "<h5 class='card-title product-name'>"+ element.name +"</h5>"+
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
                                            "<i>"+ element.views +" views </i>" +                
                                        "</div>"+
                                    "</div>"+
                                    "<p class='card-text mr-0 product-price h6'>"+ element.price +"</p>"+
                                "</div>"+
                            "</a>"+
                        "</div>"+
                    "</div>"
                ;
            }
        });
        document.getElementById("row").innerHTML = cardItem;
    });
}

function addSessionDataForProductDetailPage(productId) {
    sessionStorage.setItem("productId", productId);
    
    window.location.assign('product_page.html');
}

function productDetailPage() {
    axios({
        method: 'get',
        url: '/js/items.json',
        responseType: 'JSON'
    }).then((xhr) => {
        let allProducts = xhr.data;

        let productImage = '';
        let productDetails = '';
        
        allProducts.forEach(element => {
            if (element.id == sessionStorage.getItem("productId")) {
                productImage +=
                    "<img src='" + element.image + "' class='img-thumbnail img-fluid' alt='"+ element.name +"'>"
                ;

                productDetails += 
                    "<div>" +
                        "<p class='h2 font-weight-bold'>"+ element.name +"</p>" +
                        "<p class='h3 product-price'>"+ element.price +"</p>" +
                        "<div class='row d-flex justify-content-between'>" +
                            "<div class='text-left mt-3'>" +
                                "<i class='fa fa-star text-info'></i>" +
                                "<i class='fa fa-star text-info'></i>" +
                                "<i class='fa fa-star text-info'></i>" +
                                "<i class='fa fa-star text-info'></i>" +
                                "<i class='fa fa-star-half-alt text-info'></i>" +
                                "<i>"+ element.views +" views </i>" +  
                            "</div>" +
                            "<div class='text-right'>" +
                                "share: " +
                                "<p class='fab fa-2x mr-2 fa-facebook-square text-primary'></p>" +
                                "<p class='fab fa-2x mr-2 fa-twitter-square text-primary'></p>" +
                                "<p class='fab fa-2x fa-pinterest-square text-danger'></p>" +
                            "</div>" +
                        "</div>" +
                        "<hr>" +
                        "<div>" +
                            "<p class='h4'>Quantity</p>" +
                            "<input type='number' value='1' name='quantity' id='quantity-value' class='form-control'>" +
                        "</div>" +
                        "<div class='mt-3'>" +
                            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu eros leo. Vestibulum commodo scelerisque nisl, ac dignissim urna mollis a. Nam consequat rutrum justo, non dapibus justo pulvinar id. Aenean mollis, ex et consequat luctus, quam velit porta libero, a lacinia justo ex a tortor. Sed porta consectetur tellus a dignissim. Nam eu nibh est. Phasellus vel velit malesuada, sagittis ex nec, eleifend dui. Curabitur euismod euismod magna ut imperdiet. Aenean mattis, nunc nec bibendum consequat, justo mi consectetur justo, in mattis nisi felis rutrum diam. Sed massa elit, placerat eget ligula lobortis, fringilla efficitur arcu. Etiam mollis nulla est, tempus scelerisque justo elementum non. Maecenas vel sagittis sem, sed sollicitudin erat. Nulla quis purus dignissim, convallis elit at, tristique massa.</p>"+
                        "</div>" +
                        "<hr>" +
                        "<div>" +
                            "<button class='btn btn-info' onclick='addToCart("+ element.id +")'> Add To Cart </button>" +
                        "</div>" +
                    "</div>"
                ;
            }
        });
        document.getElementById('product-image').innerHTML = productImage;
        document.getElementById('product-details').innerHTML = productDetails;
    });
}

function footer() {
    axios({
        method: 'get',
        url: '/layouts/footer.html',
    }).then((xhr) => {
        document.getElementById('footer').innerHTML = xhr.data;
    });
}

function header() {
    axios({
        method: 'get',
        url: '/layouts/header.html',
    }).then((xhr) => {
        document.getElementById('header').innerHTML = xhr.data;
    });
}

function navbar(linkName) {
    if (linkName == 'home') {
        window.location.assign('index.html');
    }
    if (linkName == 'him') {
        window.location.assign('him.html');
    }
    if (linkName == 'her') {
        window.location.assign('her.html');
    }
    if (linkName == 'teen') {
        window.location.assign('teen.html');
    }
    if (linkName == 'kids') {
        window.location.assign('kids.html');
    }
    if (linkName == 'baby') {
        window.location.assign('baby.html');
    }
}
