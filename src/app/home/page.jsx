import React from "react"
import Link from "next/link"

const Home = () =>
{
    const [items, setItems] = useState([]);
    useEffecct(()=>{
        const demo = async()=>{
            const response = await fetch("/api/items");
            if(!response.ok)
            {
                throw new Error("cannot fetch")
            }
            const data = await response.json();
            setItems(data);
        };
        demo();
    },[]);
    return(
        <section>

        </section>
    )
}
export default Home;