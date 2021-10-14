export async function getMovements() {
    const res = await fetch('http://localhost:3000/api/v1/movements');
    const json = await res.json();
    return json;
}

export async function addMovement(data) {
    const res = await fetch('http://localhost:3000/api/v1/movements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export default {
    getMovements
};
