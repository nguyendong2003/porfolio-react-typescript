
interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;  // CSSProperties được gợi ý css code ở props truyền vào
    onClick?: () => void;
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button
            onClick={onClick}
            className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;