import axios from "axios";

const url = 'https://667444ad75872d0e0a95ca54.mockapi.io/Usuarios'


export const getAll = async () => {
    try {
        const { data: productos } = await axios.get(url)
        return productos
    }
    catch(error) {
        console.error("Error productos GET:", error);
        return []
    }
}