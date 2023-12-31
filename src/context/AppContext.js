import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);


    // data filling
    const fetchData = async (page) => {
        try {
            setLoader(true);
            const {data} = await axios.get(`${baseUrl}?page=${page}`);
            console.log(data);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            setLoader(false);
        } catch (err) {
            console.error(err);
        }
    }

    const value = {
        loader, setLoader, posts, setPosts, page, setPage, totalPage, setTotalPage, fetchData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}