import MainGround from "./MainGround";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className='bg-[#FFD372] flex flex-col md:flex-row '>
            
            <div className=""> 
           <Sidebar />
            </div>
            <div className="w-full"> 
            <MainGround />
            </div>
           
        </div>
    );
};

export default Dashboard;