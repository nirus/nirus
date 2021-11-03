import { FC } from 'react';

interface metaprops {
    facebook: string;
    featureimg: String;
    description: string;
    url: string;
    tags: string[];
    title: string;
}

export const MetaData: FC<Partial<metaprops>> = function MetaData({
    description = "Programmer, Reverse Engineer, Computer Enthusiast & Power Builder",
    facebook = "https://www.facebook.com/N1RUS",
    featureimg = "images/nirus_large.png",
    url = "http://nirus.io",
    tags = ['coding', 'programming', 'brilliant'],
    title="NiRUS"
}) {

    return (
        <>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Nirus - Mind & Muscle" />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Nirus - Mind & Muscle" />

            <meta property="article:publisher" content={facebook} />
            {tags.map((tag, index) => (<meta key={index} property="article:tag" content={tag} />))}

            <meta property="og:image" content={`${url}/${featureimg}`} />
            <meta property="og:image:secure_url" content={`${url}/${featureimg}`} />
            <meta property="og:image:width" content="720" />
            <meta property="og:image:height" content="405" />
            <meta property="og:image:alt" content="Nirus Avatar" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description} />
            <title>{title}</title>
        </>
    );
};


export default MetaData;