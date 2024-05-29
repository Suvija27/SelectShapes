const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setColor = ({ data }) => ({ color: data });
const setSize = ({ data }) => ({ size: data });
const actions = { increaseCount, setShape, setColor, setSize };

export default actions;
