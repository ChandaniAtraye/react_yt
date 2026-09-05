import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className="h-50 w-48  rounded-xl overflow-hidden">
                    <img className='w-full h-full object-cover ' src={props.elem.download_url} alt='images' />
                </div>
                <h3 className='text-center text-lg font-bold'>{props.elem.author}</h3>
            </a>
        </div>
    )
}

export default Card