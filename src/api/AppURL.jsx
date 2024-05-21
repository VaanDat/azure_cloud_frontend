class AppURL {
     static BaseURL = "http://127.0.0.1:8000/api"
     static VisitorDetails = this.BaseURL+"/visitor"
     static PostContact = this.BaseURL+"/contact"
     static AllSiteInfo = this.BaseURL+"/siteinfo"
     static AllCategoryDetails = this.BaseURL+"/category"

     static ProductListByRemark(Remark){
          return this.BaseURL+"/product-list-by-remark/"+Remark;
     }

     static ProductListByCategory(category){
          return this.BaseURL+"/product-list-by-category/"+category;
     }
 
     static ProductListBySubCategory(category,subcategory){
          return this.BaseURL+"/product-list-by-subcategory/"+category+"/"+subcategory;
     }

     static AllSlider = this.BaseURL+"/homeslider"

     static ProductDetails(code){
          return this.BaseURL+"/product-detail/"+code;
     }

     static NotificationHistory = this.BaseURL+"/notification"

     static ProductBySearch(searchkey){
          return this.BaseURL+"/search/"+searchkey;
     }

     static UserLogin = this.BaseURL+"/login"
     static UserData = this.BaseURL+"/user"
     static UserRegister = this.BaseURL+"/register"
     static UserForgetPassword = this.BaseURL+"/forget-password"
     static UserResetPassword = this.BaseURL+"/reset-password"

     static SimilarProduct(code){
          return this.BaseURL+"/similar/"+code;
     }

     static ReviewList(code){
          return this.BaseURL+"/reviewlist/"+code;
     }

     static addToCart = this.BaseURL+"/addtocart"

     static CartCount(email){
          return this.BaseURL+"/cartcount/"+email;
     }

     static AddFavourite(product_code,email){
          return this.BaseURL+"/favourite/"+product_code+"/"+email;
     }

     static FavouriteList(email){
          return this.BaseURL+"/favouritelist/"+email;
     }

     static FavouriteRemove(product_code,email){
          return this.BaseURL+"/favouriteremove/"+product_code+"/"+email;
     }

     static CartList(email){
          return this.BaseURL+"/cartlist/"+email;
     }

     static RemoveCartList(id){
          return this.BaseURL+"/removecartlist/"+id;
     }

     static CartItemPlus(id,quantity,price){
          return this.BaseURL+"/plus-cart-item/"+id;
     }

     static CartItemMinus(id,quantity,price){
          return this.BaseURL+"/minus-cart-item/"+id;
     }

     static CartOrder = this.BaseURL+"/cart-order"

     static OrderListByUser(email){
          return this.BaseURL+"/orderlistbyuser/"+email;
     }

     static PostReview = this.BaseURL+"/postreview"
      
}

export default AppURL
