import { Handle, Position, useReactFlow, useStore } from "@xyflow/react";
import React, { memo } from "react";

const dimensionAttrs = ['width', 'height'] as const;

interface TextInputNodeProps {
    id: string;
}

const TextInputNode = ({ id }: TextInputNodeProps) => {
    const { setNodes } = useReactFlow();
    const dimensions = useStore((s) => {
        const node = s.nodeLookup.get('2-3');
        if (!node ||
            !node.measured.width ||
            !node.measured.height ||
            !s.edges.some((edge) => edge.target === id)
        ) {
            return null;
        }
        return {
            width: node.measured.width,
            height: node.measured.height,
        };
    })

    const updateDimension = (attr: 'width' | 'height') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setNodes((nodes) => {
            return nodes.map((node) => {
                if (node.id === '2-3') {
                    const parentNode = nodes.find(node => node.id === '2-1');
                    const parentNodeWidth = parentNode ? parentNode.style?.width : Infinity;
                    const parentNodeHeight = parentNode ? parentNode.style?.height : Infinity;

                    const currentNode = nodes.find(node => node.id === '2-3');
                    const currentPosX = currentNode?.position.x;
                    const currentPosY = currentNode?.position.y;

                    const parentWidth = typeof parentNodeWidth === 'string' ? parentNodeWidth : String(parentNodeWidth);
                    const parentHeight = typeof parentNodeHeight === 'string' ? parentNodeHeight : String(parentNodeHeight);
                    const maxWidth = currentPosX !== undefined ? Math.max(parseInt(parentWidth) - currentPosX, 0) : 0;
                    const maxHeight = currentPosY !== undefined ? Math.max(parseInt(parentHeight) - currentPosY, 0) : 0;

                    const newSize = {
                        width: attr === 'width' ? Math.min(value, maxWidth) : currentNode?.style?.width,
                        height: attr === 'height' ? Math.min(value, maxHeight) : currentNode?.style?.height
                    }

                    return {
                        ...node,
                        style: {
                            ...node.style,
                            [attr]: newSize[attr],
                        }
                    }
                }

                return node;
            })
        })
    }

    return (
        <div>
            {
                dimensionAttrs.map((attr) => (
                    <React.Fragment key={attr}>
                        <label htmlFor={attr}>{attr}</label>
                        <input
                            type="number"
                            value={dimensions ? dimensions[attr] : 0}
                            onChange={updateDimension(attr)}
                            className="text-input-node__input nodrag"
                            disabled={!dimensions}
                        />
                    </React.Fragment>
                ))
            }
            {!dimensionAttrs && 'no node connected'}
            <Handle type="target" position={Position.Top} className='custom-handle' />
        </div>
    )
}

export default memo(TextInputNode);
