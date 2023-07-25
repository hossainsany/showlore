const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_TMDB_API_KEY,
    },
};

const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchData = async (param) => {
    const res = await fetch(`${BASE_URL}${param}`, options);
    const data = await res.json();

    return data;
};

export default fetchData;
