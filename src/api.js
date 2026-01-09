import axios from "axios";

async function searchImages(term, page = 1){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 03bNVJ9ZJhTkUwiHoCTkeI79DH3v00tM45yeT1hMlFA'
        },
        params: {
            query : term,
            per_page: 20,
            page: page
        }
    })
    return {
        results: response.data.results,
        totalPages: response.data.total_pages
    }
}

export default searchImages