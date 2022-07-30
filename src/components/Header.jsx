import boat from "../images/boat.png";
import { useWeb3 } from "@3rdweb/hooks";
import $ from 'jquery';

function Header(){

  const {address, connectWallet} = useWeb3();

  if(address){

    console.log("got address "+ address);

    return(

      <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      
      <img className="mx-2" src={boat} alt="" />
      <h4>OpenSea</h4>
      
      
      <form className="form-inline mx-5">
            <input className="form-control mr-sm-2 searchBar" type="search" placeholder="Search" aria-label="Search" />
          </form>
      
          <ul className="navbar-nav">
            <li className="nav-item active px-2">
            <a href="" className="nav-link"><h4 className=""> Explorer</h4></a>
            </li>
            <li className="nav-item px-2">
            <a href="" className="nav-link"><h4 className=""> Create</h4></a>
            </li>
            <li className="nav-itempx-2 px-2">
            <a href="" className="nav-link"><i class="fa-solid fa-wallet fa-2xl"></i></a>
            </li>
          </ul>
      
      
      </nav>
      
      </div>
      
      
      );

  }else{
    
    console.log("dont have address " + address);

    return ( 
      <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      
      <img className="mx-2" src={boat} alt="" />
      <h4>OpenSea</h4>
      
      
      <form className="form-inline mx-5">
            <input className="form-control mr-sm-2 searchBar" type="search" placeholder="Search" aria-label="Search" />
          </form>
      
          <ul className="navbar-nav">
            <li className="nav-item active px-2">
            <a href="" className="nav-link"><h4 className=""> Explorer</h4></a>
            </li>
            <li className="nav-item px-2">
            <a href="" className="nav-link"><h4 className=""> Create</h4></a>
            </li>
            <li className="nav-itempx-2 px-2">
            <button className="btn btn-lg btn-dark" onClick={()=> connectWallet('injected')}>Connect Wallet</button>
            </li>
          </ul>
      
      
      </nav>
      
      
      </div>
    );

   

  }





}

export default Header;
