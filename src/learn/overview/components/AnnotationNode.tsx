interface AnnotationNodeProps {
    data: {
        label: string;
        level: number;
        arrowStyle?: React.CSSProperties;
    };
}

export default function AnnotationNode({ data }: AnnotationNodeProps) {
    return (
        <>
            <div className='annotation-content'>
                <div className='annotation-level'>{data.level}.</div>
                <div>{data.label}</div>
            </div>
            {data.arrowStyle && (
                <div className="annotation-arrow" style={data.arrowStyle}>
                    ⤹
                </div>
            )}
        </>
    );
}