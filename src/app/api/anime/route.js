import { NextResponse } from "next/server";
const axios = require('axios');

export async function GET(req, res) {

    // getting query parameter................ 
    const search = req.nextUrl.searchParams.get('search');
    console.log(search)
    try {

        // using fetch.............. 

        // const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'f9530a92f6msheb48e5dc99ba7b0p1a0c58jsndfa0d6d6b5a6',
        //         'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        //     }
        // };

        // const response = await fetch(url, options)
        // const result = await response.json()
        // return NextResponse.json({ result })

        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {
                page: '1',
                size: '30',
                search: search,
                genres: 'Fantasy,Drama',
                sortBy: 'ranking',
                sortOrder: 'asc'
            },
            headers: {
                'X-RapidAPI-Key': 'f9530a92f6msheb48e5dc99ba7b0p1a0c58jsndfa0d6d6b5a6',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        const result = response.data
        // console.log(result);
        return NextResponse.json({ result })

    } catch (e) {
        return NextResponse.json({ e })

    }
}