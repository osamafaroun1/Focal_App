import './Blog.css';
import glas from './img/robot.svg'
// import small from './img/glass.svg'
import Vector from './img/Vector.svg'
// import back from './img/back.svg'
import tall from'./img/tall.svg'
import icon from './img/icon.svg'
import yello from './img/yello.svg'
import laptop from './img/laptop.svg'
import team from './img/team.svg'
import colors from './img/colors.svg'
import random from './img/random.svg'
import sky from './img/sky.svg'
import plant from './img/plant.svg'
import green from './img/green.svg'
import jleq from './img/jleq.svg'
import carly from './img/carly.svg'
import search from './img/search.svg'
import AllNav from '../../../../components/NavBarAll/AllNav';
import Footer from '../../../../components/Footer/Footer';

export default function Blog()
{
    return (
        <>
        <AllNav/>
        <section className='AS-Hero'>
            <div className="containerA container">
                <div className='AS-Title mb-5'>
                    <h1 >Blog</h1>
                    <p className='mb-0'>One blog brings together a lot....</p>
                    <p className='mb-0'> Be a part of this blog and write your opinions.</p>
                </div>
                
                {/* <div className="row">
                    <div className="AS_SearchBarContainer">
                        <input className='AS_SearchBarInput' type="text" placeholder="Search to View More" />
                        <div className="AS_SearchBarDivIcons">
                            <div>
                                <a href="/">
                                    <svg className='AS_SearchBarIcon1' xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                        <path d="M7.72471 2.57146C8.66816 2.57003 9.59377 2.82854 10.4 3.31861C11.2061 3.80868 11.8617 4.51138 12.2948 5.34958C12.7278 6.18778 12.9216 7.12907 12.8548 8.07016C12.788 9.01124 12.4633 9.91574 11.9162 10.6844L11.4083 11.398L10.6947 11.9058C10.0349 12.3734 9.27404 12.6787 8.47401 12.7969C7.67398 12.9151 6.85735 12.8429 6.09048 12.5861C5.32362 12.3293 4.62817 11.8952 4.06064 11.3191C3.49312 10.7429 3.06954 10.041 2.82434 9.27035C2.57913 8.49971 2.51922 7.68208 2.64946 6.88392C2.77971 6.08576 3.09644 5.3296 3.57392 4.67688C4.05139 4.02416 4.67613 3.49331 5.39737 3.12748C6.11861 2.76164 6.91599 2.57114 7.72471 2.57146ZM7.72471 6.95274e-06C6.51026 -0.00162341 5.31258 0.283498 4.22913 0.83217C3.14568 1.38084 2.20708 2.17756 1.4897 3.15749C0.772326 4.13743 0.296444 5.27289 0.10078 6.47148C-0.094883 7.67006 -0.00479883 8.89791 0.363702 10.0551C0.732203 11.2123 1.36871 12.2662 2.22142 13.1309C3.07414 13.9956 4.11897 14.6468 5.27089 15.0315C6.42282 15.4162 7.64929 15.5234 8.8505 15.3446C10.0517 15.1657 11.1937 14.7058 12.1836 14.0022L15.8061 17.6254C16.3063 18.1249 17.1176 18.1249 17.6171 17.6254L17.6357 17.6067C17.7627 17.4925 17.8643 17.3529 17.9338 17.1969C18.0034 17.0409 18.0393 16.872 18.0393 16.7013C18.0393 16.5305 18.0034 16.3616 17.9338 16.2056C17.8643 16.0496 17.7627 15.91 17.6357 15.7958L14.0125 12.1733C14.8328 11.0199 15.3197 9.66293 15.4197 8.25116C15.5197 6.83939 15.229 5.42735 14.5795 4.16988C13.9299 2.91242 12.9467 1.8581 11.7375 1.12254C10.5284 0.38699 9.14001 -0.00138561 7.72471 6.95274e-06Z" fill="#938C8C" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="/" >
                                    <svg className='AS_SearchBarIcon2' xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0391 2.00245H15.8691C15.6625 1.41692 15.2793 0.909884 14.7725 0.55124C14.2656 0.192596 13.66 0 13.0391 0C12.4181 0 11.8125 0.192596 11.3057 0.55124C10.7988 0.909884 10.4157 1.41692 10.2091 2.00245H1.03906C0.773846 2.00245 0.519492 2.10781 0.331956 2.29534C0.144419 2.48288 0.0390625 2.73723 0.0390625 3.00245C0.0390625 3.26767 0.144419 3.52202 0.331956 3.70956C0.519492 3.89709 0.773846 4.00245 1.03906 4.00245H10.2091C10.4157 4.58798 10.7988 5.09502 11.3057 5.45366C11.8125 5.81231 12.4181 6.0049 13.0391 6.0049C13.66 6.0049 14.2656 5.81231 14.7725 5.45366C15.2793 5.09502 15.6625 4.58798 15.8691 4.00245H17.0391C17.3043 4.00245 17.5586 3.89709 17.7462 3.70956C17.9337 3.52202 18.0391 3.26767 18.0391 3.00245C18.0391 2.73723 17.9337 2.48288 17.7462 2.29534C17.5586 2.10781 17.3043 2.00245 17.0391 2.00245ZM13.0391 4.00245C13.3043 4.00245 13.5586 3.89709 13.7462 3.70956C13.9337 3.52202 14.0391 3.26767 14.0391 3.00245C14.0391 2.73723 13.9337 2.48288 13.7462 2.29534C13.5586 2.10781 13.3043 2.00245 13.0391 2.00245C12.7738 2.00245 12.5195 2.10781 12.332 2.29534C12.1444 2.48288 12.0391 2.73723 12.0391 3.00245C12.0391 3.26767 12.1444 3.52202 12.332 3.70956C12.5195 3.89709 12.7738 4.00245 13.0391 4.00245ZM0.0390625 9.00245C0.0390625 8.73723 0.144419 8.48288 0.331956 8.29534C0.519492 8.10781 0.773846 8.00245 1.03906 8.00245H2.20906C2.41566 7.41692 2.7988 6.90988 3.30566 6.55124C3.81252 6.1926 4.41815 6 5.03906 6C5.65998 6 6.2656 6.1926 6.77246 6.55124C7.27932 6.90988 7.66246 7.41692 7.86906 8.00245H17.0391C17.3043 8.00245 17.5586 8.10781 17.7462 8.29534C17.9337 8.48288 18.0391 8.73723 18.0391 9.00245C18.0391 9.26767 17.9337 9.52202 17.7462 9.70956C17.5586 9.89709 17.3043 10.0025 17.0391 10.0025H7.86906C7.66246 10.588 7.27932 11.095 6.77246 11.4537C6.2656 11.8123 5.65998 12.0049 5.03906 12.0049C4.41815 12.0049 3.81252 11.8123 3.30566 11.4537C2.7988 11.095 2.41566 10.588 2.20906 10.0025H1.03906C0.773846 10.0025 0.519492 9.89709 0.331956 9.70956C0.144419 9.52202 0.0390625 9.26767 0.0390625 9.00245ZM5.03906 10.0025C5.30428 10.0025 5.55863 9.89709 5.74617 9.70956C5.93371 9.52202 6.03906 9.26767 6.03906 9.00245C6.03906 8.73723 5.93371 8.48288 5.74617 8.29534C5.55863 8.10781 5.30428 8.00245 5.03906 8.00245C4.77385 8.00245 4.51949 8.10781 4.33196 8.29534C4.14442 8.48288 4.03906 8.73723 4.03906 9.00245C4.03906 9.26767 4.14442 9.52202 4.33196 9.70956C4.51949 9.89709 4.77385 10.0025 5.03906 10.0025ZM1.03906 14.0025C0.773846 14.0025 0.519492 14.1078 0.331956 14.2953C0.144419 14.4829 0.0390625 14.7372 0.0390625 15.0025C0.0390625 15.2677 0.144419 15.522 0.331956 15.7096C0.519492 15.8971 0.773846 16.0025 1.03906 16.0025H10.2091C10.4157 16.588 10.7988 17.095 11.3057 17.4537C11.8125 17.8123 12.4181 18.0049 13.0391 18.0049C13.66 18.0049 14.2656 17.8123 14.7725 17.4537C15.2793 17.095 15.6625 16.588 15.8691 16.0025H17.0391C17.3043 16.0025 17.5586 15.8971 17.7462 15.7096C17.9337 15.522 18.0391 15.2677 18.0391 15.0025C18.0391 14.7372 17.9337 14.4829 17.7462 14.2953C17.5586 14.1078 17.3043 14.0025 17.0391 14.0025H15.8691C15.6625 13.4169 15.2793 12.9099 14.7725 12.5512C14.2656 12.1926 13.66 12 13.0391 12C12.4181 12 11.8125 12.1926 11.3057 12.5512C10.7988 12.9099 10.4157 13.4169 10.2091 14.0025H1.03906ZM14.0391 15.0025C14.0391 15.2677 13.9337 15.522 13.7462 15.7096C13.5586 15.8971 13.3043 16.0025 13.0391 16.0025C12.7738 16.0025 12.5195 15.8971 12.332 15.7096C12.1444 15.522 12.0391 15.2677 12.0391 15.0025C12.0391 14.7372 12.1444 14.4829 12.332 14.2953C12.5195 14.1078 12.7738 14.0025 13.0391 14.0025C13.3043 14.0025 13.5586 14.1078 13.7462 14.2953C13.9337 14.4829 14.0391 14.7372 14.0391 15.0025Z" fill="#938C8C" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div> */}
                        <div className='AS-input-container'>
                        <input type="text" placeholder='Search to view more'  />
                        <img className='AS-search-image' src={search} alt='not found'/>


                        </div>

                    <ul className="AS-list ">
                        <li>All Blogs</li>
                        <li>Design</li>
                        <li>Ui&Ux</li>
                        <li>AI</li>
                    </ul>

                <div className='AS-cards d-flex flex-wrap gap-3 '>

                <div className='big-big'>
    <img className='AS-m-image' src={tall} alt='not found'
    />
  <div className='second-container'>
    <div className='second'>
    <img className='AS-small-img' src={green} alt='not found'
      />
      <p className='AS-second-p'>User Name</p>
     
      
      <p className='AS-date'>2022-12-12   03:35 pm</p>
      </div>

      <p className='par2'>Understanding workflow interviews,
      one of the best 5-ASnute reality checks from users</p>

      <p className='par3'>
      You ASght find workflow interviews to be your best friend when designing more complex interfaces.
Workflow interviews aren’t a proASnent user research method because they’re usually not done as stand alone research. They’re usually a part of user interviews, but they don’t necessarily have to be.
I’ve often found that they are great as ......
      </p>

      <div className='read'>
        <p>Read More</p>
        <img className='icon' src={icon} alt="not-found" />
        

      </div>
      <p className='AS-last-p'>
          #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
        </p>

      </div>
    </div>

                    <div className='AS-box'>
                        <img className='AS-first-image' src={glas} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={jleq} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={yello} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={green} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={laptop} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={carly} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={team} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={jleq} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                </div>
                <p className='AS-Paragraph-One text-center m-4'>View more</p>
                <p className='AS-Paragraph-Two text-start m-4'>Most Views</p>

                <div className='AS-cards d-flex flex-wrap gap-3 '>
                <div className='big-big'>
    <img className='AS-m-image' src={colors} alt='not found'
    />
  <div className='second-container'>
    <div className='second'>
    <img className='AS-small-img' src={green} alt='not found'
      />
      <p className='AS-second-p'>User Name</p>
     
      
      <p className='AS-date'>2022-12-12   03:35 pm</p>
      </div>

      <p className='par2'>Understanding workflow interviews,
      one of the best 5-ASnute reality checks from users</p>

      <p className='par3'>
      You ASght find workflow interviews to be your best friend when designing more complex interfaces.
Workflow interviews aren’t a proASnent user research method because they’re usually not done as stand alone research. They’re usually a part of user interviews, but they don’t necessarily have to be.
I’ve often found that they are great as ......
      </p>

      <div className='read'>
        <p>Read More</p>
        <img className='icon' src={icon} alt="not-found" />
        

      </div>
      <p className='AS-last-p'>
          #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
        </p>

      </div>
    </div>

                    <div className='AS-box'>
                        <img className='AS-first-image' src={random} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={jleq} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={sky} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={green} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={plant} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={carly} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                    <div className='AS-box'>
                        <img className='AS-first-image' src={team} alt='not found'
                        />
                        <p className='AS-inside-p'>Understanding workflow interviews, one of the best 5-ASnute reality
                            checks from users</p>

                        <img className='AS-vector' src={Vector} alt='not found'
                        />

                        <div className='AS-small-div'>
                            <div className='AS-smallest-div'>
                                <img className='AS-small-img' src={jleq} alt='not found'
                                />
                                <p className='AS-second-p'>User Name</p>
                            </div>
                            <p className='AS-date'>2022-12-12   03:35 pm</p>
                        </div>
                        <p className='AS-last-p'>
                            #UI,#Ux,#Design,#VR,#AI,#GaASng,#Ui&Ux
                        </p>

                    </div>
                   </div>
                </div>

           
        </section>
        <Footer />
        </>
    )
}
