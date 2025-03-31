import { memo } from "react";
import { Handle, Position, ReactFlowState, useStore } from "@xyflow/react";

const CirclNode = memo(({id}: {id: string}) => {
    const label = useStore((s: ReactFlowState) => {
        const node = s.nodeLookup.get(id);

        if (!node) {
            return null;
        }

        return `Position x:${node.position.x.toFixed(0)} y:${node.position.y.toFixed(0)}`;
    });

    return (
        <div className="circle-node">
            <div>{label || 'no node connected'}</div>
            <Handle type="target" position={Position.Left} className="custom-handle" />
        </div>
    )
})

export default CirclNode;
