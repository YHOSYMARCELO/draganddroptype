import React, { useCallback, useState } from "react"
import { Title } from "./Title.tsx"
import "../css/Header.css"
import { ContenedorSmall } from "./ContenedorSmall.tsx"
interface Card {
    id: string;
    textoSmall: string;
    color: string;
}
const Contenedor = () => {

    const [cards, setCards] = useState<Card[]>(Array.from({ length: 30 }, (_, index) => ({
        id: index.toString(),
        textoSmall: `Text ${index + 1}`,
        color: index % 2 === 0 ? "#FFAA80" : "#1ee28e",
    })))

    const findCard = useCallback((id: string) => {
        const card = cards.filter((c) => c.id === id)[0];
        return { card, index: cards.indexOf(card) };
    }, [cards])

    const moveCard = useCallback((id: string, to: number) => {
        const fromIndex = findCard(id).index;
        setCards((prevCards) => {
            const newCards: Card[] = [...prevCards];
            const [draggedCard] = newCards.splice(fromIndex, 1);
            return newCards.splice(to, 0, draggedCard)
        });
    }, [findCard])
    return (
        <>
            <div className="contenedor_general">
                <div>
                    <Title color="#FFAA80" texto="Presupuesto" cantidad="03" />
                    {cards.map((card) => (
                        <ContenedorSmall
                            key={card.id}
                            id={card.id}
                            textoSmall={card.textoSmall}
                            color={card.color}
                            moveCard={moveCard}
                            findCard={findCard} />
                    ))}
                </div>
                <div>
                    <Title color="#FFAA80" texto="Calidad" cantidad="03" />
                    <div
                        onDrop={(e) => {
                            e.preventDefault();
                            const cardId = e.dataTransfer.getData("cardId");
                            const toIndex = cards.length; 
                            moveCard(cardId, toIndex);
                        }}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        Arrastra aquí para agregar tarjetas
                    </div>
                </div>
                <div>
                    <Title color="#FFAA80" texto="Diseño" cantidad="03" />
                </div>
                <div>
                    <Title color="#FFAA80" texto="Pedidos" cantidad="03" />
                </div>
                <div>
                    <Title color="#FFAA80" texto="Produccion" cantidad="03" />
                </div>
                <div>
                    <Title color="#FFAA80" texto="Asignacion" cantidad="03" />
                </div>
            </div>
        </>
    )
}
export default Contenedor; 