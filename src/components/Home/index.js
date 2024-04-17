import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie,  Cell, ResponsiveContainer } from "recharts"
import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarClock } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCashBanknote } from "react-icons/tb";

import { AiOutlineSearch } from 'react-icons/ai'

import { BiBell } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsersBold } from "react-icons/pi";
import "./index.css"

const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
      count: 55,
      language: "Basic Tees",
    },
    {
      count: 31,
      language: "Custom Short Pants",
    },
    {
      count: 14,
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

              <div className='SearchInputCont'>
                <input className='SearchInput'
                  type="search"
                  placeholder="Search"
                />
                <button className='SearchBtn'
                  type="button"
                >
                  <AiOutlineSearch size="20" />
                </button>
              </div>
              
              <BiBell size={33} />
              <img alt="proimg" className='pro-img' src="https://res.cloudinary.com/dnmcjyigq/image/upload/v1713249983/image_1pic_xdfu3e.jpg" />
            
              
            </div>
          </nav>


          <ul className="cards-list">
            <li className="card-item c1">
              <TbCashBanknote className="card-icon" size={30}/>
              <p className="card-head">Total Revenues</p>
              <p className="card-amt">$2,129,430</p>
            </li>


            <li className="card-item c2">
              <BsTags className="card-icon" size={30} />
              <p className="card-head">Total Transactions</p>
              <p className="card-amt">1,520</p>
            </li>



            <li className="card-item c3">
              <AiOutlineLike className="card-icon" size={30} />
              <p className="card-head">Total Likes</p>
              <p className="card-amt">9,721</p>
            </li>



            <li className="card-item c4">
              <PiUsersBold className="card-icon" size={30} />
              <p className="card-head">Total Users</p>
              <p className="card-amt">892</p>
            </li>
          </ul>

          <div className='act-cont'>
            <h1 className='act-head'>Activities</h1>
            <p className='act-date'>May-June 2021</p>
            <ResponsiveContainer width="100%" height={200}>
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

            </ResponsiveContainer>
           
          </div>



          <div className='bot'>

            <div className='pie'>
              <div className='pie-head'>
                <h1 className='pie-title'>Top Products</h1>
                <p className='pie-date'>May-June 2021</p>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart width="100%">
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={piedata}
                    startAngle={0}
                    endAngle={360}
                    dataKey="count"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                  >
                    {piedata.map((entry, index) => (
                      <Cell name={entry.language} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
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


            <div className='schedule-cont'>
              <div className='pie-head'>
                <h1 className='pie-title'>Today's schedule</h1>
                <p className='pie-date'>See All</p>
              </div>
              <div className='sch-card s1'>
                <h1 className='sch-head'>Meeting with suppliers from Kuta Bali</h1>
                <p className='sch-date'>14.00-15.00</p>
                <p className='sch-adress'>at Sunset Road, Kuta Bali</p>
              </div>
              <div className='sch-card s2'>
                <h1 className='sch-head'>Check operation at Giga Factory 1</h1>
                <p className='sch-date'>18.00-20.00</p>
                <p className='sch-adress'>at Central Jakarta</p>
              </div>
              

            </div>

          </div>
        



        </div>
      </div>
     
     
    )
}

export default Home