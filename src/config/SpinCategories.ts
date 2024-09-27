const categories = [
    "Historia",
    "Cultura General",
    "Gastronomia",
    "Actividades",
    "Imperdible",
    "Premio Sorpresa",
    "Pierde el turno",
    "Tira de nuevo",
    "Premio consuelo",
    "Libre",
    "Premio imperdible",
] as const;


export type Category = (typeof categories)[number];

const categoryContent: Record<Category, { title: string; message: string; action: string; block?: number }> = {
    "Premio Sorpresa": {
        title: "¡Felicidades!",
        message: "Has ganado un premio sorpresa. Habla con el controlador para más información.",
        action: "spin",
    },
    "Historia": {
        title: "Pregunta de Historia",
        message: "Responde esta pregunta sobre la historia mundial. ¿Listo?",
        action: "redirect",
        block: 1
    },
    "Pierde el turno": {
        title: "¡Oh no!",
        message: "Has perdido tu turno. Mejor suerte la próxima vez.",
        action: "spin",
    },
    "Cultura General": {
        title: "Pregunta de Cultura General",
        message: "Responde una pregunta sobre cultura general. ¿Listo?",
        action: "redirect",
        block: 2
    },
    "Tira de nuevo": {
        title: "¡Tira de nuevo!",
        message: "Tienes otra oportunidad para girar la ruleta.",
        action: "spin",
    },
    "Gastronomia": {
        title: "Pregunta de Gastronomía",
        message: "Responde esta pregunta sobre comida y cocina. ¿Listo?",
        action: "redirect",
        block: 3
    },
    "Premio consuelo": {
        title: "Premio Consuelo",
        message: "Habla con el controlador para recibir tu premio consuelo.",
        action: "spin",
    },
    "Actividades": {
        title: "Pregunta de Actividades",
        message: "Responde esta pregunta sobre actividades recreativas. ¿Listo?",
        action: "redirect",
        block: 4
    },
    "Imperdible": {
        title: "¡Imperdible!",
        message: "Te ha tocado un premio imperdible. ¡Felicidades!",
        action: "redirect",
        block: 5
    },
    "Libre": {
        title: "Turno Libre",
        message: "Este turno es libre. Puedes descansar.",
        action: "spin",
    },
    "Premio imperdible": {
        title: "Premio Imperdible",
        message: "Has ganado el premio más grande. ¡Enhorabuena!",
        action: "spin",
    },
};

export {categories, categoryContent} 