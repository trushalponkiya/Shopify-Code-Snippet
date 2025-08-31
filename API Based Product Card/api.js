document.addEventListener("DOMContentLoaded", async function(){
    /* 
    |======================================================================
    | API Called
    |======================================================================
    | Once you fetch the API response and get the list of products along 
    | with their IDs, you can use this product ids to fetch your theme's product card
    */

    function fetchProductCards(productIds) {
        return new Promise(async(resolve)=>{
            let url = `/search?view=api&type=product&q=` + productIds.join(" ")
            const productCardReq = await fetch(url);
            const productCardRes = await productCardReq.text();
            resolve(productCardRes);
        })
    }

    const apiReq = await fetch('https://{your api endpoint here}');
    const apiRes = await apiReq.json();
    const productIds = apiRes.products.map(product => product.id); // Assuming the API response has a 'products' array with 'id' field

    fetchProductCards(productIds).then(responses => {
        // Here you will get the HTML of product cards
        
        // Do your stuff here.......
    })
});