import Background from "../images/background.jpg"
import NFT from "../images/NFT.jpg";


function Body(){

return (
<div style={{ backgroundImage: `url(${Background})`}} className="py-5">




<div className="d-flex flexDiv">

<div className=" w-50 leftDiv mt-5">
     <h1 className="text-left">Discover, Collect & Sell</h1>

     <h1 className="text-left">Extraordinary NFTs</h1>

     <h4>OpenSea is the world's first and largest NFT marketplace</h4>

  <div className="py-5">
 
  <button className="btn btn-primary btn-lg"> Explore</button> 
     <button className="btn btn-info btn-lg mx-4">Create</button>

  </div>
     
</div>



<div className="w-50">


    <img className="nft rounded" src={NFT} alt="" />



</div>


</div>




</div>

);


}

export default Body;