import React from 'react';
import styles from '../galery/galery.module.css'

const images = {
    img1: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img3: 'https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img4: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img5: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img6: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}

const GaleryPage = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['galery-box']}>
                <div className={styles['galery-block']}>
                    <img src={images.img1} alt='img1' />
                    <img src={images.img2} alt='img2' />
                    <img src={images.img3} alt='img3' />
                    <img src={images.img4} alt='img4' />
                    <img src={images.img5} alt='img5' />
                    <img src={images.img6} alt='img6' />
                </div>
            </div>

        </div>
    );
};

export default GaleryPage;