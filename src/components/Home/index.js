import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarClock } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCashBanknote } from "react-icons/tb";

import { BiBell } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsersBold } from "react-icons/pi";
import "./index.css"

const Home = () => {
    const data = [
    {
      "name": "Week 1",
      "User": 0,
      "Guest": 200,
    
    },
    {
      "name": "Week 2",
      "User": 150,
      "Guest": 210,
     
    },
    {
      "name": "Week 3",
      "User": 420,
      "Guest": 300,
    },
    {
      "name": "Week 4",
      "User": 450,
      "Guest": 250,
    },

  ]
  const piedata = [
    {
      count: 809680,
      language: "Basic Tees",
    },
    {
      count: 4555697,
      language: "Custom Short Pants",
    },
    {
      count: 12345657,
      language: "Super Hoodies",
    },
  ]

    return (
      <div className="app-cont">
        <div className="count-list">
          <div className='top-sec'>
            <h1 className="side-head">Board.</h1>
            <ul className="SidebarOptionsList">


              <li className="SidebarOptionCont active">
                <FiPieChart size="20" />
                <p className="OptionName">Dashboard</p>
              </li>

              <li className="SidebarOptionCont">
                <BsTags size="20" />
                <p className="OptionName">Transactions</p>
              </li>

              <li className="SidebarOptionCont">
                <TbCalendarClock size="20" />
                <p className="OptionName">Schedules</p>
              </li>

              <li className="SidebarOptionCont">
                <FaRegUserCircle size="20" />
                <p className="OptionName">Users</p>
              </li>


              <li className="SidebarOptionCont">
                <IoSettingsOutline size="20" />
                <p className="OptionName">Settings</p>
              </li>


            </ul>


          </div>
         

          <div className="SidebarBottomCont">
            <p className="ContactUsHead">Help</p>
            <p className="ContactUsHead">Contact Us</p>
            
          </div>
        </div>

        <div className="count-cont">


          <nav className="nav-cont">
            <h1>Dashboard</h1>
            <div className="nav-details">
              <input type="search" placeholder="Search"/>
              <BiBell size={20}/>
              <img alt="proimg" src="https://res.cloudinary.com/dnmcjyigq/image/upload/v1713249983/image_1pic_xdfu3e.jpg"/>
            </div>
          </nav>


          <ul className="cards-list">
            <li className="card-item c1">
              <TbCashBanknote className="card-icon" size={30}/>
              <p className="card-head">Total Revenues</p>
              <p className="card-amt">$2,129,430</p>
            </li>


            <li className="card-item c1">
              <BsTags className="card-icon" size={30} />
              <p className="card-head">Total Transactions</p>
              <p className="card-amt">1,520</p>
            </li>



            <li className="card-item c1">
              <AiOutlineLike className="card-icon" size={30} />
              <p className="card-head">Total Likes</p>
              <p className="card-amt">9,721</p>
            </li>



            <li className="card-item c1">
              <PiUsersBold className="card-icon" size={30} />
              <p className="card-head">Total Users</p>
              <p className="card-amt">892</p>
            </li>
          </ul>

          <div>
            <h1>Activities</h1>
            <p>May-June 2021</p>
            <LineChart width={730} height={250} data={data}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis type="number" domain={[100, 500]} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
              <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
            </LineChart>
          </div>

          <div className='bot'>
            <div className='pie'>
              <div className='pie-head'>
                <h1>Top Products</h1>
                <p>May-June 2021</p>
              </div>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        cx="45%"
                        cy="50%"
                        data={piedata}
                        startAngle={0}
                        endAngle={360}
                        dataKey="count"
                    >
                        <Cell name="Basic Tees" fill="#fecba6" />
                        <Cell name="Custom Short Pants" fill="#b3d23f" />
                        <Cell name="Super Hoodies" fill="#a44c9e" />
                    </Pie>
                    <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                    />
                </PieChart>
            </ResponsiveContainer>


            </div>


            <div className='pie'>
              <div className='pie-head'>
                <h1>Today's schedule</h1>
                <p>See All</p>
              </div>
              <div>
                <h1>Meeting with suppliers form kuta bali</h1>
                <p>14.00-15.00</p>
                <p>at Sunset Road, Kuta Bali</p>
              </div>
              <div>
                <h1>Meeting with suppliers form kuta bali</h1>
                <p>14.00-15.00</p>
                <p>at Sunset Road, Kuta Bali</p>
              </div>

            </div>

          </div>
        



        </div>
      </div>
     
     
    )
}

export default Home