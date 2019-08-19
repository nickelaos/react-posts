import React from 'react'

const PageTitle = (props) => {
    return (
        <div className="row row-no-padding mb-2">
            <div className="card bg-dark w-100 pl-3 pr-3 pt-1 pb-1">
                <h1 className="text-white">{props.title}</h1>
            </div>
        </div>
    )
}

export default PageTitle;