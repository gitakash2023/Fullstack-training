const fetchProductsData =async()=>{
   try{
    const response =await fetch("https://fakestoreapi.com/products")
    const jsonData  = await  response.json()
    console.log("This is fetched Data",jsonData)
   }catch(error){
    console.log(error)
   }

}
fetchProductsData()
//  fetch ka use api se data fetch krne ke liye kiya jata hai jo ki browser ka in built function hai 
// imp-> jab bhi data frontend se backend me jata hai to string formate me hi jata hai 
// aur jab data backend se frontend me aata fetch hokr tb bhi vh string formate me hota hai
//  use object(json) ke room me bnana pdta hai



