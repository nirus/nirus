
import { FC } from 'react';
import style from './style.module.scss';

export const BioCard: FC<{ children?: JSX.Element | JSX.Element[], classes?: { biocard?: string; header?: string } }> = function BioCard({ children = null, classes = { biocard: '', header: '' } }) {
    return (
        <section className={`${style.biocard} ${classes.biocard}`}>
            <div className={`${style.header} ${classes.header}`}>
                <span className={`${style.avatar} ${style.nirus}`}><img src="images/nirus.svg" alt="" /></span>
                <span className={`${style.avatar} ${style.niranjan}`}><img src="images/niranjan.jpg" alt="" /></span>
            </div>
            {children}
        </section>
    );
}

export default BioCard;