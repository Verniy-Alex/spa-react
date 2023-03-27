import React from 'react'
import styles from '../home/home.module.css'

const HomePage = () => {
    // const navigate = useNavigate()
    // const [inputValue, setInputValue] = useState('')
    // const navigateHandler = () => {
    //     navigate(appRoutes.profile.path, {
    //         state: {
    //             value: inputValue
    //         }
    //     })
    // }
    const homeImg = {
        title: 'Це головна сторінка'
    }
    return (
        <div className={styles['container']}>
            {/* <input value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button onClick={navigateHandler} >Click</button> */}
            <div className={styles['home-page']}>
                <h1 className={styles['title']}>{homeImg.title}</h1>
            </div>
        </div>
    );
};

export default HomePage;