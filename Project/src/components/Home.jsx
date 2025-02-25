import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate=useNavigate()
    const navigateToRegister = () => navigate('/register')
    const navigateToLogin = () => navigate('/login')
    return(
        <div className='home'>
            <div class="content">
                <h1 className='homeHead'>A place for all announcements...</h1>
                <p className='text-white' style={{textAlign:'justify',lineHeight:'1.8'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className='signBtnContainer'>
                    <button className='signBtn' onClick={navigateToRegister}>Sign Up</button>
                    <button className='signBtn' onClick={navigateToLogin}>Sign In</button>
                </div>
            </div>
            <div className='image' style={{padding:'0',margin:'0'}}>
            </div>
        </div>
    )
}

export default Home