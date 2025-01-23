export const uploadToCloudinary = async (file) => {
    return {
        secure_url: "http://localhost:3000/next.svg",
        width: 778,
        height: 1037,
    }
};

export const stringToSlug = (str) => {
    if (!str) return '';
    return str
        .toLowerCase() // Convertir a minúsculas
        .normalize("NFD") // Descomponer caracteres Unicode (para separar acentos)
        .replace(/[\u0300-\u036f]/g, "") // Eliminar los acentos
        .replace(/[^a-z0-9\s-]/g, "") // Eliminar caracteres no alfanuméricos (excepto espacios y guiones)
        .replace(/\s+/g, "-") // Reemplazar espacios por guiones
        .replace(/-+/g, "-") // Eliminar guiones repetidos
        .replace(/^-+|-+$/g, ""); // Eliminar guiones al principio o final
};
