import "./Navbar.scss"
import { useState,useEffect,React } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  // open and set open use effect to open and close the user ka thing
  
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id : 1,
    username : "Lapaki",
    // A var isseller is used to differentiate between seller and not a seller
    isSeller: true, 
  }

  return (
    <div className={active? 'navbar flex-col justify-center px-40 pt-5 py-2' : 'navbar bg-blue-100 flex-col justify-center px-40 pt-5 py-2' }>
      <div className="container flex justify-between">
        <div className="logo text-3xl font-extrabold	">
            <span className='text'>Classé</span>
            <span className='dot text-blue-600'>.</span>
        </div>
        <div className="links flex gap-10 font-semibold" style={{alignItems : 'center'}}>
            <span>Classé business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign In</span>
            {/* If we are already a seller we shdnt see this sell on classe */}
            {!currentUser.isSeller && <span>Sell on Classé</span>}
            {!currentUser && <button className='text-white bg-blue-600 p-2 px-5 rounded-full'>Join</button>}
            {currentUser && (
              <div className="user flex gap 4 relative" onClick={()=>setOpen(!open)} style={{
                alignItems : "center"
              }}>
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80" alt="#" className="w-[32px] h-[32px] rounded-full object-cover cursor-pointer "  />
                <span className="pl-5">{currentUser?.username}</span>
                {open && //Here we want to show the options only when we clic on thw user
                  <div className="options absolute top-[50px] rounded right-0 gap-2 p-2 bg-white text-[13px] px-2 w-[150px] border" style={{
                    display : "flex",
                    flexDirection : "column",
                  }}>
                    {currentUser?.isSeller && (
                      <>
                      <Link className ="link" to="/mycategories">Products</Link>
                      <Link className ="link" to="/add">Add New Product</Link>
                      </>
                    )}
                    <Link className ="link" to="/orders">Orders</Link>
                    <Link className ="link" to="/messages">Messages</Link>
                    <Link className ="link" to="/">Logout</Link>
                  </div>
                }
              </div>
            )}
        </div>
      </div>
      <hr className='m-2' />
      <div className="menu py-1 text-gray-500 flex justify-between">
        <span>Test</span>
        <span>Test 2</span>
      </div>
    </div>
  )
}

export default Navbar
