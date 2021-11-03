import { type } from 'os';
import { FC } from 'react';

export type BioProps = { classes: { [key: string]: string }; bioInfo: { link: string; icon: string; title?:string }[] };

export const BioLinks: FC<BioProps> = function BioLinks({ classes, bioInfo }) {
    return (<ul className={classes.icons}>
        {
            bioInfo.map((bio, index) => <li key={index}><a target="_blank" rel="noreferrer" title={bio?.title ?? 'click to open'} href={bio.link} className={bio.icon}></a></li>)
        }
    </ul>)
}

export default BioLinks