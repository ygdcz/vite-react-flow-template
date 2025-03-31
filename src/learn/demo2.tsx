import { addEdge, Background, Connection, Handle, OnConnectEnd, OnConnectStart, Position, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { useCallback } from "react";
import './demo2.css'

const initialNodes = [
    {id: '0', type: 'custominput', position: {x: 0, y: 150}, data: {label: 'input'}},
    {id: 'A', type: 'customnode', position: {x: 200, y: 150}, data: {label: 'A'}},
    {id: 'B', type: 'customnode', position: {x: 200, y: 250}, data: {label: 'B'}},
    {id: 'C', type: 'customnode', position: {x: 200, y: 350}, data: {label: 'C'}},
]

const isValidConnection = (connection: Connection) => {
    return connection.target === 'B' && connection.source !== 'B';
}

const onConnectStart: OnConnectStart = (_, {nodeId, handleType}) => console.log('on connect start', { nodeId, handleType });
const onConnectEnd: OnConnectEnd = (_, state) => console.log('on connect end', state);

const CustomInput = () => (
    <>
        <div>Custom Input</div>
        <Handle type="source" position={Position.Right} />
    </>
)

const CustomNode = ({id}: {id: string}) => (
    <>
        <div>Custom Node {id}</div>
        <Handle type="target" position={Position.Left}  />
        <Handle type="source" position={Position.Right} />
    </>
)

const nodeTypes = {
    custominput: CustomInput,
    customnode: CustomNode,
}

const ValidationFlow = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params: Connection) => setEdges((eds) => {
        return addEdge(params, eds);
    }), [setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            selectNodesOnDrag={false}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-right"
            className="validationflow"
            onConnectStart={onConnectStart}
            onConnectEnd={onConnectEnd}
            isValidConnection={isValidConnection}
            style={{backgroundColor: "#f7f9fb"}}
            defaultEdgeOptions={{
                animated: true,
                style: {
                    stroke: "#b2b5b9",
                    strokeWidth: 2,
                },
            }}
        >
            <Background />
        </ReactFlow>
    )
}

export default ValidationFlow;