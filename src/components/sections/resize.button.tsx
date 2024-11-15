
interface IProps {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;  // CSSProperties được gợi ý css code ở props truyền vào
}

const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle } = props;

    return (
        <button className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;