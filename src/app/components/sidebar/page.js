
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";
function SideBar() {


  return (
    <div>
      <hr className='bg-slate-600 mb-10' />
  <h5 className='flex m-2'>
         Woman Fashon
         <FaCaretRight className='m-2 hover:bg-cyan-500 rounded-3xl'></FaCaretRight>
      </h5>
  <h5 className='flex m-2'>
        Mans  Fashon   <FaCaretRight className='m-2 hover:bg-cyan-500 rounded-3xl'></FaCaretRight>
      </h5>
  <h5 className='flex m-2'>
        Electronics   <FaCaretRight className='m-2 hover:bg-cyan-500 rounded-3xl'></FaCaretRight>
      </h5>
  <h5 className='flex m-2'>
        Midcines  <FaCaretRight className='m-2 hover:bg-cyan-500 rounded-3xl'></FaCaretRight>
      </h5>
  <h5 className='flex m-2'>
        Baby toys  <FaCaretRight className='m-2 hover:bg-cyan-500 rounded-3xl'></FaCaretRight>
      </h5>
      <Image
  src={'/img/mop.jpg'}
  width={1000}
  height={500}
  className="h-50 mt-24"
  ></Image>
<hr className='bg-slate-600 mt-16' />
    </div>
  );
}

export default SideBar;