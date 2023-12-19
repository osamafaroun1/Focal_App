import React from 'react'
import Intersted from '../../components/loginandregester/Intersted'
import Text from '../../components/loginandregester/Text'
import './homeStyle.css'
import AllNav from '../../../../components/NavBarAll/AllNav';
import Footer from '../../../../components/Footer/Footer';


function Page3() {
  return (
<>
<AllNav/>
   <div className='page3'>
   <div className='container-areej'>
       <Text Title={'What are you interested in? '} dic={'choose three or more'} />
       <Intersted Text={'Continue'}/>
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default Page3