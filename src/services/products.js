export async function getProducts() {
    const res = await fetch('http://localhost:3000/api/v1/products');
    const json = await res.json();
    return json;
}

export default {
    getProducts
};
