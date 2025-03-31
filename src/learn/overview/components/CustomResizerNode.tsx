import { Handle, NodeResizeControl, Position } from "@xyflow/react";

const ResizeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.293 1.293L11 4.586V2H9V8H15V6H12.414L15.707 2.707L14.293 1.293Z" fill="currentColor"/>
      <path d="M4.586 11H2V9H8V15H6V12.414L2.707 15.707L1.293 14.293L4.586 11Z" fill="currentColor"/>
    </svg>
  );
  const controlStyle = {
    background: 'transparent',
    border: 'none',
  };

const CustomResizerNode = ({ data }: { data: { label: string } }) => {
   return (
    <>
        <NodeResizeControl minWidth={50} minHeight={50} style={controlStyle}>
            <ResizeIcon />
        </NodeResizeControl>
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
};

export default CustomResizerNode;