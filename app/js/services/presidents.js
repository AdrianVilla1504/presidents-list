export async function getPresidents() {
    try {
        const response = await fetch("");
        if (!response.ok) {
            throw new Error(`Error al obtener la lista de presidentes: ${response.status}`);
        }
        const presidents = await response.json();        
        const sortedPresidents = presidents.sort((a, b) => a.name.localeCompare(b.name));
        return sortedPresidents;
    } catch (error) {
        console.error(error);
    }
}
export async function getCityById(id) {
    try {
        const response = await fetch(``);
        if (!response.ok) {
            throw new Error(`Error al obtener la ciudad por id: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}