import { useEffect, useState } from "react";
import MemeItem from "./MemeItem";
const base_url = "https://api.imgflip.com/get_memes";

const Catalog = () => {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch(base_url)
            .then((res) => res.json())
            .then((data) => setMemes(data.data.memes));
    });
    console.log(memes);
    return (
        <>
            <h1>Memes Catalog</h1>
            {memes.map((meme) => (
                <MemeItem key={meme.id} {...meme} />
            ))}
        </>
    );
};

export default Catalog;
