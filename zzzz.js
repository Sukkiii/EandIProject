function fetchProductData(url) {
   // const urlParams = new URLSearchParams(window.location.search);
   // const productId = urlParams.get("id");
   const productId = 5;
 
   return (
     fetch(url)
       // return fetch("/api/products")
 
       .then((response) => response.json())
       .then((data) => {
         const product = data.products.find((p) => p.ProductId === productId);
         if (product) {
           selectedProduct.productId = productId;
           selectedProduct.name = product.ProductName;
           selectedProduct.price = product.Price;
           selectedProduct.thumbnail = product.Image[0];
           // selectedProduct.quantity = 1;
           return product;
         } else {
           throw new Error("상품을 찾을 수 없습니다.");
         }
       })
       .catch((error) => {
         console.error("데이터 오류", error);
       })
   );
 }

 