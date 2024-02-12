

import { useEffect } from 'react'
import './homeSection.sass'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const FirstSection = () => {
    useEffect(() => {
        const test = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 20,
                        page: 1,
                        sparkline: false,
                    },
                })
                // const data = await response.json()
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        test()
    })
    return (
        <>
            <div className='container flex flex-row'>
                <div className='flex flex-col'>
                    <div className='bg-red-500 h-[100vh] w-[13vw]'>1</div>
                    
                </div>
                {/*  */}
                <div>
                    frfr
                </div>
            </div>






        </>
    )
}



