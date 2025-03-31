import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from "@xyflow/react";

export default function ButtonEdge({id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd}: EdgeProps) {
    const {setEdges} = useReactFlow();

    const [edgePath, labelX, labelY] = getBezierPath({sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition});

    const onEdgeClick = () => {
        setEdges((eds) => eds.filter((ed) => ed.id !== id));
    }

    return (
        <>
            <BaseEdge path={edgePath} style={style} markerEnd={markerEnd} />
            <EdgeLabelRenderer>
                <div className="button-edge__label nodrag nopan" style={{
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                }}>
                    <button className="button-edge__button" onClick={onEdgeClick}>
                        x
                    </button>
                </div>
            </EdgeLabelRenderer>
        </>
    )
}