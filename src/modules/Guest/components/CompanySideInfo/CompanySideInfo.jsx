import './CompanySideInfo.css'
import CompanyPicture from './../../Assets/Company-picture.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import PopUp from '../JobMainScreenAsCompnyProfileInformayion/PopUp1/PopUp';
// import * as AiIcons from "react-icons/ai"
// import { Link } from 'react-router-dom'

const CompanySideInfo = (props) => {
const [selectedActiveTab, SetSelectedTab] = useState(1);
const [follow, setFollowing] = useState(true);

const Following = ()  => {
    setFollowing(!follow);
}
const setActiveTab = (index) => {
    SetSelectedTab(index);
}
const [showPopup, setShowPopup] = useState(false);
    
        const togglePopup = () => {
          setShowPopup(!showPopup)};
          

    return (
        <>
            <div className={`BT_CompanySideInfo ${props.className}`}>
                <div className='BT_CompanyPictureInfoCard'>
                    <img className='BT_CompanyPictureInfo' src={CompanyPicture} alt="" />
                    <div className='BT_CompanyCheckIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="32" viewBox="0 0 27 32" fill="none">
                            <g filter="url(#filter0_i_3_12749)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.81818L13.3333 0L26.6667 5.81818V14.5455C26.6667 22.6182 20.9778 30.1673 13.3333 32C5.68889 30.1673 0 22.6182 0 14.5455V5.81818ZM4.44444 17.4545L10.3704 23.2727L22.2222 11.6364L20.1333 9.57091L10.3704 19.1564L6.53333 15.4036L4.44444 17.4545ZM14.2715 24.2703C20.4726 24.2703 25.4996 20.5686 25.4996 16.0023C25.4996 11.4361 20.4726 7.73438 14.2715 7.73438C8.07044 7.73438 3.04346 11.4361 3.04346 16.0023C3.04346 20.5686 8.07044 24.2703 14.2715 24.2703Z" fill="#282828" />
                            </g>
                            <g filter="url(#filter1_i_3_12749)">
                                <path d="M13.3333 0L0 5.81818V14.5455C0 22.6182 5.68889 30.1673 13.3333 32C20.9778 30.1673 26.6667 22.6182 26.6667 14.5455V5.81818L13.3333 0ZM10.3704 23.2727L4.44444 17.4545L6.53333 15.4036L10.3704 19.1564L20.1333 9.57091L22.2222 11.6364L10.3704 23.2727Z" fill="#FF8500" />
                            </g>
                            <defs>
                                <filter id="filter0_i_3_12749" x="0" y="0" width="26.8665" height="32.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="0.2" dy="0.5" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_12749" />
                                </filter>
                                <filter id="filter1_i_3_12749" x="0" y="0" width="27.1665" height="32.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="0.5" dy="0.5" />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_12749" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                
                <p className='BT_CompanyNameProfile'>Taplin Company</p>
                <p className='BT_CompanyTypeInfo'>Software Services</p>
                <p className='BT_CompanyNumOfFollowers'>15.6 Followers</p>
                
                <div><button className='BT_FollowCompanyButton' onClick={()=>Following()}>{follow ? "Follow" : "Following"}</button></div>
               <div><button className='BT_AddCompaint' onClick={togglePopup}>Add Complaint</button></div>
               {showPopup && (
        <PopUp onClose={togglePopup} />)}
                <hr className='BT_CompanyInfoLine' />
            
                <p className='BT_CompanyInformationTab' onClick={()=>setActiveTab(1)}><Link><span className={selectedActiveTab ===1 ? "Active":""}>INFOR</span>MATION</Link></p>
                <p className='BT_CompanyBlogsTab' onClick={()=>setActiveTab(2)}><Link><span className={selectedActiveTab ===2 ? "Active":""}>BLOG</span>S</Link></p>
              
            </div>
        </>
    )
}

export default CompanySideInfo