import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='w-100'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={'page-item '+(+number === +currentPage ? 'current-page' : '')}>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;