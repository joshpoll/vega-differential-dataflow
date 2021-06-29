type Files = any;

const connect = (
  addr: string,
  onFiles: (files: Files) => void,
  onClose: () => void): void => {
  const ws = new WebSocket(addr);
  ws.onopen = () => console.log("socket opened");
  ws.onmessage = (e) => {
    const parsed: Files = JSON.parse(e.data);
    onFiles(parsed);
  };
  ws.onclose = () => {
    onClose();
  };
  ws.onerror = (e) => {
    console.error("socket error", e);
  };
}