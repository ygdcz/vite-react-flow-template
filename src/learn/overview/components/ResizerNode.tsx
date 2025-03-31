import { Handle, NodeResizer, Position } from "@xyflow/react";
import { memo } from "react";

interface ResizerNodeProps {
    data: {
        label: string;
    }
}

const ResizerNode = ({ data }: ResizerNodeProps) => {
    return (
        <>
            <NodeResizer minWidth={50} minHeight={50} />
            <Handle type="target" position={Position.Left} className="custom-handle" />
            <div>{data.label}</div>
            <div className="resizer-node__handles">
                <Handle
                    className="resizer-node__handle custom-handle"
                    id="a"
                    type="source"
                    position={Position.Bottom}
                />
                <Handle
                    className="resizer-node__handle custom-handle "
                    id="b"
                    type="source"
                    position={Position.Bottom}
                />
            </div>
        </>
    )
}

export default memo(ResizerNode);
