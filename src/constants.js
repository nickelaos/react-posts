const prod = {
    PUBLIC_URL: '/react-posts'
}

const dev = {
    PUBLIC_URL: '/'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;