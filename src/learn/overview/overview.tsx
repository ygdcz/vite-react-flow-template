import { useCallback, useMemo } from "react";
import AnnotationNode from "./components/AnnotationNode";
import { addEdge, Background, Connection, Controls, MiniMap, Node, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import {
    nodes as initialNodes,
    edges as initialEdges,
} from './initial-elements';
import { ButtonEdge, CircleNode, CustomResizerNode, TextInputNode, ToolbarNode } from "./components";
import './overview.css'

const Overview = () => {
    const nodeTypes = useMemo(() => ({ annotation: AnnotationNode, circle: CircleNode, tools: ToolbarNode, customresizer: CustomResizerNode, textinput: TextInputNode }), []);
    const edgeTypes = useMemo(() => ({ button: ButtonEdge }), []);

    const [nodes, , onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const nodeClassName = (node: Node) => node.type ?? '';

    const onConnect = useCallback(
        (edge: Connection) => setEdges((eds) => addEdge(edge, eds)),
        [setEdges],
    );

    return (
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} onConnect={onConnect} style={{ backgroundColor: "#F7F9FB" }} onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}>
            <MiniMap zoomable pannable nodeClassName={nodeClassName} />
            <Controls />
            <Background />
        </ReactFlow>
    )
}

export default Overview;
