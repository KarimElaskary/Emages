import axios from "axios";

async function searchImages(term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 03bNVJ9ZJhTkUwiHoCTkeI79DH3v00tM45yeT1hMlFA'
        },
        params: {
            query : term,
            per_page: 40,
        }
    })
    return response.data.results
}

export default searchImages