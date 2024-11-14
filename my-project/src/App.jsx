export default function App() {
  return (



  <div>

   
     <div className="">

      <nav className="bg-teal-400 py-3 sm:flex-col flex justify-between items-center ">

        <div className="flex items-center ">
      <img src="#" style={{ width:'50px' , display:'block',height:"50px", borderRadius:"50% ", backgroundColor:"yellowgreen" }} alt="" />
        <a href="#" className="font-bold text-2xl text-white">Company Name</a>
        </div>
        <ul className="sm:flex-col flex gap-2 ">
          <li className="transform hover:underline  "><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </nav>

     </div>



  </div>




  )
}