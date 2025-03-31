import { Edge, MarkerType, Node } from "@xyflow/react";

export const nodes: Node[] = [
    {
        id: 'annotation-1',
        type: 'annotation',
        draggable: false,
        selectable: false,
        data: {
            level: 1,
            label:
                'Built-in node and edge types. Draggable, deletable and connectable!',
            arrowStyle: {
                right: 0,
                bottom: 0,
                transform: 'translate(-30px,10px) rotate(-80deg)',
            },
        },
        position: { x: -200, y: -30 },
    },
    {
        id: 'circle-1',
        type: 'circle',
        data: {},
        position: { x: 350, y: 500 },
    },
    {
        id: '2-1',
        type: 'group',
        position: {
            x: -170,
            y: 250,
        },
        style: {
            width: 380,
            height: 180,
        },
        data: {}
    },
    {
        id: '2-2',
        data: {},
        type: 'tools',
        position: { x: 50, y: 50 },
        style: {
            width: 80,
            height: 80,
        },
        parentId: '2-1',
        extent: 'parent',
    },
    {
        id: '2-3',
        type: 'customresizer',
        data: {
            label: 'Resize Me',
        },
        position: { x: 250, y: 50 },
        style: {
            width: 80,
            height: 80,
        },
        parentId: '2-1',
        extent: 'parent',
    },
    {
        id: '3-2',
        type: 'textinput',
        position: { x: 150, y: 650 },
        data: {},
    },
];

export const edges: Edge[] = [
    {
        id: 'e2-3',
        source: '2-2',
        target: '2-3',
        type: 'smoothstep',
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: 'e3-2',
        source: '2-3',
        target: '3-2',
        type: 'button',
        animated: true
    },
]