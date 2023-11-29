
import { useEffect, useState } from "react";
import Card from "../Card/card";



const Cards = () => {
    const [menuData, setMenuData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    useEffect(() => {
        fetch(`http://localhost:5000/cards?limit=9&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setTotalPages(data.totalPages);
    
                if (page === 1) {
                    setMenuData(data.data);
                } else {
                    setMenuData(prev => prev.concat(data.data));
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [page]);
    
    const handleInfiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            if (page < totalPages) {
                setPage(prev => prev + 1);
            }
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
        };
    }, [page, totalPages]);
    


    useEffect(()=> {
        window.addEventListener("scroll", handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    },[])
    return (
        <div>
            <h2>cards</h2>
            <h2>items: {menuData.length}</h2>
            <div className="grid grid-cols-3 gap-20 w-4/5 mx-auto">
            {
                menuData.map(item => <Card key={item.id} item={item}></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;