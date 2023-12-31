import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const [tag, setTag] = useState('');
    const [category, setCategory] = useState('');
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    const navigate = useNavigate();

    const handlePageChange = (page) => {
        navigate({search:`?page=${page}`});
        setPage(page);
    }

    // data filling
    const fetchData = async (page = 1, tag = null, category) => {
        try {
            setLoader(true);
            let url = `${baseUrl}?page=${page}`;
            if (tag) {
                url += `&tag=${tag}`
            }
            if (category) {
                url += `&category=${category}`
            }
            console.log(url);
            const { data } = await axios.get(url);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            setLoader(false);
        } catch (err) {
            console.error(err);
        }
    }

    const value = {
        loader, setLoader, tag, setTag, category, setCategory, posts, setPosts, page, setPage, totalPage, setTotalPage,handlePageChange, fetchData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}