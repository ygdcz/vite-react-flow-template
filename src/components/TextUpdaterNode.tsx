import { memo, useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
 

const handleStyle = { left: 10 };
 
function TextUpdaterNode() {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        style={handleStyle}
      />
    </>
  );
}

 
export default memo(TextUpdaterNode);