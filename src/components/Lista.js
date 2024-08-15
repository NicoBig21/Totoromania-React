const Lista = ({ elementos }) => {
    return (
        <div className="galeria">
            {elementos.map((elemento, index) => (
                <img key={index} src={elemento} alt={`Imagen ${index + 1}`} />
            ))}
        </div>
    );
};

export default Lista;

