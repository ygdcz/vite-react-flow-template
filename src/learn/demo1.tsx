import { addEdge, Background, BackgroundVariant, Controls, MiniMap, OnConnect, Panel, ReactFlow, useEdgesState, useNodesState, Edge } from "@xyflow/react"

import { useCallback, useMemo } from "react";
import TextUpdaterNode from "../components/TextUpdaterNode";
import './demo1.css'
import CustomEdge from "../components/CustomEdge";
import SineEdge from "../components/SineEdge";
import ButtonEdge from "./overview/components/ButtonEdge";


const initialNodes = [
    { id: 'a', position: { x: 0, y: 0 }, data: { label: 'Node A' } },
    { id: 'b', position: { x: 200, y: 100 }, data: { label: 'Node B' } },
    { id: 'c', position: { x: 0, y: 200 }, data: { label: 'Node C' } },
    { id: 'd', position: { x: 200, y: 300 }, data: { label: 'Node D' } },
]

const initialEdges: Edge[] = [
    { id: 'c->d', type: 'sine', source: 'c', target: 'd' },
    { id: 'a->b', type:'delete-button', source: 'a', target: 'b' },
]
export default function Demo1() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback((connection) => {
        const edge = {...connection,  type: 'delete-button', label: 'Edge ' + connection.source + '-' + connection.target };
        setEdges((eds) => addEdge(edge, eds));
    }, [setEdges]);

    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
    const edgeTypes = useMemo(() => ({ 'custom': CustomEdge, 'sine': SineEdge, 'delete-button': ButtonEdge }), []);

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <ReactFlow style={{backgroundColor: '#B8CEFF',}} fitView nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes}
            onConnectEnd={(_, state) => {console.log(state)}} edgeTypes={edgeTypes}>
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
                <Panel position="top-right">
                    <div>
                        <h2>Panel</h2>
                        <p>You can add any content to the panel</p>
                    </div>
                </Panel>
            </ReactFlow>
        </div>
    )
}