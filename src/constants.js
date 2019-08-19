const prod = {
    PUBLIC_URL: 'https://nickelaos.github.io/react-posts'
}

const dev = {
    PUBLIC_URL: 'http://localhost:3000'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;